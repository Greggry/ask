# ask-js

ask-js is a simple script for CLI tools which can be used as an easy-to-use readline script.

# Installation

`npm i @greggry/ask`

# Usage

the Ask class can take in a readline interface, by default it creates a new one. Pass an existing interface to it if your project already uses one.

`const ask = new Ask(interface);`

```js
const Ask = require('@greggry/ask');

const mainFunction = async () => {
  // create an instance of Ask
  const ask = new Ask();

  // prompt the user to answer a question
  const answer = await ask.ask('question: ');
  console.log(answer);

  // stop listening for input
  ask.closeInterface();
};

mainFunction();
```

ask.closeInterface() has to be used to stop listening for input. Use it once when there's no more input to be read.

© Greggry
