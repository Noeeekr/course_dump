type b = {
    a: number,
    b: number,
    c: number
}

type c = keyof b;

console.log(c)