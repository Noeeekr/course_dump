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

class Cards {
    protected _lastMatch: number = 0;
    protected _totalMatches: number[] = [];
    protected _cardsTemplate: HTMLElement[] = [];
    protected _turnCardHandler: Function;

    constructor(
        turnCardHandler: Function
    ) {
        this._turnCardHandler = turnCardHandler;
    }
    set lastMatch(value: number) {
        this._lastMatch = value;
    }
    get lastMatch(): number {
        return this._lastMatch;
    }
    set totalMatches(value: number) {
        this._totalMatches[0] = value;
    }
    get totalMatches(): number[] {
        return this._totalMatches;
    }

    createAllMatches(cardQ: number): void {

        if (cardQ % 2)
            throw Error("cannot initialize with odd card number");
        this._totalMatches = [0,cardQ / 2];

        for (let i = 0; i < cardQ / 2; i++) {
            this.createMatch();
        }

    }
    createCard({ red, green, blue }: RGB): HTMLElement {

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
            el.addEventListener("click",(e) => {this._turnCardHandler(e.target as HTMLElement)});
            el.style.setProperty("--backColor",`rgb(${red},${green},${blue})`);
        return el;
    
    }

    createMatch(): void {

        this._lastMatch++;

        let colors = randomColors();

        for (let i = 0; i < 2; i++) {
            this._cardsTemplate.push(this.createCard(colors))
        }

    }
}

export { Cards }; 