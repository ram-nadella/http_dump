var http = require('http');
var port = process.env.PORT || 5000;
http.createServer(function(req, res) {
    res.end('Hello World\n');
}).listen(port, function() {
    console.log("Server listening on port " + port);
});

