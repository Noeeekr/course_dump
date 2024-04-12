const fs = require("fs");

fs.readdir("./",(err,response) => {

    if (err) {
        throw new Error(err);
    }

    console.log(response)
})