/* eslint-disable no-underscore-dangle */
import { positiveInteger } from '../decorators';
import ReferenceItem from './reference-item';

class Encyclopedia extends ReferenceItem {
    private _copies: number;
    get copies(): number {
        return this._copies;
    }
    @positiveInteger
    set copies(value: number) {
        this._copies = value;
    }
    constructor(id: number, title: string, year: number, public edition: number) {
        super(title, year, id);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }

    printItem(): void {
        super.printItem();
        console.log('printing encyclopedia item');
    }
}

export default Encyclopedia;