
const os = require('os');
const fs = require('fs');

if(!fs.existsSync('package.json')){
	fs.writeFile('package.json', '{"scripts":{ "start": "node node_modules/file-drop-image-resizer/src/index" }}', (err)=>{
		if(err)
			console.log("package file already created");
	});
}
