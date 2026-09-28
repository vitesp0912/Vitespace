const { spawn } = require('child_process');
const fs = require('fs');
const http = require('http');
const chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const out = '/tmp/vitespace-about/contact-globe-3d.png';
const profile = '/tmp/chrome-globe-profile';

fs.mkdirSync('/tmp/vitespace-about', { recursive: true });
fs.mkdirSync(profile, { recursive: true });

const child = spawn(chrome, [
  '--headless=new',
  '--disable-gpu',
  '--hide-scrollbars',
  '--no-sandbox',
  `--user-data-dir=${profile}`,
  '--window-size=1440,1100',
  `--screenshot=${out}`,
  '--virtual-time-budget=12000',
  'http://localhost:3000/contact',
], { stdio: 'inherit' });

child.on('exit', (code) => {
  console.log('chrome exit', code, fs.existsSync(out) ? fs.statSync(out).size : 0);
  process.exit(code || 0);
});
