import {createXMLHttpsRequest} from "./createXMLHttpRequest.js";
import {createPromise} from "./createPromise.js";

const createXMLrequest = createXMLHttpsRequest;

createXMLrequest("GET", "http://localhost:3000/user/1", mostrarUsuarios)

function mostrarUsuarios(data) {
    console.log("xml request",data)
    document.querySelector("h5").textContent = data.phrase;
}

let form = document.querySelector("form")

form.addEventListener("submit",(e) => {updateMyText(e)})

function updateMyText(event) {
    event.preventDefault();
    let text = event.target.querySelector("input").value;
    createPromise(
        "PATCH",
        "http://localhost:3000/user/1",
        JSON.stringify({phrase: text})
    )
    .then(response => {console.log(response)})
    .catch(er => {console.log("something went wrong:",er)});
}


