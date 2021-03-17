/* eslint-disable no-underscore-dangle */
/* eslint-disable no-redeclare */
import {Category} from './enums';
import {Book,
    Logger,
    Person,
    Author,
    Librarian,
    Magazine} from './interfaces';
// import { ReferenceItem, UniversityLibrarian } from './classes';
import { BookProperties, PersonBook, BookOrUndefined, BookRequiredFields, UpdatedBook, CreateCustomerFunctionType } from './types';
import { showHello, createCustomerID, purge, getProperty, createCustomer, getBooksByCategory, logCategorySearch, getBooksByCategoryPromise, logSeachResults } from './functions';
import { ReferenceItem, UniversityLibrarian, RefBook, Reader, Shelf} from './classes';
import type { Library } from './classes';

showHello('greeting', 'TypeScript');

// task 02.01
// logFirstAvailable(getAllBooks());

// logBookTitles(getBookTitlesByCategory(Category.JavaScript));

// console.log(getBookAuthorByIndex(3));

const libraryData = <const> [{ lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 }, { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 }, { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }];
// console.log(calcTotalPages(libraryData))

// 03.01
const myID = createCustomerID('Ann', 10);
// console.log(myID);

let iGenerator: (name: string, id: number) => string;
iGenerator = (name: string, id: number) => `${id}-${name}`;
iGenerator = createCustomerID;
// console.log(createCustomerID('Boris', 20));

// 03.02
// createCustomer('oleh', 24, 'lviv');

// console.log(getBookTitlesByCategory());

// logFirstAvailable();

// console.log(getBookByID(1));

// const myBooks = сheckoutBooks('Ann', 1, 2, 4);
// console.log(myBooks)


/* console.log(getTitles(true));
console.log(getTitles('Evan Burchard')); */

// 03.04

// console.log(bookTitleTransform('typescript'));
// console.log(bookTitleTransform(100500));

// Task 04.01


const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    markDamaged: (reason: string) => `Damaged: ${reason}`,
    /* year: 2015,
    copies: 3 */
};
// printBook(myBook);
// console.log(myBook.markDamaged('no black color'));

// Task 04.02
const logDamage: Logger = (reason: string) => `Damaged: ${reason}`;
// console.log(logDamage('missing back cover'));

// Task 04.03
/* const ref = new ReferenceItem('typescript', 2021, 1);
ref.printItem();
ref.publisher = 'publisher';
console.log(ref);
console.log(ref.getID()); */



const favoriteAuthor: Author = {
    name: 'Anna',
    email: 'anna@gmail.com',
    numBooksPublished: 3
};

const favoriteLiabrarian: Librarian = {
    name: 'Anna',
    email: 'anna@gmail.com',
    department: 'adwadaw',
    assistCutomer: (custName: string) => console.log(custName)
};

// Task 04.04
const offer: any = {
    book: {
        title: 'Essential Typescript'
    }
};

// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.titles?.[0]);

// Task 04.05
/* console.log(getProperty(myBook, 'title'));
console.log(getProperty(myBook, 'markDamaged'));
console.log(getProperty(myBook, 'isbn')); */

// Task 05.01
/* const refBook = new RefBook(1,'type', 2021, 12);
console.log(refBook);
refBook.printItem();
refBook.printCitation(); */

/* const favouriteLiabrarian: Librarian = new UniversityLibrarian();
favouriteLiabrarian.name = 'Anna';
favouriteLiabrarian.assistCutomer('Oleh'); */

// Task 05.05
const personBook: PersonBook = {
    id: 1,
    name: 'Oleh',
    author: 'Oleh',
    available: true,
    category: Category.Angular,
    email: 'oleh@asg.as',
    title: 'Angular'
};

// Task 06.05
/* if (true) {
    import('./classes').then(classesModule => {
        const reader = new Reader();
        console.log(reader);
    });
} */

// Task 06.06
const libraryVar: Library = {id: 1, name: 'asd', address: 'ads'};
// new Library();
// console.log(libraryVar);

// Task 07.01
const inventory = [{ id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },{ id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },{ id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },{ id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }];
/* console.log(purge(inventory));
console.log(purge([1,2,3,4,5,6,7,8,9])); */

// Task 07.02
const bookShelf = new Shelf(inventory);
// console.log(bookShelf.getFirst().title);

const magazines = [{ title: 'Programming Language Monthly', publisher: 'Code Mags' },{ title: 'Literary Fiction Quarterly', publisher: 'College Press' },{ title: 'Five Points', publisher: 'GSU' }];
const magazineShelf = new Shelf(magazines);
// console.log(magazineShelf.getFirst().title);
// 07.03
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));

// console.log(getProperty<Magazine, 'title'>(magazines[0], 'title'));

// Task 07.04
/* const book: BookRequiredFields = {
    author: 'as',
    available: true,
    category: Category.CSS,
    id: 1,
    markDamaged: null,
    pages: 100500,
    title: 'name'
};

const b: UpdatedBook = {
    id: 1,
    author: 'mimiko',
}; */

const params: Parameters<CreateCustomerFunctionType> = ['me'];
// createCustomer(...params);

// Task 08.01/02
/* const l = new UniversityLibrarian();
console.log(l);
l['printLibrarian'](); */


// Task 08.03
/* const l = new UniversityLibrarian();
l.assistFaculty = null;
l.teachCommunity = null;
console.log(l); */

// Task 08.04
/* const e = new RefBook(1, 'Tale', 1999, 2);
e.printItem(); */

// task 08.05, 08.06
/* const favouriteLiabrarian: Librarian = new UniversityLibrarian();
favouriteLiabrarian.name = 'Anna';
favouriteLiabrarian.assistCutomer('Oleh'); */

// task 08.07
/* const e = new RefBook(1, 'Unksa', 2021, 2);
e.copies = 10;
e.copies = 1.1; */

// task 09.01
/* console.log('start');
getBooksByCategory(Category.JavaScript, logCategorySearch);
getBooksByCategory(Category.Software, logCategorySearch);
console.log('finish'); */

// task 09.02
/* console.log('start');
getBooksByCategoryPromise(Category.JavaScript)
    .then(titles => {
        console.log(titles);
        return titles.length;
    })
    .then(numOfBooks => console.log(numOfBooks))
    .catch(err => console.log(err));

getBooksByCategoryPromise(Category.Software)
    .then(titles => console.log(titles))
    .catch(err => console.log(err))
    .then(err=> console.log(err));
console.log('finish'); */

// task 09.03
console.log('start');
logSeachResults(Category.JavaScript);
logSeachResults(Category.Software)
    .catch(err => console.log(err));
console.log('finish');
