const { igdl } = require('./lib/instagram.js');
const { fbdl } = require('./lib/facebook.js');
const { pidl } = require('./lib/pinterest.js');
const { ytsdl } = require('./lib/yotube-search.js');
const { downloadMP3, downloadMP4 } = require('./lib/youtube.js');
module.exports = { igdl, fbdl, pidl, ytsdl, downloadMP3, downloadMP4  };