const http = require("http");
const fs = require("fs");
http
  .createServer(function (req, res) {
    let path;
    switch (req.url) {
      case "/":
        path = "index.html";
        break;
      case "/about":
        path = "about.html";
        break;
      case "/contact-me":
        path = "contact-me.html";
        break;
      default:
        path = "404.html";
        break;
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile(path, function (error, data) {
      if (error) res.writeHead(404);
      else res.write(data);
      res.end();
    });
  })
  .listen(8080);
