const express = require("express");
const app = express();
const home = require("./router/home");

app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type,Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, X-E4M-With"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
app.use(express.json());
app.use("/", home);

let server = app.listen(3000, "127.0.0.1", () => {
  let host = server.address().address; // host域
  let port = server.address().port; // 端口号

  console.log(`Server running at http://${host}:${port}`);
});
