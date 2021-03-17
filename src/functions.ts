/* eslint-disable no-redeclare */
import { Book, LibMgrCallback } from './interfaces';
import { BookOrUndefined, BookProperties } from './types';
import { Category } from './enums';

export function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

export function getAllBooks(): ReadonlyArray<Book> {
    const booksCollection: readonly Book[] = <const> [
        { id: 1, category: Category.JavaScript, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true},
        { id: 2, category: Category.JavaScript, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
        { id: 3, category: Category.CSS, title: 'CSS Secrets', author: 'Lea Verou', available: true },
        { id: 4, category: Category.JavaScript, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true }
    ];
    return booksCollection;
}

export function logFirstAvailable(books: readonly any[] = getAllBooks()) {
    console.log(`Number of books: ${books.length}`);

    const book = books.find((book: any) => book.available);
    console.log(book.title);
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
    const books = getAllBooks();
    return books.reduce((acc, book: any) => {
        if (book.category === category) {
            acc.push(book.title);
        }
        return acc;
    } , []);
}

/* export function getProperty(book: Book, prop: BookProperties): any {
    if (typeof book[prop] === 'function') {
        return book[prop]['name'];
    }
    return book[prop];
} */

export function getProperty<TObject, TKey extends keyof TObject>(book: TObject, prop: TKey): TObject[TKey] {
    if (typeof book[prop] === 'function') {
        return book[prop]['name'];
    }
    return book[prop];
}

export function logBookTitles(bookTitles: string[]): void {
    console.log(bookTitles);
}
export function getBookAuthorByIndex(index: number): [string, string] {
    const books = getAllBooks();
    const {title, author} = books[index];
    return [title, author];
}

export function calcTotalPages(data: any[]): bigint {
    return data.reduce((acc: bigint, datum: any) => {
        return acc + BigInt(datum.books) + BigInt(datum.avgPagesPerBook);
    }, 0n);
}

export function createCustomerID(name: string, id: number): string {
    return `${id}-${name}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);

    if (age) console.log(`Customer age: ${age}`);
    if (city) console.log(`Customer city: ${city}`);
}

export function getBookByID(id: number): BookOrUndefined {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

export function сheckoutBooks(customer: string, ...booksIDs: number[]): string[] {
    console.log(`Customer name: ${customer}`);
    return booksIDs.reduce((acc: string[], currentId: any) => {
        const book = getBookByID(currentId);
        if (book?.available) {
            acc.push(book.title);
        }
        return acc;
    }, []);
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, author: string): string[];

export function getTitles(...args: any[]): string[] {
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

export function assertStringValue(val: any): asserts val is string {
    if (typeof val !== 'string') {
        throw new Error('value should have been a string');
    }
}

export function bookTitleTransform(val: any): string {
    assertStringValue(val);

    return val.split('').reverse().join('');
}

export function printBook(book: Book): void {
    console.log(`${book.title} buy ${book.author}}`);
}

export function purge<T>(inventory: T[]): T[] {
    return inventory.slice(2);
}

export function getBooksByCategory(category: Category, callback: LibMgrCallback) {
    setTimeout(() => {
        try {
            const titles = getBookTitlesByCategory(category);
            if (titles.length) {
                callback(null, titles);
            } else {
                throw new Error('No books found.');
            }
        } catch (err) {
            callback(err, null);
        }
    }, 2000);
}

export function logCategorySearch(err: Error, titles: string[]): void {
    if (err) {
        console.log(err.message);
    } else {
        console.log(titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
        setTimeout(() => {
            const titles = getBookTitlesByCategory(category);
            if (titles.length) {
                resolve(titles);
            } else {
                reject('No books found.');
            }
        }, 2000);
    });
}

export async function logSeachResults(category: Category): Promise<void> {
    const result = await getBooksByCategoryPromise(category);
    console.log(result);
}