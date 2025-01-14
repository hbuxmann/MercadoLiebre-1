const express = require("express");
const app = express();
app.use(express.static("public"));

app.listen(process.env.PORT || 3030, () => {
  console.log("Servidor funcionando");
});

app.get("/", (req, res) => {
  res.sendFile(dirname + "/views/home.html");
});

app.get("/register", (req, res) => {
  res.sendFile(dirname + "/views/register.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/views/login.html");
});
