let crypto = require('crypto');
let base64url = require('base64url');
function randomStringAsBase64Url(size) {
    return base64url(crypto.randomBytes(size));
}
function generateKey() {
    return randomStringAsBase64Url(32);
}

module.exports ={generateKey}