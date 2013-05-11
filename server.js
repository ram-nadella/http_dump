var http = require('http'),
    _ = require('lodash');

var port = process.env.PORT || 5000;
http.createServer(function(req, res) {
    var request_body = "";
    req.on("data", function(chunk) {
        request_body += chunk;
    });

    // remove x-heroku headers
    var headers = _.pick(req.headers, function(value, name) { return (name.indexOf("x-heroku") !== 0) });

    var response_data = {};
    req.on("end", function() {
        response_data = {
            "method": req.method,
            "version": req.httpVersion,
            "url": req.url,
            "headers": headers,
            "body": request_body,
            "ip": ("x-forwarded-for" in req.headers)? req.headers["x-forwarded-for"] : req.connection.remoteAddress
        };

        res.setHeader("Content-Type", "application/json");
        res.setHeader("Server", "HTTP Dumper");
        res.end(JSON.stringify(response_data) + "\n");
    });
}).listen(port, function() {
    console.log("Server listening on port " + port);
});

