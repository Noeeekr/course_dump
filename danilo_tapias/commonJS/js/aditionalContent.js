function saySomething(msg) {
    console.log(`${msg}`)
} 

module.exports.saySomething = saySomething;
module.exports.pip = "pip";

console.log(module.exports)
console.log(exports)
console.log("-----")

module.exports = {saySomething,k: "a"}

console.log(module.exports)
console.log(exports)