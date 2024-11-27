// 2. Reading a file synchronously with Node JS
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, file) => {
      if (err) {
        reject(console.error('Cannot load the database'));
      }
      const lines = file.trim().split('\n');
      const students = lines.slice(1).map((line) => line.split(','));
      const fieldCount = {};

      // eslint-disable-next-line no-unused-vars
      students.forEach(([firstName, lastName, age, field]) => {
        if (!fieldCount[field]) {
          fieldCount[field] = [];
        }
        fieldCount[field].push(firstName);
      });
      console.log(`Number of students: ${students.length}`);
      /* eslint-disable-next-line guard-for-in */
      for (const field in fieldCount) {
        console.log(`Number of students in ${field}: ${fieldCount[field].length}. List: ${fieldCount[field].join(', ')}`);
      }
      resolve();
    });
  });
}

module.exports = countStudents;
