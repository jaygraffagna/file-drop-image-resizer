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

	//Creates a settings file the user can change the width of resize
	if(!fs.existsSync(config.settings)){
		fs.writeFile(config.settings, 'width=600', (err)=>{
			if(err)
				console.log("start up file already created");
		});
	}

	//Creates a package.json for app startups
	if(!fs.existsSync('package.json')){
		fs.writeFile('package.json', '{"scripts":{ "start": "node node_modules/file-drop-image-resizer/src/index" }}', (err)=>{
			if(err)
				console.log("package file already created");
		});
	}

	//Creates a command file for windows to start with a file
	if(os.platform == 'win32'){
		fs.writeFile(config.path + '/start.cmd', "cd " + process.cwd() + "\n npm start", (err)=>{
			if(err)
				console.log("start up file already created");
		});
	}
};

