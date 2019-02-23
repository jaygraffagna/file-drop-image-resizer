//Creates the require folders and startup script for the user to drop images into

const dir = require('os').homedir();
const fs = require('fs');

module.exports = ()=>{
	fs.mkdir(dir + '/desktop/image-resizer', (err) =>{
		if(err)
			console.log('image-resizer folder created');
	});

	fs.mkdir(dir + '/desktop/image-resizer/output', (err) =>{
		if(err)
			console.log('output folder alrady created!');
	});

	fs.writeFile(dir + '/AppData/Roaming/Microsoft/Windows/Start Menu/Programs/Startup/image-resizer.cmd', "npm image-resizer start", (err)=>{
		if(err)
			console.log("start up file already created!");
	});
};

