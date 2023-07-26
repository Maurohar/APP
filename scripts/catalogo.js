import * as database from "./database.js";
import * as search from "./search.js";

window.addEventListener('load', loadCatalog);
const params = new URLSearchParams(window.location.search);
const filter = params.get('filter');

function loadCatalog() {
    let bookCatalog = database.getAllBooks();

    if (bookCatalog.length === 0) {
        database.loadExistingBooks().then(() => {
            bookCatalog = database.getAllBooks();
            filterBooksByCatalog(bookCatalog);
        });
    } else {
        filterBooksByCatalog(bookCatalog);
    }
    console.log(bookCatalog);
}

function filterBooksByCatalog(bookCatalog) {
    let bookListTerror = [];
    let bookListRevistas = [];
    let bookListBestSellers = [];
    let bookListPoemas = [];
    let bookListMas = [];

    bookCatalog.forEach((book) => {
        switch (book.catalog.toLowerCase()) {
            case "terror":
                bookListTerror.push(book);
                break;
            case "revistas":
                bookListRevistas.push(book);
                break;
            case "bestsellers":
                bookListBestSellers.push(book);
                break;
            case "poemas":
                bookListPoemas.push(book);
                break;
            default:
                bookListMas.push(book);
                break;
        }
    });

    const list = document.getElementById("bookList");

    switch (filter) {
        case "revistas":
            addCatalogTitle(list, "revistas");
            bookListRevistas.forEach((item) => {
                addBookItem(list, item);
            });
            break;
        case "terror":
            addCatalogTitle(list, "terror");
            bookListTerror.forEach((item) => {
                addBookItem(list, item);
            });
            break;
        case "bestsellers":
            addCatalogTitle(list, "Bestsellers");
            bookListBestSellers.forEach((item) => {
                addBookItem(list, item);
            });
            break;
        case "poemas":
            addCatalogTitle(list, "poemas");
            bookListPoemas.forEach((item) => {
                addBookItem(list, item);
            });
            break;
        default:
            addCatalogTitle(list, "revistas");
            bookListRevistas.forEach((item) => {
                addBookItem(list, item);
            });

            addCatalogTitle(list, "terror");
            bookListTerror.forEach((item) => {
                addBookItem(list, item);
            });

            addCatalogTitle(list, "Bestsellers");
            bookListBestSellers.forEach((item) => {
                addBookItem(list, item);
            });

            addCatalogTitle(list, "poemas");
            bookListPoemas.forEach((item) => {
                addBookItem(list, item);
            });
            break;
    }
}

function addCatalogTitle(list, catalog) {
    const title = document.createElement("h3");
    title.classList = "title-catalogos";
    title.innerText = catalog;
    list.appendChild(title);
}

function addBookItem(list, item) {
    const btnCarrito = createButtonElement("btnComprar" + item.id, "bi bi-cart2 icon-size btnCarrito");
    const a = document.createElement("a");
    a.classList = "list-group-item list-group-item-action";
    a.href = "#";
    a.innerText = `${item.author}, ${item.title}, ${item.year}, ${item.pages}`;
    a.appendChild(btnCarrito);
    list.appendChild(a);
}

function createButtonElement(id, className) {
    const btn = document.createElement("a");
    btn.classList = "btn btn-primary";
    btn.href = "#";
    btn.id = id;
    const icon = document.createElement("i");
    icon.classList = className;
    btn.appendChild(icon);
    return btn;
}

