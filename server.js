var http = require('http');
var port = process.env.PORT || 5000;
http.createServer(function(req, res) {
    var request_body = "";
    req.on("data", function(chunk) {
        request_body += chunk;
    });

    var response_data = {};
    req.on("end", function() {
        response_data = {
            "method": req.method,
            "version": req.httpVersion,
            "url": req.url,
            "headers": req.headers,
            "body": request_body,
            "ip": ("X-Forwarded-For" in req.headers)? req.headers["X-Forwarded-For"] : req.connection.remoteAddress
        };

        res.setHeader("Content-Type", "application/json");
        res.setHeader("Server", "HTTP Dumper");
        res.end(JSON.stringify(response_data) + "\n");
    });
}).listen(port, function() {
    console.log("Server listening on port " + port);
});

