const crypto = require("crypto");
const { Buffer } = require("buffer");

let { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 1024,
  publicKeyEncoding: {
    type: "spki",
    format: "pem",
  },
  privateKeyEncoding: {
    type: "pkcs1",
    format: "pem",
  },
});
publicKey = publicKey
  .replace("-----BEGIN PUBLIC KEY-----", "")
  .replace("-----END PUBLIC KEY-----", "")
  .replace(/\n/g, "");

privateKey = Buffer.from(privateKey);
const priDecrypt = (data) => {
  return crypto
    .privateDecrypt(
      { key: privateKey, padding: crypto.constants.RSA_PKCS1_PADDING },
      data
    )
    .toString();
};
module.exports = { publicKey, priDecrypt };
