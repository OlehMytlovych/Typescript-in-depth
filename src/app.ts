showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// task 02.01
enum Category {JavaScript, CSS, HTML, TypeScript, Angular}

function getAllBooks() {
    const booksCollection = [
        { id: 1, category: Category.JavaScript, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true},
        { id: 2, category: Category.JavaScript, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
        { id: 3, category: Category.CSS, title: 'CSS Secrets', author: 'Lea Verou', available: true },
        { id: 4, category: Category.JavaScript, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true }
    ];
    return booksCollection;
}

function logFirstAvailable(books: any[]) {
    console.log(`Number of books: ${books.length}`)

    const book = books.find((book: any) => book.available);
    console.log(book.title)
}

// logFirstAvailable(getAllBooks());

function getBookTitlesByCategory(category: Category): Array<string> {
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

function getBookAuthorByIndex(index: number) : [string, string] {
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

// console.log(calcTotalPages([{ lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 }, { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 }, { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }]))
