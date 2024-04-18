const express = require("express");
const fs = require("fs");

const path = require("path");
const app = express();

const tasks = require("./data.json");

const updateJSON = (tasksPath,taskData) => {
    let json = "";
    let stream = fs.createReadStream(tasksPath,"UTF-8");
    
    stream.on("data",(data) => {
        json += data;
    })

    stream.on("end",() => {

        let taskObj = JSON.parse(json)
        taskObj.push(taskData);

        fs.writeFile(tasksPath,JSON.stringify(taskObj),{ flag: "w" },() => {
            console.log("ERROR HAPPENED")
        })

    })
}
const handleHTMLnotFound = (res) => {
    res.status(404).sendFile(path.join(__dirname,"static","404.html"));
}
const handleJSrequest = (req,res) => {
    if (fs.existsSync(path.join(__dirname,req.path))) {
        fs.createReadStream(path.join(__dirname,req.path)).pipe(res)
    } else {
        res.writeHead(404);
        res.end()
    }
}

app.listen(3001);
app.use(express.static(path.join(__dirname,"static")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("js",express.static(path.join(__dirname,"js")));

app.route("/tasks(/:id)?")
.get((req, res) => {
    
    if (!req.query.id && !req.params.id) {
        res.end(JSON.stringify(tasks))
        return; 
    }

    let task;
    let paramSkeletonRegex = /(.*=)/;

    if (req.params.id) {
        task = tasks.filter(task => task.id === parseInt(req.params.id.replace(paramSkeletonRegex,"")))
    } else {
        task = tasks.filter(task => task.id === parseInt(req.query.id))
    }

    if (!task.length)
        task = ["EMPTY"];
        
    res.end(JSON.stringify(task));

})
.post((req, res) => {

    console.log("(POST): went to tasks post");

    let data = { ...req.body };
    let tasksPath = path.join(__dirname,"data.json");

    if (!data.id) {

        data.id = tasks.reduce((accumulator,current) => { 

            if (current.id > accumulator.id) 
                return current;
            return accumulator;

        }).id + 1;
        
    }
    
    updateJSON(tasksPath,data)

    res.status(201)
    res.end();
})

app.get("*",(req, res) => {

    switch(path.extname(req.path).substring(1)) {
        case "": 
            handleHTMLnotFound(res);
            break;
        case "js":
            handleJSrequest(req,res);
            break;
    }

})
app.post("*",(req, res) => {
    
    console.log("\n(POST):DATA:",req.body);
    console.log("(POST): request went to general post");
    res.end("yup fetch (POST) worked")
    
})

console.log("\nserver is ready to load at: \nhttp://localhost:3001")


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