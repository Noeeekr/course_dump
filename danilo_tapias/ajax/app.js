import {createXMLHttpsRequest} from "./createXMLHttpRequest.js";

const createXMLrequest = createXMLHttpsRequest;

createXMLrequest("GET", "dados.json", mostrarUsuarios)

console.log("antes da função mostrarUsuarios()")
function mostrarUsuarios(data) {
            console.log(data)
}
console.log("depois da função mostrarUsuarios()")