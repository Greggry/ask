const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// promisify rl.question()
function prompt(questionString) {
  return new Promise(resolve => {
    rl.question(questionString, answer => {
      resolve(answer);
    });
  });
}

// has to be run to stop waiting for input
function closePrompt() {
  rl.close();
}

module.exports = {
  prompt,
  closePrompt,
};
