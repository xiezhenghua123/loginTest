const express = require('express')
const router = express.Router()
const { token } = require('../core/token/index.js')
const { publicKey } = require('../core/security/RSA')
const { aesDecrypt, aesEncrypt } = require('../core/security/aes-128-cbc')

router.get('/', (req, res) => {
  res.send('Hello World')
})

router.post('/getPubKey', (req, res) => {
  console.log(publicKey)
  res.send({ pubKey: publicKey })
})
router.post('/login', (req, res) => {
  // const aesKey = decrypt(req.params.aesKey)
  console.log(req.body)
  res.send({
    message: 'ok',
  })
  // const password = aesDecrypt(req.params.password, aesKey.key, aesKey.iv)
  // res.send({
  //   message: 'ok',
  //   token: aesEncrypt(token(req.params), aesKey.key, aesKey.iv),
  // })
  // console.log(password)
})
module.exports = router
