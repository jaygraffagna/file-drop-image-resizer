//Watches for images files to be resized

const config = require('./config');
const resizer = require('./resizer');
const fs = require('fs');

const watch = ()=>{
	fs.readdir(config.path, (err, files)=>{
		files.forEach(file => {
			let start = file.indexOf('.');
			let ext = file.substring(start).toUpperCase();
			if(ext == '.JPG' || ext == '.JPEG' || ext == '.PNG'){
				resizer.resize(file);
			}
		});
	});
}

const begin = () =>{
	watcher = setInterval(watch, 1000);
}

module.exports.start = begin;