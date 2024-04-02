const fs = require("fs");
const emoji = require("node-emoji");
const addon = require("./aditionalContent.js")

fs.writeFile("test.txt","Hello world!!",(err) => {
    if (err) throw err;
    console.log(
        emoji.random().emoji + " FILE WRITTEN " + emoji.random().emoji
    )
});

// open node terminal and do node tulip from dir commonJS

console.log(module.exports)
addon.saySomething("hahah this comes from module.exports")