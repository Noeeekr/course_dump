// types are not values so can't console log it;
type personProfile = {
    name: string,
    age: number,
    mother: string,
    cep: number
} // alias
type sizes = 12 | 11 | 10 // another alias;

const andy: personProfile = {
    name: "Andy",
    age: 18,
    mother: "mom",
    cep: 29399239
} // the value alocated to this variable needs to match the alias;


let specific: sizes = 11; // b cannot be anything but 12 | 11 | 10

enum lengths { 
    small = 10,
    big = 20,
    medium = 30
} // needs to be an object ;


console.log(
    lengths,
    specific,
    andy
)
