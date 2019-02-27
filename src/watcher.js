const fs = require('fs');
var watcher;

const watch = ()=>{
	fs.readdir('', (err, files)=>{
		files.forEach(file => {

		});
	});
}

const begin = () =>{
	setInterval(watch, 1000);
}

const end = () =>{
	clearInterval(watcher);
}

module.exports.start = begin;
module.exports.stop = end;