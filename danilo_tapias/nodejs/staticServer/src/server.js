const express = require("express");

const path = require("path");
const server = express();

const anyRoute = require("./routes/any");
const tasksRoute = require("./routes/tasks");

server.use(express.static(path.join(__dirname,"static")));

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/tasks(/:id)?",tasksRoute);
server.get("*",anyRoute);

module.exports = server;

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