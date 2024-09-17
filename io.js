const process = require('process');

process.stdin.on('data', (Keyboard) => {

    process.stdout.write(`Texto do usuario ${Keyboard}`);
    process.exit();
})