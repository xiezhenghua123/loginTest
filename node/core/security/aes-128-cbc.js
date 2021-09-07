const crypto = require('crypto')

/**
 * 加密
 * @param {string} data 原文
 * @param {string} key CipherKey
 * @param {string} iv
 */
const aesEncrypt = (data, key, iv) => {
  const cipher = crypto.createCipheriv('aes-128-cbc', key, iv)
  let crypted = cipher.update(data, 'utf8', 'base64')
  crypted += cipher.final('base64')
  return crypted
}

/**
 * 解密
 * @param {string} encrypted 密文
 * @param {string} key CipherKey
 * @param {string} iv
 */
const aesDecrypt = (encrypted, key, iv) => {
  const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv)
  let decrypted = decipher.update(encrypted, 'base64', 'utf8')
  decrypted += decipher.final('utf8')
  return decrypted
}

module.export = { aesEncrypt, aesDecrypt }
