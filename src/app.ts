/* eslint-disable no-redeclare */
showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// task 02.01
enum Category {JavaScript, CSS, HTML, TypeScript, Angular}

function getAllBooks() {
    const booksCollection = <const> [
        { id: 1, category: Category.JavaScript, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true},
        { id: 2, category: Category.JavaScript, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
        { id: 3, category: Category.CSS, title: 'CSS Secrets', author: 'Lea Verou', available: true },
        { id: 4, category: Category.JavaScript, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true }
    ];
    return booksCollection;
}

function logFirstAvailable(books: readonly any[] = getAllBooks()) {
    console.log(`Number of books: ${books.length}`);

    const book = books.find((book: any) => book.available);
    console.log(book.title);
}

// logFirstAvailable(getAllBooks());

function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
    const books = getAllBooks();
    return books.reduce((acc, book: any) => {
        if (book.category === category) {
            acc.push(book.title);
        }
        return acc;
    } , []);
}

function logBookTitles(bookTitles: string[]): void {
    console.log(bookTitles);
}

// logBookTitles(getBookTitlesByCategory(Category.JavaScript));

function getBookAuthorByIndex(index: number): [string, string] {
    const books = getAllBooks();
    const {title, author} = books[index];
    return [title, author];
}

// console.log(getBookAuthorByIndex(3));

function calcTotalPages(data: any[]): bigint {
    return data.reduce((acc: bigint, datum: any) => {
        return acc + BigInt(datum.books) + BigInt(datum.avgPagesPerBook);
    }, 0n);
}
const libraryData = <const> [{ lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 }, { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 }, { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }];
// console.log(calcTotalPages(libraryData))

// 03.01
function createCustomerID(name: string, id: number): string {
    return `${id}-${name}`;
}
const myID = createCustomerID('Ann', 10);
// console.log(myID);

let iGenerator: (name: string, id: number) => string;
iGenerator = (name: string, id: number) => `${id}-${name}`;
iGenerator = createCustomerID;
// console.log(createCustomerID('Boris', 20));

// 03.02
function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);

    if (age) console.log(`Customer age: ${age}`);
    if (city) console.log(`Customer city: ${city}`);
}

// createCustomer('oleh', 24, 'lviv');

// console.log(getBookTitlesByCategory());

// logFirstAvailable();

function getBookByID(id: number): any {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}
// console.log(getBookByID(1));

function сheckoutBooks(customer: string, ...booksIDs: number[]): string[] {
    console.log(`Customer name: ${customer}`);
    return booksIDs.reduce((acc: string[], currentId: any) => {
        const book = getBookByID(currentId);
        if (book?.available) {
            acc.push(book.title);
        }
        return acc;
    }, []);
}
const myBooks = сheckoutBooks('Ann', 1, 2, 4);
// console.log(myBooks)

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, author: string): string[];

function getTitles(...args: any[]): string[] {
    const books = getAllBooks();

    if (args.length === 1) {
        const [arg] = args;

        if (typeof arg === 'string') {
            return books.filter(book => book.author === arg).map(book => book.title);
        } else if (typeof arg === 'boolean') {
            return books.filter(book => book.available === arg).map(book => book.title);
        }
    } else if(args.length === 2) {
        const [id , author] = args;

        if (typeof id === 'number' && typeof author === 'string') {
            return books.filter(book => book.id === id && book.author === author).map(book => book.title);
        }

    }
}
/* console.log(getTitles(true));
console.log(getTitles('Evan Burchard')); */

// 03.04
function assertStringValue(val: any): asserts val is string {
    if (typeof val !== 'string') {
        throw new Error('value should have been a string');
    }
}

function bookTitleTransform(val: any): string {
    assertStringValue(val);

    return val.split('').reverse().join('');
}
// console.log(bookTitleTransform('typescript'));
// console.log(bookTitleTransform(100500));