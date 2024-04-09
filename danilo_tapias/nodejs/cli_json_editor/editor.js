const readJSONFile = () => {
    return new Promise((resolve,reject) => {

        fs.readFile(path,"UTF-8",(err,content) => {
    
            if (err)
                throw new Error(err);

            if (check[0] === "check") {
                reject(content);
                return;
            }

            resolve(content);

        })

    })
}

if (!process.argv[2])
    throw new Error("file local necessary");

const path = process.argv[2];
const check = process.argv.splice(3,1);
const params = process.argv.splice(3);

if (params.length % 2) {

    throw new Error("all flags must have one parameter");

}

const fs = require("fs");

readJSONFile()
.then(content => JSON.parse(content))
.then(content => {

    for (let i = 0; i < params.length / 2; i += 2) {
        let key = [...params[i]].splice(2).join("");
    
        content[key] = params[i + 1];
    }

    return content;
})
.then(content => fs.writeFile(path,JSON.stringify(content),(err) => {

    if (err) 
        throw new Error(err);

    console.log("file written sucessfully")
    console.log(content);
    
}))
.catch(content => console.log(JSON.parse(content)));