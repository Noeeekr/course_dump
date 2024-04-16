const https = require("https");
const fs = require("fs");

let httpsOptions = {
    hostname: "www.stackoverflow.com",
    port: 443,
    method: "GET",
    path: "/questions/19051510/node-js-writing-data-to-the-writable-stream"
}

const request = https.request(httpsOptions,(res) => {
    res.setEncoding("UTF-8");

    let response = "";

    res.on("data",data => {

        console.log(data.length);
        response += data;

    })

    res.on("end",() => {
        console.log("DOWNLOADING: Done")

        let wStream = fs.createWriteStream("./testzone/index.html");
        
        wStream.write(response);
    })
})

request.end()