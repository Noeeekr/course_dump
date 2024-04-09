if (!global.process.argv[2]) {
    throw new Error("path must be specified");
}

let path = global.process.argv[2];

const fs = require("fs");

fs.readFile(path,"UTF-8",(err,content) => {

    if (err) {

        console.log("path not found")

        return;

    }

    console.log(content);

    return

})
