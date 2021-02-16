import ReferenceItem from './reference-item';

class Encyclopedia extends ReferenceItem {
    constructor(id: number, title: string, year: number, public edition: number) {
        super(title, year, id);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}

export default Encyclopedia;