var express = require('express');
var path = require('path');

var app = express();

var publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

if (process.env.NODE_ENV === 'production') {
  var port = process.env.PORT || 3000;
  // And run the server
  app.listen(port, function () {
    console.log('Server running on port ' + port);
  });
} else {
  var devServer = require('./server/dev.js');
  devServer(app);
}



