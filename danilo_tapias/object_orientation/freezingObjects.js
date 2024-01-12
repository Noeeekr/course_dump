let pipe = {a: 1, b: 2, c: 3};

let freezedPipe = {...pipe};
let sealedPipe = {...pipe};
let preventExtensionPipe = {...pipe};

Object.freeze(freezedPipe);
// not changeable at all;
Object.seal(sealedPipe);
// no more props creation, only changes;
Object.preventExtensions(preventExtensionPipe)
// stil can change and remove props;
console.log(
    freezedPipe,
    preventExtensionPipe,
    sealedPipe
)