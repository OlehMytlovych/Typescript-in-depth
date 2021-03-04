import { timeout } from '../decorators';

/* eslint-disable no-underscore-dangle */
abstract class ReferenceItem {
    /* title: string;
    year: number;

    constructor(newTitle: string, newYear: number) {
        console.log('Creating a new ReferenceItem...');
        this.title = newTitle;
        this.year = newYear;
    } */

    constructor(public title: string, protected year: number, id: number) {
        console.log('Creating a new ReferenceItem...');
        this.#id = id;
    }
    #id: number;
    private _publisher: string;
    get publisher() {
        return this._publisher.toUpperCase();
    }
    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }
    getID(): number {
        return this.#id;
    }

    @timeout(3000)
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(ReferenceItem.department);
    }

    static department: string = 'Classical literature';

    abstract printCitation(): void;
}

export default ReferenceItem;