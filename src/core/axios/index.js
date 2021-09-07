import axios from 'axios'

const creatQuest = (req = {}) => {
  let config = {
    baseURL: 'http://127.0.0.1:3000',
    timeout: 10000,
  }
  if (req.headers) {
    config.headers = req.headers
  }

  let serverQuest = axios.create(config)
  return serverQuest
}

export default creatQuest
