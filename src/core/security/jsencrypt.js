import Jsencrypt from 'jsencrypt'

const jsencrypt = (data, publicKey) => {
  const encrypt = new Jsencrypt()
  encrypt.setPublicKey(publicKey)
  return encrypt.encrypt(data.toString())
}
export default jsencrypt
