const http = require("http");
const fs = require("fs");
const route = (path, response, status_code, type) => {
  fs.readFile(path, (err, data) => {
    response.writeHead(status_code, { "Content-Type": type });
    response.write(data);
    return response.end();
  });
};
const server = http.createServer((request, response) => {
  // HTML ROUTES
  if (request.url == "/" || request.url == "/homepage") {
    let path = "html/homepage.html";
    route(path, response, 200, "text/html");
  } else if (request.url == "/about" || request.url == "/about-us") {
    let path = "html/about.html";
    route(path, response, 200, "text/html");
  }

  // CSS ROUTES
  else if (request.url == "/css/homepage.css") {
    let path = "css/homepage.css";
    route(path, response, 200, "text/css");
  } else {
    let path = "html/notFound.html";
    route(path, response, 401, "text/html");
  }
});
server.listen(8080);
