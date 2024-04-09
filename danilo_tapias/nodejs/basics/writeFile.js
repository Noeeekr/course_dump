const fs = require("fs");

const [path,md] = global.process.argv.splice(2);

if (!path || !md) {
    console.log("dir local and content needed for creation");
}

fs.writeFile(path,md,(err,content) => {

    if (err) {
        console.log(err);

        return
    }

    console.log("written sucessfully");

})