//Config file with paths used throught the app

const os = require('os');

module.exports.path = os.homedir() + '/desktop/image-resizer';
module.exports.output = os.homedir() + '/desktop/image-resizer/output';
module.exports.settings = os.homedir() + '/desktop/image-resizer/settings.txt';