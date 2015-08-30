var Firebase = require('firebase');
var myFirebaseRef = new Firebase('https://datadrawer.firebaseio.com/pngs');
var fs = require('fs');

exports.getPngUri = function(notebookId, pictureId, cb) {
  fs.readFile(__dirname + '/public/scatter.raw', function (err, data) {
    if (err) { throw err; }
    console.log('png uri', data.toString().slice(0, 10));
    cb(data.toString());
  });
};
