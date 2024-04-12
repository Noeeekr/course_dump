const fs = require("fs");
const path = require("path");
const http = require("http");

const docPath = "/home/noeeekr/repositories/front_end/udemy/danilo_tapias/nodejs/deliverHTML";

http.createServer((req,res) => {
    res.writeHead(200,{ "Content-Type": "text/html" });
    
    switch(req.url) {
        case "/":
            let readStream = fs.createReadStream(docPath + "/index.html","UTF-8");
            
            let html = "";

            readStream.on("data",data => {
            
                html += data;

            });

            readStream.on("end",() => {

                if (html) {
                    res.end(html)
                } else {
                    res.end("<h1>content not found</h1>")
                }
        
            });
            break;
        case "/secret":
            let rStream = fs.createReadStream(docPath + "/secret.html","UTF-8");

            let content = "";

            rStream.on("data",(data) => {

                content += data;

            })

            rStream.on("end",() => {

                res.end(content);

            })
            break;
    }

}).listen(3000);

console.log("Https server created");
console.log("Server local: http://localhost:3000");

