function createXMLHttpsRequest(method, url, sucess, data = null) {
    // xml https request;
    const xhr = new XMLHttpRequest();

    // does: starts communicating with server
    // needs: param1,param2
    // params: (method,data we want)
    xhr.open(method,url) 
    xhr.send(data)

    // specifies a function to happen in every state change
    xhr.onreadystatechange = verifyAjax;

    // states:
    // 0 connection not started 
    // 1 request configured
    // 2 request sent
    // 3 in process
    // 4 answer recieved
    function verifyAjax() {
        if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)) {
            let json = JSON.parse(xhr.responseText)
            
            if (typeof sucess === "function") sucess(json);

            return;
        }
        if (xhr.status !== 200 && xhr.status !== 304){
            console.log("error in verify ajax",xhr.status)
            return;
        }
    }
}

export {createXMLHttpsRequest};