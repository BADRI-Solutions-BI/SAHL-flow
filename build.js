const fs = require('fs'), path = require('path');
const dir = __dirname;
const tabs = [
  ['arch', 'System architecture'], ['flow', 'Data in to out'],
  ['pipe', 'Challan pipeline'], ['ckd', 'CKD import'], ['roles', 'Roles'],
  ['seq1', 'Email intake'], ['seq2', 'Upload to GRN'],
  ['life1', 'Challan states'], ['life2', 'CKD states'], ['life3', 'GRN outbound'],
];
const data = tabs.map(([id, title]) => ({ id, title, b64: fs.readFileSync(path.join(dir, id + '.html')).toString('base64') }));
const json = JSON.stringify(data).replace(/</g, '\\u003c');
const out = fs.readFileSync(path.join(dir, 'template.html'), 'utf8').replace('/*DATA*/', () => json);
fs.writeFileSync(path.join(dir, 'SAHL-full-visual.html'), out);
console.log('bytes', out.length);
