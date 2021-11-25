# What is this?

This is a simple script for CLI tools which can be used as an easy-to-use readline script.

# Usage

```js
const ask = require('ask');

async mainFunction() {
    await ask.prompt('question: ');
    
    // use after the last question was asked
    ask.closePrompt();
}

mainFunction();
```

ask.closePrompt() has to be used to stop listening to input. Use it once when there's no more input to be read.

© Greggry
