const https = require("https");
const fs = require("fs");
var express = require("express");
const app = express();
var path = require("path");

const PORT = 8090;
https
  .createServer(
    {
      key: fs.readFileSync("..//SelfSignedSecrets//key.pem"),
      cert: fs.readFileSync("..//SelfSignedSecrets//public.pem"),
    },
    app
  )
  .listen(PORT, () => {
    console.log("Listening on https ..." + PORT);
  });
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/wss", function (req, res) {
  res.sendFile(path.join(__dirname + "/parallel-websocket-test-wss.html"));
});
