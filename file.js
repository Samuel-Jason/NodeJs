const fs = require('fs');

fs.appendFile('test.txt', 'hello world', err => {
    console.log(err);
});