var http = require("http");

http.createServer(function(req,res){
  res.writeHead(200);
  res.end(coredata.temperature.target);
}).listen(80);
