// values needed path, keypath of the obj keys (flags),

// I KNOW I CAN DO THIS WITH REFERENCE, BUT THE INTENT IS NOT USING REFERENCE 
// AAAAAAAAA I COULD DO THIS WITH TEN LINES

const path = process.argv[2];
const lastArg = process.argv[process.argv.length - 1];

if (lastArg.slice(0,2) === "--") 
    throw new Error("value needed for data insert");

const fs = require("fs");

const newValue = JSON.parse(process.argv.pop());
const keyPath = [];

for (let arg of process.argv) { 

    if (arg.slice(0,2) === "--") {
        keyPath.push(arg);
    }

}

function readJSONFile() {
    return new Promise((resolve) => {

        fs.readFile(path,"UTF-8",(err,content) => {
    
            if (err)
                throw new Error(err);

            if (!process.argv[3]) {
                console.log(JSON.parse(content));
            } else {
                resolve(JSON.parse(content));
            }

        })

    })
}

function editObject(obj,keyPath,newValue = null) {

    if (!newValue)
        throw new Error("A value to insert in object must be specified");

    let lastValue = newValue;

    for (let i = keyPath.length; i > -1; i--) {
        
        let value = getObjectValues(obj,keyPath.slice(0,i));

        if (i === keyPath.length)
            value = newValue;

        if (keyPath[i])
            value[keyPath[i].slice(2)] = lastValue;

        if (value)
            lastValue = value;

    }

    return lastValue;
}

function getObjectValues(obj,keyPath) {

    for (let i = 0; i < keyPath.length; i++) {

        obj = obj[keyPath[i].slice(2)];

    }

    return obj;
}

readJSONFile()
.then(fileContent => editObject(fileContent,keyPath,newValue))
.then(processedFileContent => fs.writeFile(path,JSON.stringify(processedFileContent),(err) => {

    if (err)
        throw new Error(err);

    console.log("file written sucessfully")
    console.log(processedFileContent);
    
}))