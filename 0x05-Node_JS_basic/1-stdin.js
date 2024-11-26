console.log('Welcome to Holberton School, what is your name?');
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(data) {
  var name = data.toString().trim();
  console.log("Your name is: %s", name);
  process.stdin.pause();
  process.stdout.write("This important software is now closing\n");
});
