<template>
  <div>
    <label for="username">用户名：</label
    ><input type="text" name="username" v-model="username" />
    <label for="password">密码：</label
    ><input type="password" name="password" v-model="password" />
    <button @click="login">登录</button>
  </div>
</template>
<script>
import creatQuest from '../../core/axios'
import jsencrypt from '../../core/security/jsencrypt'
import { randomGenerate } from '../../core/security/random'
import { aesEncrypt } from '../../core/security/index'

export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    async login() {
      let { data } = await creatQuest().post('/getPubKey')

      const aseKey = randomGenerate(16)
      const aseIv = randomGenerate(16)
      const ase = {
        key: aesEncrypt(aseKey, aseKey, aseIv),
        iv: aesEncrypt(aseIv, aseKey, aseIv),
      }
      await creatQuest({
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      })
        .post('/login', {
          username: this.username,
          password: jsencrypt(this.password, data.pubKey),
          aesKey: ase,
        })
        .then(data => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
}
</script>
