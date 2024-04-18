fetch("http:localhost:3001",{ 
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ name: "andrew" })
})
.then(res => res.text())
.then(res => console.log(res));

console.log("fetch done")