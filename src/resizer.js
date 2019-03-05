//Resizes images from config paths

const config = require('./config');
const settings = require('./settings');
const sharp = require('sharp');
const fs = require('fs');

const resize = (file) =>{
	fs.exists(config.output + '/' + file.toString(), (exists) =>{
		let width = settings.width();
		if(!exists && width){
			let img = sharp(config.path + '/' + file.toString())
			.resize(width)
			.toFile(config.output + '/' + file.toString());
		}
	});
}

module.exports.resize = resize;