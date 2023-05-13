const http = require("http");
const fs = require("fs");
const route = (path, response, status_code) => {
  fs.readFile(path, (err, data) => {
    response.writeHead(status_code, { "Content-Type": "text/html" });
    response.write(data);
    return response.end();
  });
};
const server = http.createServer((request, response) => {
  if (request.url == "/" || request.url == "/homepage") {
    let path = "html/homepage.html";
    route(path, response, 200);
  } else if (request.url == "/about" || request.url == "/about-us") {
    let path = "html/about.html";
    route(path, response, 200);
  } else {
    let path = "html/notFound.html";
    route(path, response, 401);
  }
});
server.listen(8080);
