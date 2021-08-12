const html2pug = require('html2pug')
 
const html = blog;
const pug = html2pug(html, { tabs: true });
console.log(pug);