const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  //const log = `${Date.now()}: ${req.url} New Req Recived\n`;
  //fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("HomePage");
        break;
      case "/about":
        res.end("I am sushat singh negi");
        break;
      default:
        res.end("404 Note Found");
    }
  // }
  // );
  //   console.log(req);
  //   console.log("New Req rec.");
  //   res.end("Hello from Server");
});

myServer.listen(8000, () => console.log("Server is Running"));
