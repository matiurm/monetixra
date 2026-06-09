const fs = require('fs');
const text = fs.readFileSync('index.html', 'utf8');
const start = text.indexOf('async function doLogin()');
const end = text.indexOf('async function sendRegOtp()', start);
const snippet = text.slice(start, end);
const idx = snippet.indexOf('if(!foundUid)');
console.log(snippet.slice(idx-80, idx+420));
