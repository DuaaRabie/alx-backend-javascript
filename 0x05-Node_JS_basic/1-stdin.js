// 1. Using Process stdin
console.log('Welcome to Holberton School, what is your name?');
process.stdin.setEncoding('utf8');
process.stdin.resume();
process.stdin.on('data', function(data) {
  var name = data.toString().trim();
  console.log("Your name is: %s", name);
});
process.stdin.on('end', function() {
  process.stdout.write("This important software is now closing\n");
  process.exit(0);
});
