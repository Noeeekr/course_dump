const express = require("express");

const router = express.Router();
const tasksCbController = require("./../js/tasks.controller");

router.route("/tasks(/:id)?")
.get((req, res) => {

    console.log(req.query.id,req.params)

    res.end(tasksCbController.filterJSONdata(req, res));

})
.post((req, res) => {

    console.log("(POST): went to tasks post");

    tasksCbController.updateJSON(tasksCbController.createJSONmodel(req))

    res.status(201)
    res.end();

})

module.exports = router;