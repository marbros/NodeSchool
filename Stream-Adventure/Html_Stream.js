var through = require('through');
var trumpet = require('trumpet');
var fs = require('fs');
var tr = trumpet();
var tr2 = through(write, end);

function write (buf) { 
	buf = buf.toString().toUpperCase();
	this.queue(buf); 
}
function end() {
	this.queue(null)
}

var stream = tr.select('.loud').createStream();

process.stdin.pipe(tr).pipe(process.stdout);
stream.pipe(tr2).pipe(stream);

// fs.createReadStream('input.html').pipe(tr);

// var stream = tr.select('.beep').createReadStream();