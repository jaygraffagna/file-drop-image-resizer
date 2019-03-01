//Resizes images from config paths

const config = require('./config');
const sharp = require('sharp');
const fs = require('fs');

const resize = (file) =>{
	fs.exists(config.output + '/' + file.toString(), (exists) =>{
		if(!exists){
			sharp(config.path + '/' + file.toString())
			.resize(600, 400)
			.toFile(config.output + '/' + file.toString());
		}
	});
}

module.exports.resize = resize;