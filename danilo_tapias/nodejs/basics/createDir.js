const fs = require("fs");


if (!global.process.argv[2]) {
    console.log("dir local needed for creation");
}

const path = global.process.argv[2];

fs.mkdir(path,(err) => {

    if (err) {
        console.log(err);
    }

});