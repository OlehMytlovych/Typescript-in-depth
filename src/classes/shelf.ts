import { ShelfItem } from '../interfaces';

export default class Shelf<T extends ShelfItem> {
    constructor(
        private items: T[]
    ) {

    }

    add(item: T) {
        this.items.push(item);
    }

    getFirst() {
        return this.items[0];
    }

    find(title: string): T {
        return this.items.find((item: T) => item.title === title);
    }

    printTitles(): void {
        this.items.forEach((item: T) => console.log(item.title));
    }
}
