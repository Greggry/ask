const readline = require('readline');

class Ask {
  constructor(rlInterface) {
    // create own interface
    if (!rlInterface) {
      this.rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      return this; // escape
    }

    this.rl = rlInterface;
  }

  // promisify rl.question()
  ask(questionString) {
    return new Promise(resolve => {
      this.rl.question(questionString, answer => {
        resolve(answer);
      });
    });
  }

  // has to be run to stop waiting for input
  closeInterface() {
    this.rl.close();
  }
}

module.exports = Ask;
