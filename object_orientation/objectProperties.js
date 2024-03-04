let flower = {type: "flower", name: "null"};
Object.defineProperty(flower,"type",{writable: false})
let tulip = new Object(flower);

tulip.name = "tulip"
tulip.type = "mamal" // won't work;

console.log(Object.getOwnPropertyDescriptors(tulip),tulip)
for (let prop in tulip) {
    console.log(prop + " is enumerable")
}