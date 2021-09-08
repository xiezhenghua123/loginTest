//先引入 jsonwebtoken
const jsonWebToken = require("jsonwebtoken");

//密钥，当然实际的项目中密钥应该变态一些
const SECRET_KEY = "kite1874";

const token = (user) => {
  return jsonWebToken.sign(
    {
      // Payload 部分，官方提供七个字段这边省略，可以携带一些可以识别用户的信息。例如 userId。
      // 千万不要是用敏感信息，例如密码，Payload 是可以解析出来的。
      userId: user.username,
      // role: user.role,
    },
    SECRET_KEY,
    {
      expiresIn: "24h", //token有效期
      // expiresIn: 60 * 60 * 24 * 7,  两种写法
      algorithm: "HS256", //默认使用 "HS256" 算法
    }
  );
};
exports.token = token;
