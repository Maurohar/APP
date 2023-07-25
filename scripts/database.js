export class Book {
    constructor(id, author, title, pages, catalog, year, imagen, price) {
        this.id = id;
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.catalog = catalog;
        this.year = year;
        this.imagen = imagen;
        this.price = price;
    }
}


//CLASS contructora sobre LocalStorage.
export async function loadExistingBooks() {
    //Estoy trabajando solo con el primer BOOK (1 HOKUSAI) por eso arriba cambie la clase const.
    addBook(new Book(1, "Aguirre, Raúl Gustavo", "Cuerpo del horizonte", "32pp", "poemas", "1951", "andrebreton5.jpeg", "5000"));
    addBook(new Book(2, "Móbili, Jorge Enrique", "Convocaciones", "32 pp.", "poemas", "1951", "andrebreton5.jpeg", "5000"));
    addBook(new Book(3, "Aguirre, Raúl Gustavo", "Antología de una poesía nueva", "96 pp", "poemas", "1951", "andrebreton5.jpeg", "5000"));
    addBook(new Book(4, "Bayley, Edgar", "Realidad interna y función de la poesía.", "40 pp", "poemas", "1952", "andrebreton5.jpeg", "5000"));
    addBook(new Book(5, "Apollinaire, Guillaume", "Cualquiera", "16 pp.", "poemas", "1953", "andrebreton5.jpeg", "5000"));
    addBook(new Book(6, "Éluard, Paul", "Cualquiera 2", "16 pp.", "poemas", "1953", "andrebreton5.jpeg", "5000"));
    addBook(new Book(7, "Francisco", "Guatemala", " 20 pp.", "poemas", "1954", "andrebreton5.jpeg", "5000"));
    addBook(new Book(8, "Aguirre, Raúl Gustavo", "La danza nupcial", "12pp", "poemas", "1954", "5000"));
    addBook(new Book(9, "de Casasbellas, Ramiro", "El doble fondo", "24 pp", "poemas", "1954", "5000"));
    addBook(new Book(10, "Vela, Rubén", "Verano", "16 pp.", "poemas", "1954", "5000"));
    //terror                 //id, author, title, pages, catalogos, year
    addBook(new Book(11, "Jacob Max", " elección, versión y nota de Raúl Gustavo Aguirre y Ramiro de Casasbellas", "16 pp.", "poemas", "1954", "5000"));
    addBook(new Book(12, "Bayley", "Edgar (selección y nota de Raúl Gustavo Aguirre)", "poemas", "16pp", "1954", "5000"));
    addBook(new Book(13, "Vanasco Alberto", "Ella en general.", "poemas", "56 pp", "1954", "5000"));
    addBook(new Book(14, "Fernández Moreno, Baldomero", "La mariposa y la viga (aforismos, edición crítica, en parte inédita)", "32 pp", "revistas", "1955", "andrebreton5.jpeg", "5000"));
    addBook(new Book(15, "Urondo", "Francisco, Historia antigua", "16pp", "poemas", "1956", "andrebreton5.jpeg", "5000"));
    addBook(new Book(16, "Alonso, Rodolfo", "Buenos vientos", "16 pp", "revistas", "1956", "andrebreton5.jpeg", "5000"));
    addBook(new Book(17, "Bondoni, Néstor", "Travesía (relatos)", "48pp", "revistas", "1956", "andrebreton5.jpeg", "5000"));
    //addBook(new Book(18, "Aguirre, Raúl Gustavo, Alonso, Rodolfo, Bayley, Edgar, Bondoni, Osmar Luis, Fernández Moreno,César, Giribaldi, Daniel, Gola, Hugo, Trejo, Mario, Urondo, Francisco, Vanasco, Alberto, Diez","poemas de amor (antología)","20pp","1956"));
    addBook(new Book(19, "Pizarnik, Alejandra", "La última inocencia", "24pp", "poemas", "1956", "andrebreton5.jpeg", "5000"));
    addBook(new Book(20, "Azcona Cranwell, Elizabeth", "La vida disgregada", "32pp", "poemas", "1956", "32 pp.", "andrebreton5.jpeg", "5000"));
    addBook(new Book(21, "Drummond de Andrade", "Carlos (selección, traducción y nota de Ramiro de Casasbellas)", "16 pp", "bestsellers", "1957", "andrebreton5.jpeg", "5000"));
    addBook(new Book(22, "Bondoni, Osmar Luis", "Poemas", "24 pp", "terror", "1957", "andrebreton5.jpeg", "5000"));

    //seccion best sellers
    addBook(new Book(23, "Elliff, Osvaldo", "Poemas solos", "16 pp", "bestsellers", "1957", "andrebreton5.jpeg", "5000"));
    addBook(new Book(24, "Aguirre, Raúl Gustavo", "Cuaderno de notas (aforismos)", "24pp", "terror", "1957", "andrebreton5.jpeg", "5000"));
    addBook(new Book(25, "Lamborghini, Leónidas", "Al público", "16pp.", "terror", "1957", "andrebreton5.jpeg", "5000"));
    addBook(new Book(26, "D’Ornellas, Manuel", "Conquista del mar y la arena", "16pp.", "bestsellers", "1957", "andrebreton5.jpeg", "5000"));
    addBook(new Book(27, "Bullrich, Santiago", "Oda telegráfica a Tenochtitlán", "32pp", "bestsellers", "1957", "andrebreton5.jpeg", "5000"));
    addBook(new Book(28, "Porro, Mario,", "La vigilia y la roca", "16pp", "terror", "1957", "andrebreton5.jpeg", "5000"));
    addBook(new Book(29, "Giribaldi, Daniel", "Agua (poemas)", "16 pp", "poemas", "1958", "andrebreton5.jpeg", "5000"));
    addBook(new Book(30, "Urondo, Francisco", "Dos poemas", "16pp", "bestsellers", "1959", "andrebreton5.jpeg", "5000"));
    addBook(new Book(31, "Urondo, Francisco", "Breves", "40 pp", "poemas", "1959", "andrebreton5.jpeg", "5000"));
    addBook(new Book(32, "Alonso, Rodolfo", "Gran Bebé", "16pp", "revistas", "1960", "andrebreton5.jpeg", "5000"));
    addBook(new Book(33, "Urondo, Francisco", "Lugares", "16pp", "bestsellers", "1961", "andrebreton5.jpeg", "5000"));
}


export function addBook(book) {
    let localStorageBooks = localStorage.getItem("books");
    let existingBookList;

    if (localStorageBooks != null)
        existingBookList = JSON.parse(localStorageBooks);

    if (existingBookList == null)
        existingBookList = [];

    existingBookList.push(book);
    localStorage.setItem("books", JSON.stringify(existingBookList))
}

export function getAllBooks() {
    let localStorageBooks = localStorage.getItem("books");
    let existingBookList;

    if (localStorageBooks != null)
        existingBookList = JSON.parse(localStorageBooks);

    if (existingBookList == null)
        existingBookList = [];

    return existingBookList;
}

export function filterBooks(searchCriteria) {
    let bookList = getAllBooks();
    bookList = bookList.filter(function (book) { return book.title.toLowerCase().includes(searchCriteria.toLowerCase()) || book.author.toLowerCase().includes(searchCriteria.toLowerCase()) });
    return bookList;
}


