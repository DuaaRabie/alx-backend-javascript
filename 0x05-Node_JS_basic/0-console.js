#!/usr/bin/node

function displayMessage(message) {
  // display the message
  process.stdout.write(message + '\n');
}

module.exports = displayMessage;
