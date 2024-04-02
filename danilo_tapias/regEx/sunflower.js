document.querySelector(".search input").addEventListener("keypress",(e) => {
    search(e,[...document.querySelectorAll("p")])
})

function search(e,elements) {
    console.time()

    let rx = new RegExp(e.target.value,"gi");

    elements.forEach((el) => {
        let text = el.textContent.replaceAll(rx,`<span class="pip">${e.target.value}</span>`)
        el.innerHTML = text;
    })

    console.timeEnd()

}