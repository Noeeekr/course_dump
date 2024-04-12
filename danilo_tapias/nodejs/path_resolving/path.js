const path = require("path");
const fs = require("fs");

let absolutePath = path.resolve("/home/noeeekr/repositories/front_end/udemy/danilo_tapias/nodejs/testzone/randomCreatedFile/data.txt");

fs.readFile(absolutePath,"UTF-8",(err,data) => { 

    if (err) {
        throw new Error(err);
    }

    console.log(data);

})

