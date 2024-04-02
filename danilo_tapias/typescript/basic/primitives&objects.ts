let stringArray: string[];
    stringArray = ["a","b","c","d","e"];
let stringOrNumber = [1,"a"];
let numbers: number = 323;

const numberArray: number[] = [1,2,3,4];
const genericArray: Array<number> = [1,2,3];

    console.log(
        numbers,
        stringArray,
        numberArray,
        genericArray,
        stringOrNumber
    );

let obj: { name: string, date: number, passed: boolean, score: number, gradesScore: number[]};

// name: "Peter" date: 13452352123 passed: true, score: 10, gradesScore: [1,9,9,9,3]
// OK

// name: 01010101 date: "Monday" passed: "yes" score: "ten" gradesCore: ["a","b",3]
// ERROR 

// console.log(obj) = ERROR
// object not assigned 


let optionalParam: {name: string, age: number, mother?: string}

// mother is an optional param

