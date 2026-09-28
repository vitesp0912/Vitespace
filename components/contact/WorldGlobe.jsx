'use client';

import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  AmbientLight,
  BackSide,
  BufferGeometry,
  CanvasTexture,
  Color,
  DirectionalLight,
  Group,
  Line,
  LineBasicMaterial,
  Mesh,
  MeshBasicMaterial,
  MeshPhongMaterial,
  PerspectiveCamera,
  QuadraticBezierCurve3,
  Scene,
  SphereGeometry,
  SRGBColorSpace,
  Vector3,
  WebGLRenderer,
} from 'three';
import { DESTINATIONS, INDIA, INDIA_POINT, LAND } from '@/lib/geo/land';

const ease = [0.16, 1, 0.3, 1];
const R = 1;

function latLonToVec3(lat, lon, r = R) {
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((lon + 180) * Math.PI) / 180;
  return new Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta),
  );
}

function project(lon, lat, w, h) {
  return [((lon + 180) / 360) * w, ((90 - lat) / 180) * h];
}

function drawRing(ctx, ring, w, h) {
  ctx.beginPath();
  ring.forEach(([lon, lat], i) => {
    const [x, y] = project(lon, lat, w, h);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.closePath();
}

function makeGlobeTexture() {
  const w = 2048;
  const h = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#0b1118';
  ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = 'rgba(255,255,255,0.045)';
  ctx.lineWidth = 1;
  for (let lat = -60; lat <= 60; lat += 30) {
    const y = project(0, lat, w, h)[1];
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }
  for (let lon = -150; lon <= 150; lon += 30) {
    const x = project(lon, 0, w, h)[0];
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }

  ctx.fillStyle = '#4a5560';
  ctx.strokeStyle = '#6b7682';
  ctx.lineWidth = 1.1;
  LAND.forEach((ring) => {
    drawRing(ctx, ring, w, h);
    ctx.fill();
    ctx.stroke();
  });

  ctx.fillStyle = 'rgba(103,232,249,0.82)';
  ctx.strokeStyle = 'rgba(103,232,249,0.95)';
  ctx.lineWidth = 1.4;
  drawRing(ctx, INDIA, w, h);
  ctx.fill();
  ctx.stroke();

  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  texture.anisotropy = 8;
  texture.needsUpdate = true;
  return texture;
}

function makeArc(from, to) {
  const a = latLonToVec3(from.lat, from.lon, R * 1.012);
  const b = latLonToVec3(to.lat, to.lon, R * 1.012);
  const lift = Math.min(1.32, 1.08 + a.distanceTo(b) * 0.22);
  const mid = a.clone().add(b).normalize().multiplyScalar(R * lift);
  return new QuadraticBezierCurve3(a, mid, b);
}

export default function WorldGlobe() {
  const reduce = useReducedMotion();
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const labelsRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const scene = new Scene();
    const camera = new PerspectiveCamera(42, 1, 0.1, 20);
    camera.position.set(0, 0, 2.48);

    let renderer;
    try {
      renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true });
    } catch (err) {
      return undefined;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);

    const texture = makeGlobeTexture();
    const spin = new Group();
    const earth = new Group();
    spin.add(earth);
    scene.add(spin);

    const globeMat = new MeshPhongMaterial({
      map: texture,
      shininess: 12,
      specular: new Color('#142830'),
    });
    const globeMesh = new Mesh(new SphereGeometry(R, 96, 64), globeMat);
    earth.add(globeMesh);

    const atmosphere = new Mesh(
      new SphereGeometry(R * 1.06, 64, 48),
      new MeshBasicMaterial({
        color: '#67e8f9',
        transparent: true,
        opacity: 0.07,
        side: BackSide,
      }),
    );
    earth.add(atmosphere);

    const indiaVec = latLonToVec3(INDIA_POINT.lat, INDIA_POINT.lon, R * 1.02);
    earth.quaternion.setFromUnitVectors(indiaVec.clone().normalize(), new Vector3(0, 0, 1));

    const arcLines = [];
    const arcs = DESTINATIONS.map((dest, i) => {
      const curve = makeArc(INDIA_POINT, dest);
      const line = new Line(
        new BufferGeometry().setFromPoints(curve.getPoints(64)),
        new LineBasicMaterial({ color: '#67e8f9', transparent: true, opacity: 0.55 }),
      );
      earth.add(line);
      arcLines.push(line);
      const dot = new Mesh(
        new SphereGeometry(0.012, 10, 8),
        new MeshPhongMaterial({ color: '#67e8f9', emissive: '#67e8f9', emissiveIntensity: 0.8 }),
      );
      earth.add(dot);
      return { curve, dest, dot, delay: i * 0.35 };
    });

    const origin = new Mesh(
      new SphereGeometry(0.02, 12, 10),
      new MeshPhongMaterial({ color: '#67e8f9', emissive: '#67e8f9', emissiveIntensity: 1 }),
    );
    origin.position.copy(latLonToVec3(INDIA_POINT.lat, INDIA_POINT.lon, R * 1.02));
    earth.add(origin);

    const destDots = DESTINATIONS.map((dest) => {
      const marker = new Mesh(
        new SphereGeometry(0.011, 10, 8),
        new MeshPhongMaterial({ color: '#c8d0d8', emissive: '#67e8f9', emissiveIntensity: 0.35 }),
      );
      marker.position.copy(latLonToVec3(dest.lat, dest.lon, R * 1.018));
      earth.add(marker);
      return marker;
    });

    scene.add(new AmbientLight('#ffffff', 0.72));
    const key = new DirectionalLight('#e8fbff', 1.15);
    key.position.set(-2.2, 1.6, 3);
    scene.add(key);
    const fill = new DirectionalLight('#67e8f9', 0.18);
    fill.position.set(2, -1, 1);
    scene.add(fill);

    const drag = { active: false, x: 0, y: 0, idle: 0 };
    const rot = { x: 0.06, y: 0 };

    const sizeTo = () => {
      const w = wrap.clientWidth || 320;
      const h = wrap.clientHeight || w;
      renderer.setSize(w, h, false);
      camera.aspect = w / Math.max(h, 1);
      camera.updateProjectionMatrix();
    };
    sizeTo();

    const onDown = (e) => {
      e.preventDefault();
      wrap.setPointerCapture?.(e.pointerId);
      drag.active = true;
      drag.x = e.clientX;
      drag.y = e.clientY;
      wrap.style.cursor = 'grabbing';
    };
    const onMove = (e) => {
      if (!drag.active) return;
      const dx = e.clientX - drag.x;
      const dy = e.clientY - drag.y;
      drag.x = e.clientX;
      drag.y = e.clientY;
      rot.y += dx * 0.005;
      rot.x += dy * 0.005;
      rot.x = Math.max(-0.9, Math.min(0.9, rot.x));
    };
    const onUp = () => {
      drag.active = false;
      drag.idle = 0;
      wrap.style.cursor = 'grab';
    };

    wrap.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);

    const ro = new ResizeObserver(sizeTo);
    ro.observe(wrap);

    let raf;
    const tick = (t) => {
      const time = t * 0.001;
      if (!drag.active && !reduce) {
        drag.idle += 1;
        if (drag.idle > 220) rot.y += 0.0026;
      }
      spin.rotation.x = rot.x;
      spin.rotation.y = rot.y;
      spin.updateMatrixWorld();
      earth.updateMatrixWorld();

      if (!reduce) {
        arcs.forEach((arc) => {
          const u = (time * 0.28 + arc.delay) % 1;
          arc.dot.position.copy(arc.curve.getPoint(u));
        });
      }

      const layer = labelsRef.current;
      if (layer) {
        const w = wrap.clientWidth;
        const h = wrap.clientHeight;
        const items = [{ id: 'india', label: 'INDIA', accent: true, lat: INDIA_POINT.lat, lon: INDIA_POINT.lon, dy: 18 }];
        DESTINATIONS.forEach((dest) => {
          items.push({ id: dest.id, label: dest.label, accent: false, lat: dest.lat, lon: dest.lon, dy: -12 });
        });
        items.forEach((item) => {
          const world = latLonToVec3(item.lat, item.lon, R).applyMatrix4(earth.matrixWorld);
          let node = layer.querySelector(`[data-globe-label="${item.id}"]`);
          if (!node) {
            node = document.createElement('span');
            node.dataset.globeLabel = item.id;
            node.textContent = item.label;
            node.className = `pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-medium tracking-[0.14em] ${
              item.accent ? 'text-[10px] text-cyan-300' : 'text-[9px] text-white/55'
            }`;
            node.style.fontFamily = 'Poppins, sans-serif';
            layer.appendChild(node);
          }
          if (world.z < 0.28) {
            node.style.opacity = '0';
            return;
          }
          const v = world.clone().project(camera);
          node.style.opacity = '1';
          node.style.left = `${(v.x * 0.5 + 0.5) * w}px`;
          node.style.top = `${(v.y * -0.5 + 0.5) * h + item.dy}px`;
        });
      }

      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      wrap.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      renderer.dispose();
      texture.dispose();
      globeMesh.geometry.dispose();
      globeMat.dispose();
      atmosphere.geometry.dispose();
      atmosphere.material.dispose();
      origin.geometry.dispose();
      origin.material.dispose();
      destDots.forEach((marker) => {
        marker.geometry.dispose();
        marker.material.dispose();
      });
      arcs.forEach((arc) => {
        arc.dot.geometry.dispose();
        arc.dot.material.dispose();
      });
      arcLines.forEach((line) => {
        line.geometry.dispose();
        line.material.dispose();
      });
    };
  }, [reduce]);

  return (
    <div className="relative mx-auto w-full lg:mx-0">
      <div
        ref={wrapRef}
        className="relative aspect-square w-full cursor-grab select-none overflow-hidden rounded-full"
        style={{
          touchAction: 'none',
          boxShadow: '0 0 0 1px rgba(103,232,249,0.14), 0 0 80px rgba(8,145,178,0.12)',
        }}
        aria-label="Rotatable globe. Drag to spin."
      >
        <canvas ref={canvasRef} className="h-full w-full" />
        <div ref={labelsRef} className="pointer-events-none absolute inset-0 overflow-hidden" />
      </div>
      <motion.p
        className="mt-3 text-center text-[12px] tracking-tight text-white/40"
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease }}
      >
        Based in India. Building for teams worldwide. Drag to turn the globe.
      </motion.p>
    </div>
  );
}
