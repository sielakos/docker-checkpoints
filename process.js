const http = require('http');

let i = 0;

const requestListener = async function (req, res) {
  let body = '';

  req.on('data', function (data) {
      body += data;
  });

  req.on('end', function () {
      const input = JSON.parse(body);
      i = i + input;

      console.log({ input, i });

      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(`i = ${i}`);

  });
}

const server = http.createServer(requestListener);
server.listen(4080);
