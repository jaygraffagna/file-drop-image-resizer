const dir = require('os').homedir();
const fs = require('fs');

fs.mkdir(dir + '/image-resizer', (err) =>{
	console.log('Folder alrady created!');
});