const express = require("express");
const router = express.Router();
const { token } = require("../core/token/index.js");
const { publicKey, priDecrypt } = require("../core/security/RSA");
const { aesDecrypt, aesEncrypt } = require("../core/security/aes-128-cbc");
let buffer = require("buffer");

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/getPubKey", (req, res) => {
  res.send({ pubKey: publicKey });
});
router.post("/login", (req, res) => {
  const data = req.body;
  const password = priDecrypt(buffer.Buffer.from(data.password, "base64"));
  console.log(priDecrypt(buffer.Buffer.from(data.aesKey.key, "base64")));
  res.send({
    message: "ok",
    token: token(req.body),
    password: password,
  });
});
module.exports = router;
