///Used for main of the app

const setup = require('./setup');
const watcher = require('./watcher');

setup();
watcher.start();