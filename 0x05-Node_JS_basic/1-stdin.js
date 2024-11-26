// 1. Using Process stdin
console.log('Welcome to Holberton School, what is your name?');
process.stdin.setEncoding('utf8');
process.stdin.resume();
process.stdin.on('data', function(data) {
  const name = data.toString().trim();
  console.log("Your name is: %s", name);
  process.stdin.pause(); 
});
process.stdin.on('end', function() {
  console.log("This important software is now closing");
});
