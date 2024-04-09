let [path,text] = global.process.argv.splice(2,2);

if (!path || !text)
    throw new Error("file path and content to be written must be specified");

const fs = require("fs");
const os = require("os");

fs.appendFile(path, os.EOL + text, (err,content) => {
    
    if (err) {

        console.log(err);
        return;

    }

    fs.readFile(path,"UTF-8",(err,content) => {

        console.log(" --- FILE CONTENT --- ")
        console.log(content);

    })

})
