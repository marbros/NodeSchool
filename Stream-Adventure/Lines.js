var through = require('through');
var split = require('split');
var tr = through(write, end);
var word = 1;

function write (buf) { 
	if(word % 2 == 0) {
		buf = buf.toString().toUpperCase() + '\n';
	}else {
		buf = buf.toString().toLowerCase() + '\n';
	}
	word += 1;
	this.queue(buf); 
}
function end() {
	this.queue(null)
}

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);