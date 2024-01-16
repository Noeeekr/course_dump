"use strict"

console.log("----- Start of Map -----")
let counter = 1;
let ksante = 1;
let map = new Map();
    map.set(ksante,["1"]) // set map with ksante as key
    map.set(["abc","def"],ksante) // set an array as key for ksante

++ksante;

console.log(counter++, " ",map) // 1 map (to check if the key changed) after ksante value changed
console.log(counter++, " ",ksante) // 2 ksante after value change

console.log(counter++, " ",map.get(1)) // 3 still works as a key for index 0
console.log(counter++, " ",map.get(ksante)) // 4 does not work anymore as a key for index 0
console.log("----- Start of weakMap -----")

let weakMap = new WeakMap();
    weakMap.set([1],"andy");

console.log(counter++, " ",weakMap.get([1])); 
// 5 trying to recover data but no references were attributed to the weakMap

ksante = ["abc"];

    weakMap.set(ksante,"andy");

console.log(counter++, " ",weakMap) // 6 visualization of weakMap
console.log(counter++, " ",weakMap.get(ksante)) // 7 recovering value with object reference