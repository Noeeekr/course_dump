const fs = require("fs");
const path = require("path");
const http = require("http");

const mimeType = {
    "html": "text/html",
    "png": "image/png",
    "css": "text/css",
    "js": "application/javascript"
}

const serverStaticFiles = (url,res) => {

    const _path = path.join(__dirname, "static", url);
    const extName = path.extname(url).substring(1);

    getStaticFiles(_path,mimeType[extName],res);
}
const getStaticFiles = (_path,fileType,res) => {

    if (!fs.existsSync(_path)) {
        res.writeHead(404);
        console.log("path does not exist ",_path);

        if (fileType === "text/html") {
            _path = path.join(__dirname, "static", "404.html");
        } else {
            return res.end()
        }

    } else {
        res.writeHead(200, { "Content-Type": fileType });
    }

    fs.createReadStream(_path).pipe(res).on("error", () => {
        res.writeHead(500);
        res.end();
    }).on("finish", () => {
        console.log("finished delivering requested static file");
    })
}
http.createServer((req,res) => {

    let url = req.url;

    switch(url) {
        case "/":
            url = "index.html";
            break;
        case "/favicon.ico":
            res.end()
            return;
    }

    serverStaticFiles(url,res);

}).listen(3000);

console.log("Https server created");
console.log("Server local: http://localhost:3000");

