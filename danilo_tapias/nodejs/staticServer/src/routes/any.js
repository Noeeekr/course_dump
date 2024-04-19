const express = require("express");
const fs = require("fs");

const path = require("path");
const app = express.Router();

app.get("*",(req, res) => {

    let extName = path.extname(req.path).substring(1);

    if (!extName) {
        fs.createReadStream(path.join(__dirname,"..","static","404.html"),"UTF-8").pipe(res)
        return;
    }

    if (fs.existsSync(path.join(__dirname,"..",req.path))) {
        fs.createReadStream(path.join(__dirname,"..",req.path)).pipe(res);
        return
    }

    if (extName === "html") {
        fs.createReadStream(path.join(__dirname,"..","static","404.html"),"UTF-8").pipe(res)
        return;
    } 

    res.end("something went wrong")
})
app.post("*",(req, res) => {

    console.log("\n(POST):DATA:",req.body);
    console.log("(POST): request went to general post");
    res.end("yup fetch (POST) worked")

})

module.exports = app;