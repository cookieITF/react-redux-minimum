var http = require("http");
http
  .createServer(function(req, res) {
    res.writeHead(200, {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    });
    res.end(
      JSON.stringify([
        { age: 30, id: 0, name: "foo" },
        { age: 25, id: 1, name: "bar" }
      ])
    );
  })
  .listen(18080);
