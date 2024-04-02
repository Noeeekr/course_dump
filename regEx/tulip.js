(function(){
    document.querySelector(".input").addEventListener("keyup",(e) => {
        if (validateInput(e)) {
            changeBtnState
            (
                false,
                document.querySelector(".submit")
            )
        }
        else{
            changeBtnState
            (
                true,
                document.querySelector(".submit")
            )
        }
    })
    document.querySelector(".submit").addEventListener("click",(e) => {sendForm(e)})
})()

function validateInput(event) {
    let str = event.target.value;

    let cepPattern = /[^\d]/g;
    let emailPattern = /[\w\d]+@[\w]+\.(com|org)/g;
    
    if (str.match(emailPattern)) return true;
    if (str.replace(cepPattern,"").length === 8) return true;

    return false;
}
function changeBtnState(disabled,btn) {
    if (disabled && !btn.getAttribute("disabled")) {
        btn.setAttribute("disabled","")
        return;
    }

    btn.removeAttribute("disabled")
}
function sendForm(event) {
    console.log(event)
    console.log("sent form")
}