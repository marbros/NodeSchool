var concat = require('concat-stream');
var http = require('http');

process.stdin.pipe(concat(function(buf) {
	str = buf.toString().split("");
	stRev = str.reverse().join("") + '\n';
	process.stdout.write(stRev);
}));

// var server = http.createServer(function(req, res) {
// 	if(req.method === 'POST') {
// 		req.pipe(concat(function(body) {
// 			var obj = JSON.parse(body);
// 			res.end(Object.keys(obj).join('\n'));
// 		}));
// 	}
// 	else res.end();
// });

// server.listen(5000);

