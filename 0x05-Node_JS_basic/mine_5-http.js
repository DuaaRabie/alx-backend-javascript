const { createServer } = require('http');
const countStudents = require('./3-read_file_async.js');
const hostname = '127.0.0.1';
const port = 1245;

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  else if (req.url === '/students') {
    const filePath = process.argv[2];
    if (!filePath) {
      res.statusCode = 400;
      res.end('Database file path is required\n');
    }
    countStudents(filePath)
      .then((data) => {
        res.write(`This is the list of our students\n${data}`);
        res.end();
      })
      .catch((err) => {
        res.statusCode = 500;
        res.end(`Error: ${err.message}\n`);
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

module.exports = app;
