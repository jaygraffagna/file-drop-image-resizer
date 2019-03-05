//Read settings.txt file created by setup module and can be adjusted by user

const fs = require('fs');
const config = require('./config');

let width = ()=>{
	try{
		let setting = fs.readFileSync(config.settings, 'utf8');
		let pair = setting.split('=');
		if(pair[0] == 'width'){
			return parseInt(pair[1]);
		}
	}
	catch(ex){
		console.log('Error reading setting. Default width: 600')
	}
	return 600;
};


module.exports.width = width;