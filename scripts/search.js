import * as database from "./database.js";

const btnSearch = document.getElementById("btnSearch");

btnSearch.addEventListener("click", (e) => {
    e.preventDefault();
    filterBooks();
});

/* Filtro para buscar libros por un input, capturamos el input */
function filterBooks() {
    const searchCriteria = document.getElementById("txtSearchCriteria").value;
    const filteredBookList = database.filterBooks(searchCriteria);
    reloadCatalog(filteredBookList);
}

/* esta funcion recarga la lista de libros, la resetea y agrega el titulo catalogo de cada seccion de la libreria */
function reloadCatalog(bookList) {
    const list = document.getElementById("bookList");
    list.innerHTML = '';

    if (bookList.length === 0) {
        addNoResultsMessage(list);
    } else {
        const catalogs = ["revistas", "terror", "bestsellers", "poemas"];
        catalogs.forEach((catalog) => {
            const filteredList = bookList.filter((book) =>
                book.catalog.toLowerCase() === catalog
            );
            if (filteredList.length > 0) {
                addCatalogTitle(list, catalog);
                filteredList.forEach((item) => {
                    addBookItem(list, item);
                });
            }
        });
    }
}

/* si buscamos un libro no existente retorna un innerText especifico */
function addNoResultsMessage(list) {
    const h = document.createElement("h");
    h.classList = "text-danger";
    h.innerText = "No se encontraron libros para tu búsqueda.";
    list.appendChild(h);
}
/* crea un h3 y agrega un titulo especifico */
function addCatalogTitle(list, catalog) {
    const title = document.createElement("h3");
    title.classList = "title-catalogos";
    title.innerText = catalog;
    list.appendChild(title);
}
/* esta funcion crea una etiqueta y concatena  */
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