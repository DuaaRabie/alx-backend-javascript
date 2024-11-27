const fs = require('fs').promises;

async function countStudents(file) {
  try {
    const stats = await fs.stat(file);
    if (!stats.isFile()) {
      throw new Error('Cannot load the database');
    }
    const content = await fs.readFile(file, 'utf-8');
    const lines = content.trim().split('\n');
    const students = lines.slice(1, lines.length).map((arg) => arg.split(','));
    const fields = new Set(students.map((arg) => arg[3]));
    const response = [`Number of students: ${lines.length - 1}`];

    fields.forEach((field) => {
      const all = students.filter((stu) => stu[3] === field).map((stu) => stu[0]);
      response.push(`Number of students in ${field}: ${all.length}. List: ${all.join(', ')}`);
    });
    return response.join('\n');
  } catch (error) {
    return 'Cannot load the database';
  }
}

const app = require('http').createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((data) => {
        res.write('This is the list of our students\n');
        res.write(data);
        res.end();
      });
  }
}).listen(1245);

module.exports = app;
