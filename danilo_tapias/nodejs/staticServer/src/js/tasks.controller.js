const fs = require("fs");

const path = require("path");
const tasks = require("./../../data.json");

module.exports.updateJSON = ([tasksPath,taskData]) => {
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

module.exports.createJSONmodel = (req) => {
    let data = { ...req.body };
    let tasksPath = path.join(__dirname,"..","..","data.json");

    if (!data.id) {

        data.id = tasks.reduce((accumulator,current) => { 

            if (current.id > accumulator.id) 
                return current;
            return accumulator;

        }).id + 1;

    }
    
    return [tasksPath,data]
}

module.exports.filterJSONdata = (req, res) => {

    if (!req.query.id && !req.params.id) {
        res.end(JSON.stringify(tasks))
        return; 
    }

    let task;
    let paramSkeletonRegex = /(.*=)/;

    // req.params.id.split(/=|&/) could do a better approach with this. 
    // I'm not doing more code than I need though, there's no need since I want to filter 
    // this obj only by id and not any other param;
    
    if (req.params.id) {
        task = tasks.filter(task => task.id === parseInt(req.params.id.replace(paramSkeletonRegex,"")))
    } else {
        task = tasks.filter(task => task.id === parseInt(req.query.id))
    }

    if (!task.length)
        task = ["EMPTY"];
    
    return JSON.stringify(task)

}