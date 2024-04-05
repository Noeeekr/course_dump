import { Cards } from "./card";

class MemoryGame extends Cards {
    
    public _lastCardIndex: number = -1;
    private _currentCardMatch: number | null = null;
    private _local;
    
    constructor(
        cardQ: number,
        local: HTMLElement,
        turnCardHandler: Function
    ) {
        super(turnCardHandler);

        this._local = local;

        this.createAllMatches(cardQ);
        this.suffleCards(this._cardsTemplate);
        local.append(...this._cardsTemplate);
    }

    set pointerEvents(value: string) {
        this._local.style.setProperty("--menuInteractivity",value);
    }
    set currentCardMatch(value: number | null) {
        this._currentCardMatch = value;
    }
    get currentCardMatch(): number | null {
        return this._currentCardMatch;
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

    resetGame(cardQ: number): void {
        this._lastCardIndex = -1;
        this._totalMatches = [];
        this._currentCardMatch = null;
        this._lastMatch = 0;
        this._cardsTemplate = [];

        this._local.innerHTML = "";

        this.createAllMatches(cardQ);
        this.suffleCards(this._cardsTemplate);
        this._local.append(...this._cardsTemplate);
    }

}

export { MemoryGame };