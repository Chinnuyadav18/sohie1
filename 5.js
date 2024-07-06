const crypto=require('crypto');
const secret='abcdefg';
const hash=crypto.createhmac('sha256',secret).update('Aits').digest('hex');
console.log(hash);