// 1. Using Process stdin
console.log('Welcome to Holberton School, what is your name?');
process.stdin.setEncoding('utf8');
process.stdin.resume();
process.stdin.on('readable', function() {
  var name = process.stdin.read();
  if (name) {
    process.stdout.write(`Your name is: ${name}`);
  }
});
process.stdin.on('end', function() {
  console.log("This important software is now closing");
});
