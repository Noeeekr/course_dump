const express = require("express");

const path = require("path");
const app = express();

const tasks = require("./data.json");

app.listen(3001);
app.use(express.static(path.join(__dirname,"static")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/localhost:3001",(req, res) => {
    
    console.log("POST",req.body);

    res.end("yup fetch (POST) worked")
})

app.get("/tasks",(req, res) => {
    
    res.end(JSON.stringify(tasks));

})

app.get("*",(req, res) => {

    if (req.accepts("html")) {
        res.status(404).sendFile(path.join(__dirname,"static","404.html"));
    }

})


console.log("server is ready to load at: \nhttp://localhost:3001")


/*
SET EXPRESS SERVER
-- const app = express();

EXPRESS .GET()
-- app.get("/", (req, res) => {
--    res.send("hello world")
-- })

EXPRESS .USE()

STATIC SERVER FOR THE MAIN / ROUTE
-- app.use(express.static("/static"))

STATIC SERVER FOR THE ALTERNATIVE /images ROUTE
-- app.use("/images",express.static("images"))


*/