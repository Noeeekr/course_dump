class MemoryGame {
    public _lastCardIndex: number = -1;
    private _currentCardIndex: number | null = null;
    private _lastMatch: number = 0;
    private _cardsTemplate: HTMLElement[] = [];
    private _local;

    constructor(
        cardQ: number,
        local: HTMLElement
    ) {
        if (cardQ % 2)
            throw Error("cannot initialize with odd card number");
        
        if (!local) 
            throw Error("local to apply cards must be specified");
       
        this._local = local;

        for (let i = 0; i < cardQ / 2; i++) {
            this.createMatch();
        }

        this.suffleCards(this._cardsTemplate);
        local.append(...this._cardsTemplate);
    }

    set pointerEvents(value: string) {
        this._local.style.setProperty("--menuInteractivity",value);
    } 
    set lastMatch(value: number) {
        this._lastMatch = value;
    }
    set currentCardIndex(value: number | null) {
        this._currentCardIndex = value;
    }
    suffleCards(originalCards: HTMLElement[]): void {

        let newCards: HTMLElement[] = [];

        for (let length = originalCards.length; length > 0; length--) {

            newCards.push(
                ...originalCards.splice(Math.floor(Math.random() * length),1)
            )

        }

        this._cardsTemplate = newCards;

    }
    createCard({ red, green, blue }: RGB): void {

        let el = document.createElement("div")
            el.classList.add("cardWrapper")
            el.setAttribute("cardStart","true");
            el.setAttribute("match","" + this._lastMatch);
            el.innerHTML = `
                <div class="card">
                    <div class="front"><div class="icon"></div></div>
                    <div class="back"></div>
                </div>
            `;
            el.addEventListener("click",(e) => {turnCard(e.target as HTMLElement)});
            el.style.setProperty("--backColor",`rgb(${red},${green},${blue})`);
        this._cardsTemplate.push(el);

    }

    createMatch() {

        this._lastMatch++;

        let colors = randomColors();

        for (let i = 0; i < 2; i++) {
            this.createCard(colors)
        }

    }

    get lastMatch(): number {
        return this._lastMatch;
    }
    get currentCardIndex(): number | null {
        return this._currentCardIndex;
    }
}

type RGB = {
    red: number,
    green: number,
    blue: number
}

function randomColors(): RGB {
    return {
        red: Math.floor(Math.random() * 255),
        green: Math.floor(Math.random() * 255), 
        blue: Math.floor(Math.random() * 255)
    }
}
function getParent(el: HTMLElement, name: string): HTMLElement {

    while (el.parentElement && !el.getAttribute(name)) {
        el = el.parentElement;
    }

    return el;

}
function turnCard(el: HTMLElement): void {
    if (!el) return;

    el = getParent(el as HTMLElement,'cardStart');
    el.setAttribute("active","true");

    let elIndex = Array.from(el.parentElement!.children).indexOf(el);
    if (elIndex === gameTemplate._lastCardIndex) 
        return;
    gameTemplate._lastCardIndex = elIndex;

    if (!gameTemplate.currentCardIndex) {

        gameTemplate.currentCardIndex = parseInt(el.getAttribute("match")!);
        return;

    }

    gameTemplate.pointerEvents = 'none';

    if (gameTemplate.currentCardIndex === parseInt(el.getAttribute("match")!)) {

        Array.from(document.querySelectorAll(`.cardWrapper[match="${gameTemplate.currentCardIndex}"]`)).forEach((card) => {
            card.setAttribute("found","true");
        })

    }

    if (gameTemplate.currentCardIndex) {
        gameTemplate.currentCardIndex = null;
    }
    
    // game continues normally;
    
    setTimeout(() => {

        Array.from(document.querySelectorAll(".cardWrapper[active]")).forEach((card) => {
            card.removeAttribute("active");
        })
        gameTemplate.pointerEvents = 'all';

    },1500);
}

let gameTemplate = new MemoryGame(12,document.querySelector(".game .cards") as HTMLElement);



(function() {
    document.querySelector(".menu .button.play")?.addEventListener("click",() => {
        document.querySelector(".menu")?.classList.remove("active");
        document.querySelector(".game")?.classList.add("active");
    })
})()