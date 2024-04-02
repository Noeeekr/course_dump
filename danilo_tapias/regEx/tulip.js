const randomURI = "https://www.bing.com/search?pglt=675&q=.net&cvid=03e7863a80674e0a8c0f668f4f3011f1&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYQTIGCAMQRRhBMgYIBBBFGDwyBggFEEUYPDIGCAYQRRg80gEIMjQ0N2owajGoAgCwAgA&FORM=ANNTA1&PC=EDGEDB";

const uriRegEx = /(&\w+=[.\w\d]+)/g; // needs g flag to find all matchs in the next match declaration;

let matches = randomURI.match(uriRegEx)

console.log(matches)

/*
for (const match of matches) {
    console.log(match[0])
}
*/