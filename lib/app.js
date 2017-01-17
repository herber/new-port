var net = require('net');

module.exports = new Promise(function (resolve, reject) {
  var server = net.createServer();

  server.unref();

  server.on('error', reject);

  server.listen(0, function () {
    var port = server.address().port;

    server.close(function () {
      resolve(port);
    });
  });
});
