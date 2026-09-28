'use client';

import { useEffect, useRef } from 'react';
import {
  AdditiveBlending,
  AmbientLight,
  CanvasTexture,
  CatmullRomCurve3,
  Color,
  DirectionalLight,
  FrontSide,
  Group,
  Mesh,
  MeshBasicMaterial,
  MeshPhongMaterial,
  PerspectiveCamera,
  Quaternion,
  Raycaster,
  SRGBColorSpace,
  Scene,
  ShaderMaterial,
  SphereGeometry,
  TubeGeometry,
  Vector2,
  Vector3,
  WebGLRenderer,
} from 'three';

const R = 1;
const INDIA_POINT = { lat: 21.5, lon: 78.5 };
const INDIA_FILL = '#22d3ee';
const INDIA_EDGE = '#111111';
const ARC_COLOR = '#ffffff';
const DOT_COLOR = '#ffffff';
const ORIGIN_COLOR = '#ffffff';
const OCEAN = '#0b1f3a';
const LAND = '#e8e4db';
const BORDER = 'rgba(68, 78, 86, 0.28)';
const VIEW_CENTER = { lat: 23.6, lon: 78 };
const REST = {
  x: (-8 * Math.PI) / 180,
  y: (-18 * Math.PI) / 180,
  z: (2 * Math.PI) / 180,
};
const SNAP_MS = 900;

const ROUTES = [
  { id: 'uk', lat: 52.5, lon: -1.5, h: 0.085, bulge: -0.008, opacity: 0.8 },
  { id: 'nigeria', lat: 9.6, lon: 7.5, h: 0.06, bulge: 0.005, opacity: 0.76 },
  { id: 'southafrica', lat: -28.7, lon: 24.7, h: 0.075, bulge: 0.006, opacity: 0.78 },
  { id: 'usa', lat: 39.5, lon: -98.0, h: 0.12, bulge: 0.012, opacity: 0.8 },
  { id: 'brazil', lat: -14.2, lon: -51.9, h: 0.11, bulge: -0.01, opacity: 0.78 },
  { id: 'siberia', lat: 61.0, lon: 105.0, h: 0.07, bulge: -0.01, opacity: 0.68 },
  { id: 'china', lat: 34.3, lon: 108.9, h: 0.045, bulge: 0.004, opacity: 0.74 },
  { id: 'japan', lat: 36.2, lon: 138.2, h: 0.07, bulge: -0.008, opacity: 0.84 },
  { id: 'philippines', lat: 12.4, lon: 122.0, h: 0.045, bulge: 0.005, opacity: 0.72 },
  { id: 'australia', lat: -25.3, lon: 133.8, h: 0.085, bulge: -0.008, opacity: 0.82 },
];

const ROUTE_WIDTH = 0.00125;

const AFRICA_ISOS = new Set([
  'AGO', 'BDI', 'BEN', 'BFA', 'BWA', 'CAF', 'CIV', 'CMR', 'COD', 'COG', 'COM',
  'CPV', 'DJI', 'DZA', 'EGY', 'ERI', 'ESH', 'ETH', 'GAB', 'GHA', 'GIN', 'GMB',
  'GNB', 'GNQ', 'KEN', 'LBR', 'LBY', 'LSO', 'MAR', 'MDG', 'MLI', 'MOZ', 'MRT',
  'MWI', 'NAM', 'NER', 'NGA', 'RWA', 'SDN', 'SEN', 'SLE', 'SOM', 'SSD', 'STP',
  'SWZ', 'TCD', 'TGO', 'TUN', 'TZA', 'UGA', 'ZAF', 'ZMB', 'ZWE',
]);

const EUROPE_ISOS = new Set([
  'ALB', 'AND', 'AUT', 'BEL', 'BGR', 'BIH', 'BLR', 'CHE', 'CYP', 'CZE', 'DEU',
  'DNK', 'ESP', 'EST', 'FIN', 'FRA', 'FRO', 'GBR', 'GRC', 'HRV', 'HUN', 'IRL',
  'ISL', 'ITA', 'LIE', 'LTU', 'LUX', 'LVA', 'MCO', 'MDA', 'MKD', 'MLT', 'MNE',
  'NLD', 'NOR', 'POL', 'PRT', 'ROU', 'SRB', 'SVK', 'SVN', 'SWE', 'UKR', 'VAT',
  'XKX',
]);

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

function polygonsOf(geom) {
  if (!geom) return [];
  if (geom.type === 'Polygon') return [geom.coordinates];
  if (geom.type === 'MultiPolygon') return geom.coordinates;
  return [];
}

function ringCrossesDateline(ring) {
  for (let i = 1; i < ring.length; i += 1) {
    if (Math.abs(ring[i][0] - ring[i - 1][0]) > 180) return true;
  }
  return false;
}

function traceRing(ctx, ring, w, h, splitDateline) {
  let started = false;
  let prevLon = null;
  ring.forEach(([lon, lat]) => {
    if (splitDateline && prevLon != null && Math.abs(lon - prevLon) > 180) {
      started = false;
    }
    const [x, y] = project(lon, lat, w, h);
    if (!started) {
      ctx.moveTo(x, y);
      started = true;
    } else {
      ctx.lineTo(x, y);
    }
    prevLon = lon;
  });
}

function ptKey(lon, lat) {
  return `${lon.toFixed(3)},${lat.toFixed(3)}`;
}

function strokeDissolvedOutline(ctx, features, w, h) {
  const counts = new Map();
  const segs = new Map();
  features.forEach((feature) => {
    polygonsOf(feature.geometry).forEach((polygon) => {
      polygon.forEach((ring) => {
        if (!ring || ring.length < 2) return;
        const closed =
          ring[0][0] === ring[ring.length - 1][0] && ring[0][1] === ring[ring.length - 1][1]
            ? ring
            : [...ring, ring[0]];
        for (let i = 0; i < closed.length - 1; i += 1) {
          const a = closed[i];
          const b = closed[i + 1];
          const ka = ptKey(a[0], a[1]);
          const kb = ptKey(b[0], b[1]);
          if (ka === kb) continue;
          const key = ka < kb ? `${ka}|${kb}` : `${kb}|${ka}`;
          counts.set(key, (counts.get(key) || 0) + 1);
          if (!segs.has(key)) segs.set(key, [a, b]);
        }
      });
    });
  });
  ctx.beginPath();
  counts.forEach((n, key) => {
    if (n !== 1) return;
    const [a, b] = segs.get(key);
    const [x0, y0] = project(a[0], a[1], w, h);
    const [x1, y1] = project(b[0], b[1], w, h);
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
  });
  ctx.stroke();
}

function wrapPi(value) {
  const tau = Math.PI * 2;
  return ((((value + Math.PI) % tau) + tau) % tau) - Math.PI;
}

function easeOutCubic(t) {
  return 1 - (1 - t) ** 3;
}

function indiaPolygons(data) {
  if (!data) return [];
  if (data.type === 'FeatureCollection') {
    return (data.features || []).flatMap((feature) => polygonsOf(feature.geometry));
  }
  return polygonsOf(data.geometry || data);
}

function fillPolys(ctx, polys, w, h, rule) {
  polys.forEach((polygon) => {
    if (!polygon?.[0]) return;
    ctx.beginPath();
    polygon.forEach((ring) => {
      traceRing(ctx, ring, w, h, false);
      ctx.closePath();
    });
    ctx.fill(rule);
  });
}

function strokePolys(ctx, polys, w, h) {
  ctx.beginPath();
  polys.forEach((polygon) => {
    polygon.forEach((ring) => traceRing(ctx, ring, w, h, false));
  });
  ctx.stroke();
}

function makeGlobeTexture(countriesGeo, indiaFeature, disputedGeo, size) {
  const w = size;
  const h = size / 2;
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = OCEAN;
  ctx.fillRect(0, 0, w, h);

  const toFill = [];
  const toStroke = [];
  const africaFeatures = [];
  const europeFeatures = [];
  (countriesGeo?.features || []).forEach((feature) => {
    const iso = feature.properties?.iso;
    if (iso === 'IND') return;
    const polys = polygonsOf(feature.geometry);
    toFill.push(...polys);
    if (AFRICA_ISOS.has(iso)) africaFeatures.push(feature);
    else if (EUROPE_ISOS.has(iso)) europeFeatures.push(feature);
    else toStroke.push(...polys);
  });
  const indiaPolys = indiaPolygons(indiaFeature);

  ctx.fillStyle = LAND;
  ctx.strokeStyle = BORDER;
  ctx.lineWidth = Math.max(1.05, w / 3600);
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';

  toFill.forEach((polygon) => {
    const outer = polygon[0];
    if (!outer || ringCrossesDateline(outer)) return;
    ctx.beginPath();
    polygon.forEach((ring) => {
      traceRing(ctx, ring, w, h, false);
      ctx.closePath();
    });
    ctx.fill('evenodd');
  });

  ctx.beginPath();
  toStroke.forEach((polygon) => {
    polygon.forEach((ring) => traceRing(ctx, ring, w, h, true));
  });
  ctx.stroke();

  strokeDissolvedOutline(ctx, africaFeatures, w, h);
  strokeDissolvedOutline(ctx, europeFeatures, w, h);

  const claimPolys = (disputedGeo?.features || []).flatMap((feature) => polygonsOf(feature.geometry));
  const indiaUnion = [...indiaPolys, ...claimPolys];

  ctx.fillStyle = INDIA_FILL;
  fillPolys(ctx, indiaPolys, w, h, 'evenodd');
  fillPolys(ctx, claimPolys, w, h, 'nonzero');

  ctx.strokeStyle = INDIA_FILL;
  ctx.lineWidth = Math.max(3.2, w / 1100);
  strokePolys(ctx, indiaUnion, w, h);

  ctx.strokeStyle = INDIA_EDGE;
  ctx.lineWidth = Math.max(4.2, w / 980);
  strokePolys(ctx, indiaUnion, w, h);

  ctx.fillStyle = INDIA_FILL;
  fillPolys(ctx, indiaPolys, w, h, 'evenodd');
  fillPolys(ctx, claimPolys, w, h, 'nonzero');

  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  texture.anisotropy = 8;
  texture.needsUpdate = true;
  return { texture, canvas };
}

function slerpSegment(from, to, height, bulge, steps) {
  const a = latLonToVec3(from.lat, from.lon, 1).normalize();
  const b = latLonToVec3(to.lat, to.lon, 1).normalize();
  const axis = new Vector3().crossVectors(a, b);
  const axisLen = axis.length();
  const pts = [];
  if (axisLen < 1e-5) {
    for (let i = 0; i <= steps; i += 1) {
      const t = i / steps;
      pts.push(a.clone().multiplyScalar(R + 0.016 + height * Math.sin(Math.PI * t)));
    }
    return pts;
  }
  axis.divideScalar(axisLen);
  const angle = Math.acos(Math.min(1, Math.max(-1, a.dot(b))));
  const peak = Math.min(0.12, 0.016 + height * (0.22 + 0.78 * (angle / Math.PI)));
  const q = new Quaternion();
  for (let i = 0; i <= steps; i += 1) {
    const t = i / steps;
    q.setFromAxisAngle(axis, angle * t);
    const p = a.clone().applyQuaternion(q);
    const lift = Math.sin(Math.PI * t);
    p.multiplyScalar(R + 0.016 + peak * lift ** 0.9);
    p.addScaledVector(axis, bulge * lift * (0.35 + 0.65 * (angle / Math.PI)));
    pts.push(p);
  }
  return pts;
}

function makeArcCurve(from, to, height, bulge) {
  return new CatmullRomCurve3(slerpSegment(from, to, height, bulge, 96));
}

function makeRouteMaterial(opacity) {
  return new ShaderMaterial({
    uniforms: {
      uColor: { value: new Color(ARC_COLOR) },
      uOpacity: { value: opacity },
      uBoost: { value: 1 },
    },
    vertexShader: `
      varying float vFacing;
      void main() {
        vec3 n = normalize(position);
        vec4 viewN = modelViewMatrix * vec4(n, 0.0);
        vFacing = viewN.z;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 uColor;
      uniform float uOpacity;
      uniform float uBoost;
      varying float vFacing;
      void main() {
        float fade = smoothstep(-0.04, 0.58, vFacing);
        float a = uOpacity * uBoost * fade;
        if (a < 0.018) discard;
        gl_FragColor = vec4(uColor, a);
      }
    `,
    transparent: true,
    depthTest: true,
    depthWrite: false,
    side: FrontSide,
  });
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

export default function ContactGlobe() {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return undefined;

    let cancelled = false;
    let dispose = () => {};

    (async () => {
      let countriesGeo = { features: [] };
      let indiaFeature = null;
      let disputedGeo = { features: [] };
      try {
        const [countriesRes, indiaRes, disputedRes] = await Promise.all([
          fetch('/geo/world-countries.json'),
          fetch('/geo/india.json'),
          fetch('/geo/kashmir-disputed.json'),
        ]);
        if (countriesRes.ok) countriesGeo = await countriesRes.json();
        if (indiaRes.ok) indiaFeature = await indiaRes.json();
        if (disputedRes.ok) disputedGeo = await disputedRes.json();
      } catch {
        countriesGeo = { features: [] };
      }
      if (cancelled) return;

      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const isMobile = window.matchMedia('(max-width: 640px)').matches;
      const texSize = isMobile ? 2048 : 4096;
      const routeList = isMobile
        ? ROUTES.filter((r) => ['uk', 'southafrica', 'usa', 'brazil', 'japan', 'australia'].includes(r.id))
        : ROUTES;

      const { texture } = makeGlobeTexture(countriesGeo, indiaFeature, disputedGeo, texSize);

      const scene = new Scene();
      const camera = new PerspectiveCamera(33, 1, 0.1, 20);
      camera.position.set(0, 0.08, 3.58);

      let renderer;
      try {
        renderer = new WebGLRenderer({
          canvas,
          antialias: !isMobile,
          alpha: true,
          powerPreference: 'high-performance',
        });
      } catch {
        return;
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2));
      renderer.setClearColor(0x000000, 0);

      const spin = new Group();
      const earth = new Group();
      spin.add(earth);
      scene.add(spin);

      const globeMat = new MeshPhongMaterial({
        map: texture,
        shininess: 6,
        specular: new Color('#3d6f8f'),
        depthWrite: true,
      });
      globeMat.polygonOffset = true;
      globeMat.polygonOffsetFactor = 1;
      globeMat.polygonOffsetUnits = 1;
      const globeMesh = new Mesh(new SphereGeometry(R, isMobile ? 96 : 128, isMobile ? 72 : 96), globeMat);
      globeMesh.renderOrder = 0;
      earth.add(globeMesh);

      const viewVec = latLonToVec3(VIEW_CENTER.lat, VIEW_CENTER.lon).normalize();
      earth.quaternion.setFromUnitVectors(viewVec, new Vector3(0, 0, 1));
      const north = new Vector3(0, 1, 0).applyQuaternion(earth.quaternion);
      earth.rotateOnWorldAxis(new Vector3(0, 0, 1), Math.atan2(north.x, north.y));

      const worldPos = new Vector3();
      const zAxis = new Vector3(0, 0, 1);
      const raycaster = new Raycaster();
      const pointer = new Vector2();
      const hoverables = [];
      const routeMats = [];
      const tubes = [];

      const routes = routeList.map((dest) => {
        const curve = makeArcCurve(INDIA_POINT, dest, dest.h, dest.bulge);
        const mat = makeRouteMaterial(dest.opacity);
        const glowMat = makeRouteMaterial(dest.opacity * 0.16);
        routeMats.push(mat, glowMat);

        const tube = new Mesh(new TubeGeometry(curve, 80, ROUTE_WIDTH, 5, false), mat);
        tube.renderOrder = 4;
        tube.userData.routeId = dest.id;
        earth.add(tube);
        tubes.push(tube);
        hoverables.push(tube);

        const glow = new Mesh(new TubeGeometry(curve, 48, ROUTE_WIDTH * 1.6, 5, false), glowMat);
        glow.renderOrder = 4;
        glow.raycast = () => {};
        earth.add(glow);
        tubes.push(glow);

        const destVec = latLonToVec3(dest.lat, dest.lon, R * 1.016);
        const node = new Mesh(
          new SphereGeometry(0.0055, 8, 8),
          new MeshBasicMaterial({ color: DOT_COLOR, transparent: true, opacity: 0.95, depthWrite: false }),
        );
        node.position.copy(destVec);
        node.renderOrder = 5;
        earth.add(node);

        const halo = new Mesh(
          new SphereGeometry(0.014, 8, 8),
          new MeshBasicMaterial({
            color: DOT_COLOR,
            transparent: true,
            opacity: 0.22,
            depthWrite: false,
          }),
        );
        halo.position.copy(destVec);
        halo.quaternion.setFromUnitVectors(zAxis, destVec.clone().normalize());
        halo.renderOrder = 5;
        earth.add(halo);

        const traveler = new Mesh(
          new SphereGeometry(0.01, 10, 10),
          new MeshBasicMaterial({
            color: '#ffffff',
            transparent: true,
            opacity: 0.95,
            blending: AdditiveBlending,
            depthWrite: false,
          }),
        );
        traveler.renderOrder = 6;
        earth.add(traveler);

        return {
          dest,
          curve,
          mat,
          glowMat,
          node,
          halo,
          traveler,
          nodeMat: node.material,
          haloMat: halo.material,
          travelerMat: traveler.material,
        };
      });

      const originVec = latLonToVec3(INDIA_POINT.lat, INDIA_POINT.lon, R * 1.02);
      const origin = new Mesh(
        new SphereGeometry(0.011, 12, 12),
        new MeshBasicMaterial({ color: ORIGIN_COLOR, transparent: true, opacity: 1, depthWrite: false }),
      );
      origin.position.copy(originVec);
      origin.renderOrder = 6;
      earth.add(origin);

      const originPulse = new Mesh(
        new SphereGeometry(0.028, 16, 16),
        new MeshBasicMaterial({
          color: ARC_COLOR,
          transparent: true,
          opacity: 0.16,
          depthWrite: false,
        }),
      );
      originPulse.position.copy(originVec);
      originPulse.renderOrder = 5;
      earth.add(originPulse);

      scene.add(new AmbientLight('#fff8f0', 1.12));
      const key = new DirectionalLight('#fff6ea', 0.38);
      key.position.set(-2.2, 1.6, 3);
      scene.add(key);
      const fill = new DirectionalLight('#d5e8f4', 0.16);
      fill.position.set(2, -1, 1);
      scene.add(fill);

      const drag = { active: false, x: 0, y: 0 };
      const rot = { x: REST.x, y: REST.y };
      let returning = null;
      let hovered = '';
      let visible = true;

      const sizeTo = () => {
        const boxW = wrap.clientWidth || 320;
        const boxH = wrap.clientHeight || boxW;
        renderer.setSize(boxW, boxH, false);
        camera.aspect = boxW / Math.max(boxH, 1);
        camera.updateProjectionMatrix();
      };
      sizeTo();

      const onDown = (e) => {
        e.preventDefault();
        wrap.setPointerCapture?.(e.pointerId);
        drag.active = true;
        returning = null;
        drag.x = e.clientX;
        drag.y = e.clientY;
        wrap.style.cursor = 'grabbing';
      };
      const onMove = (e) => {
        const rect = wrap.getBoundingClientRect();
        pointer.set(
          ((e.clientX - rect.left) / Math.max(rect.width, 1)) * 2 - 1,
          -((e.clientY - rect.top) / Math.max(rect.height, 1)) * 2 + 1,
        );
        if (drag.active) {
          rot.y += (e.clientX - drag.x) * 0.005;
          rot.x += (e.clientY - drag.y) * 0.005;
          rot.x = Math.max(-0.95, Math.min(0.95, rot.x));
          drag.x = e.clientX;
          drag.y = e.clientY;
          return;
        }
        raycaster.setFromCamera(pointer, camera);
        const hits = raycaster.intersectObjects(hoverables, false);
        hovered = hits[0]?.object.userData.routeId || '';
        wrap.style.cursor = hovered ? 'pointer' : 'grab';
      };
      const onUp = () => {
        if (!drag.active) return;
        drag.active = false;
        wrap.style.cursor = 'grab';
        if (reduce) {
          rot.x = REST.x;
          rot.y = REST.y;
          returning = null;
          return;
        }
        returning = {
          x0: rot.x,
          y0: wrapPi(rot.y),
          t0: performance.now(),
        };
        rot.y = returning.y0;
      };
      const onLeave = () => {
        if (!drag.active) {
          hovered = '';
          wrap.style.cursor = 'grab';
        }
      };

      wrap.style.cursor = 'grab';
      wrap.addEventListener('pointerdown', onDown);
      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', onUp);
      window.addEventListener('pointercancel', onUp);
      wrap.addEventListener('pointerleave', onLeave);

      const ro = new ResizeObserver(sizeTo);
      ro.observe(wrap);

      const io = new IntersectionObserver(
        ([entry]) => {
          visible = Boolean(entry?.isIntersecting);
        },
        { threshold: 0.08 },
      );
      io.observe(wrap);

      let raf;
      const tick = (t) => {
        const time = t * 0.001;
        if (!visible) {
          raf = requestAnimationFrame(tick);
          return;
        }

        if (returning && !drag.active) {
          const snap = Math.min(1, (performance.now() - returning.t0) / SNAP_MS);
          const e = easeOutCubic(snap);
          rot.x = returning.x0 + (REST.x - returning.x0) * e;
          rot.y = returning.y0 + (REST.y - returning.y0) * e;
          if (snap >= 1) returning = null;
        }
        spin.rotation.x = rot.x;
        spin.rotation.y = rot.y;
        spin.rotation.z = REST.z;
        spin.updateMatrixWorld();
        earth.updateMatrixWorld();

        const slot = 5.4;
        const n = routes.length;
        const phase = reduce ? 0 : time / slot;
        const active = Math.floor(phase) % n;
        const next = (active + 1) % n;
        const u = phase - Math.floor(phase);

        if (!reduce) {
          const breathe = 0.5 + 0.5 * Math.sin(time * 0.85);
          originPulse.scale.setScalar(1 + breathe * 0.55);
          originPulse.material.opacity = 0.14 * (1 - breathe * 0.45);
        }

        routes.forEach((route, i) => {
          const boost = hovered === route.dest.id ? 1.55 : 1;
          route.mat.uniforms.uBoost.value = lerp(route.mat.uniforms.uBoost.value, boost, 0.12);
          route.glowMat.uniforms.uBoost.value = lerp(route.glowMat.uniforms.uBoost.value, boost, 0.12);

          const pulse = reduce ? 0.7 : 0.62 + 0.38 * Math.sin(time * 1.1 + i * 0.9);
          route.nodeMat.opacity = hovered === route.dest.id ? 1 : 0.55 + pulse * 0.35;
          route.haloMat.opacity = hovered === route.dest.id ? 0.32 : 0.1 + pulse * 0.08;
          const haloScale = hovered === route.dest.id ? 1.35 : 0.9 + pulse * 0.25;
          route.halo.scale.setScalar(haloScale);

          let travel = -1;
          if (!reduce) {
            if (i === active && u < 0.82) travel = u / 0.82;
            else if (i === next && u > 0.58) travel = (u - 0.58) / 0.42;
          }
          if (travel < 0) {
            route.traveler.visible = false;
          } else {
            const tt = travel * travel * (3 - 2 * travel);
            route.traveler.position.copy(route.curve.getPoint(tt));
            route.traveler.updateMatrixWorld();
            route.traveler.getWorldPosition(worldPos);
            route.traveler.visible = worldPos.z > 0.12;
          }
        });

        renderer.render(scene, camera);
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);

      dispose = () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        io.disconnect();
        wrap.removeEventListener('pointerdown', onDown);
        window.removeEventListener('pointermove', onMove);
        window.removeEventListener('pointerup', onUp);
        window.removeEventListener('pointercancel', onUp);
        wrap.removeEventListener('pointerleave', onLeave);
        renderer.dispose();
        texture.dispose();
        globeMesh.geometry.dispose();
        globeMat.dispose();
        origin.geometry.dispose();
        origin.material.dispose();
        originPulse.geometry.dispose();
        originPulse.material.dispose();
        tubes.forEach((tube) => tube.geometry.dispose());
        routeMats.forEach((mat) => mat.dispose());
        routes.forEach((route) => {
          route.node.geometry.dispose();
          route.nodeMat.dispose();
          route.halo.geometry.dispose();
          route.haloMat.dispose();
          route.traveler.geometry.dispose();
          route.travelerMat.dispose();
        });
      };
    })();

    return () => {
      cancelled = true;
      dispose();
    };
  }, []);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div
        ref={wrapRef}
        className="relative w-full min-h-[18rem] flex-1 select-none"
        style={{ touchAction: 'none' }}
        aria-label="3D globe of Earth with routes from India worldwide"
      >
        <canvas ref={canvasRef} className="h-full w-full" />
      </div>
      <p
        className="mt-5 text-center sm:mt-6"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        <span className="block text-[0.68rem] font-medium tracking-[0.34em] text-white/42">
          FROM INDIA
        </span>
        <span className="mt-1.5 block text-[1.12rem] font-semibold tracking-tight text-white sm:text-[1.28rem]">
          TO <span className="text-cyan-300/85">WORLDWIDE</span>
        </span>
      </p>
    </div>
  );
}
