let obj = {
    profile: {
        name: "peter",
        age: 23
    }
}

const keys = ["profile","items"];

let clone = obj;
let value = ["sword"];

for (let i = 0; i < keys.length; i++) {
    
    if (i + 1 === keys.length) {
        clone[keys[i]] = value;
    }

    clone = clone[keys[i]];
}

console.log(obj)