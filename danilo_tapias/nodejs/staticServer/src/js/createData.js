const titles = ["my","name","and","core","javascript","random","ignore","lorem"];

const fs = require("fs");
const path = require("path");

function randomTitle(array) {

    let title = "";

    for (let i = 0; i < 9; i++) {

        title += array[Math.floor(Math.random() * array.length)] + " ";

    }

    return title
}

function fillInfoArray() {
    let infoArray = [];
    let bool = false;
    let id = 1;

    for (let i = 0; i < 100; i++) {
        if (bool) {
            bool = false; 
        } else {
            bool = true;
        }
        
        infoArray.push({
            "titles": randomTitle(titles),
            "updatedAt": Date.now(),
            "completed": bool,
            "id": id
        })

        id++

    }

    return infoArray; 
}

fs.writeFileSync(path.join(__dirname,"data.json"),JSON.stringify(fillInfoArray()),{ flag: "w"})

console.log("file written!")
/*

    if (!title) {
        title = []
    }

    if (title && title.length < 9) {
        title.push(array[Math.floor(Math.random() * array.length)]);
        return randomTitle(array,title)
    } else {
        return title.join(" ");
    }

*/