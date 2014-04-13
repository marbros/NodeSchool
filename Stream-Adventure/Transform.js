var through = require('through');
var tr = through(write, end);

function write (buf) { 
	var result = buf.toString().toUpperCase();
	this.queue(result); 
}
function end() {
	this.queue(null)
}

process.stdin.pipe(tr).pipe(process.stdout);