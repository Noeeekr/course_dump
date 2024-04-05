import { MemoryGame } from './game';

function getParent(el: HTMLElement, name: string): HTMLElement {

    while (el.parentElement && !el.getAttribute(name)) {
        el = el.parentElement;
    }

    return el;

}

function nextAction(): Promise<number[]> { 
    
    return new Promise<number[]>((resolve) => {

    setTimeout(() => {

        Array.from(document.querySelectorAll(".cardWrapper[active]")).forEach((card) => {
            card.removeAttribute("active");
        })
        gameTemplate.pointerEvents = 'all';

        resolve(gameTemplate.totalMatches);

    },1500);

    })

}

function gameHandler(el: HTMLElement): void {
    if (!el) 
        return;

    el = getParent(el as HTMLElement,'cardStart');

    if (el.getAttribute("found")) 
        return;

    el.setAttribute("active","true");

    let elIndex = Array.from(el.parentElement!.children).indexOf(el);
    if (elIndex === gameTemplate._lastCardIndex) 
        return;
    gameTemplate._lastCardIndex = elIndex;

    if (!gameTemplate.currentCardMatch) {

        gameTemplate.currentCardMatch = parseInt(el.getAttribute("match")!);
        return;

    }

    gameTemplate.pointerEvents = 'none';

    if (gameTemplate.currentCardMatch === parseInt(el.getAttribute("match")!)) {

        Array.from(document.querySelectorAll(`.cardWrapper[match="${gameTemplate.currentCardMatch}"]`)).forEach((card) => {
            card.setAttribute("found","true");
        })
        gameTemplate.totalMatches[0] = gameTemplate.totalMatches[0] + 1;

    }

    if (gameTemplate.currentCardMatch) {
        gameTemplate.currentCardMatch = null;
    }
    
    // game continues normally;

    nextAction()
    .then(([currentMatch,maxMatch]) => {
        
        if (currentMatch !== maxMatch) 
            return;

        document.querySelector(".menu")?.classList.add("active");
        document.querySelector(".game")?.classList.remove("active");    

        gameTemplate.resetGame(12);
        
    })

}

(function() {
    document.querySelector(".menu .button.play")?.addEventListener("click",() => {
        document.querySelector(".menu")?.classList.remove("active");
        document.querySelector(".game")?.classList.add("active");
    })
})()

let gameTemplate = new MemoryGame(
    12,
    document.querySelector(".game .cards") as HTMLElement,
    gameHandler
);
