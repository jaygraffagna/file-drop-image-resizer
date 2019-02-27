//Creates the require folder for the user to drop images into

const os = require('os');
const fs = require('fs');

module.exports = ()=>{
	fs.mkdir(os.homedir() + '/desktop/image-resizer', (err) =>{
		if(err)
			console.log('image-resizer folder created');
	});

	fs.mkdir(os.homedir() + '/desktop/image-resizer/output', (err) =>{
		if(err)
			console.log('output folder alrady created!');
	});

	//Creates a command file for windows to start with a file
	if(os.platform == 'win32'){
		fs.writeFile(os.homedir() + '/desktop/image-resizer/start.cmd', "npm image-resizer start", (err)=>{
			if(err)
				console.log("start up file already created!");
		});
	}
};

