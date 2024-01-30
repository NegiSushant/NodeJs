const express = require("express");
const http = require("http");

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello from Home Page");
});

app.get(
  "/about",
  (req,
  (res) => {
    return res.send("Hello from About Page");
  })
);

const myServer = http.createServer(app);

myServer.listen(8000, () => console.log("Server Started"));
