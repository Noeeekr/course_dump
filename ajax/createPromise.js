function createPromise(method, url, data = null) {
    return new Promise(function (resolve, reject){
        let xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.setRequestHeader("Content-type","application/json;charset=UTF-8")
        xhr.send(data)
        xhr.onreadystatechange = function verifyAjax() {
            if (xhr.readyState === 4 && xhr.status < 400) {
                let json = JSON.parse(xhr.responseText);
                resolve(json);
            }
            if (xhr.readyState === 4 && xhr.status > 399) {
                reject(Error("something went wrong"))
            }
        }
    });
}

export {createPromise};