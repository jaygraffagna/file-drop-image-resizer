//Creates the require folder for the user to drop images into

const config = require('./config');
const os = require('os');
const fs = require('fs');

module.exports = ()=>{
	fs.mkdir(config.path, (err) =>{
		if(err)
			console.log('image-resizer folder created');
	});

	fs.mkdir(config.output, (err) =>{
		if(err)
			console.log('output folder alrady created');
	});

	//Creates a command file for windows to start with a file
	if(os.platform == 'win32'){
		fs.writeFile(config.path + '/start.cmd', "npm image-resizer start", (err)=>{
			if(err)
				console.log("start up file already created");
		});
	}
};

