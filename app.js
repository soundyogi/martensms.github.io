
var port = parseInt(process.argv[2], 10);
if (isNaN(port)) {
	port = 3000;
}


var final_handler = require('finalhandler');
var http          = require('http');
var serve_static  = require('serve-static');

var serve         = serve_static('./', {
	index: [ 'index.html' ]
});

var server = http.createServer(function(req, res) {

	var done = final_handler(req, res);
	serve(req, res, done);

});


server.listen(port);

console.log('Listening on port ' + port);

