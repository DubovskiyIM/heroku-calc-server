const PORT = 4321;
const http = require('http');
const querystring = require('querystring');

const server = http.createServer();

const calc = (req, res) => {
  const { n1, n2 } = querystring.parse(req.url.substr(5));
  res.setHeader('Access-Control-Allow-Origin','https://kodaktor.ru')
  switch (req.url.substr(0, 4)) {
    case '/add':
      res.end(`${+n1 + +n2}`);
      break;
    case '/mpy':
      res.end(`${+n1 * +n2}`);
      break;
  }
}

server.listen(process.env.PORT || PORT);
server.on('request', calc)
