// stdout => the default way we output information (terminal)
// stdin => the default way we get information (terminal)

// process.stdout.write()

process.stdin.setEncoding('utf-8');

// whenever someone types something in and presses enter
process.stdin.on('data', (data) => {
  console.log('you typed:', data.trim());
});
