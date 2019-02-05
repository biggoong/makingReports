var http = require("http");
var fs = require('fs');
var path = require('path');

http.createServer(function(request, response){
    var filePath = path.join(__dirname, "data.json");
    var stat = fs.statSync(filePath);
    response.writeHead(200, {
        "Content-Type": "application/json",
        "Content-Length": stat.size,
        "Access-Control-Allow-Origin": "*"
    });
    var readStream = fs.createReadStream(filePath);
    readStream.pipe(response);
}).listen(8080, () => console.log("At 8080"));