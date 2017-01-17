const port = require('./lib/app.js');

port.then(port => {
  require('http').Server((req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end('<h1 style="font-size: 15em">🎉</h1>');
  }).listen(port);

  console.log('The party is on [::1]:' + port);
});
