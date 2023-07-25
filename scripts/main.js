import { Book, addBook, getAllBooks } from "./database.js";

//WE Captured the I'DS & classes.
let divBook = document.getElementById("libros")
let newDivBook = document.createElement("div")
let librosDiv = document.getElementById("libros")
let agregarLibroBtn = document.getElementById("guardarLibroBtn")
let buscador = document.getElementById("buscador")
let coincidencia = document.getElementById("coincidencia")
let modalBodyCarrito = document.getElementById("modal-bodyCarrito")
let botonCarrito = document.getElementById("botonCarrito")
let precioTotal = document.getElementById("precioTotal")
let loader = document.getElementById("loader")
let loaderTexto = document.getElementById("loaderTexto")
let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")

/* newDivBook.innerHTML = `<div class="container">
                    <div class="row align-items-start">
                    <div class="col">
                    <div id="${Book.id}" class="card container card-size">
                    <img src="./${imagenes/hokusai1.jpg}" class="card-img-top"
                    alt="Libro de gran formato, Hokusai la gran ola">
                    <div class="card-body"><p>${Book.author}</p>
                    <h5 class="card-title size-title">"${Book.title}"</h5>
                    <p class="card-text">Un día de temporal, una ola gigantesca deja a Naoki, recién nacido, en
                    la barca de Taro. Pasan siete años y Naoki continúa siendo pequeño, muy pequeño. Para crecer,
                    ¿deberá volver al océano? Encontrará la respuesta gracias a un fabuloso pez plateado...
                    Un
                    cuento sobre la adopción y el crecimiento inspirado en La gran ola de Hokusai. Incluye
                    conceptos básicos sobre arte: un álbum indispensable para una introducción a la
                    cultura japonesa.</p>
                    <p>${Book.pages}</p>
                    <p>${Book.catalog}</p>
                    <p>${Book.year}</p>

                    <a href="#" class="btn btn-primary"><i class="bi bi-cart2 icon-size btnCarrito"></i></a>
                    </div>
                    </div>
                    </div>`
divBook.appendChild(newDivBook) */

//Se creo un array de objetos. 


const libro1 = {
    "id": 34,
    "author": "HOKUSAI",
    "title": "Cuerpo LA GRAN OLA.",
    "pages": "500pp",
    "catalog": "Poemas",
    "year": "1951",
    "imagen": "hokusai1.jpg"
};

const libro2 = {
    "id": 35,
    "author": "Sols Romaine Nuevo",
    "title": "Libro de gran formato",
    "pages": "100pp",
    "catalog": "terror",
    "year": "2023",
    "imagen": "solsromaine2.jpg"
};


const libro3 = {
    "id": 36,
    "author": "Vienne",
    "title": "Libro de gran formato",
    "pages": "100pp",
    "catalog": "bestsellers",
    "year": "2023",
    "imagen": "vienne3.jpg"
};


const libro4 = {
    "id": 37,
    "author": "Truffaut",
    "title": "TRUFFAUT HITCHCOCK",
    "pages": "100pp",
    "catalog": "terror",
    "year": "2023",
    "imagen": "truffaut4.jpg"
};

const libro5 = {
    "id": 38,
    "author": "Andre Breton",
    "title": "París, Ediciones del Centro Pompidou.",
    "pages": "512pp",
    "catalog": "poemas",
    "year": "1991",
    "imagen": "andrebreton5.jpg"
};

const libro6 = {
    "id": 39,
    "author": "Del Prete",
    "title": "Esculturas y Dibujos",
    "pages": "240pp",
    "catalog": "terror",
    "year": "2023",
    "imagen": "delprete6.jpg"
};

const libro7 = {
    "id": 40,
    "author": "La France des Beaufs",
    "title": "CABU continúa su exploración del planeta",
    "pages": "100pp",
    "catalog": "poemas",
    "year": "2023",
    "imagen": "francesbeaufs7.jpg"
};

const libro8 = {
    "id": 41,
    "author": "Felini Dessins",
    "title": "Festival de Cine de París. De toda rareza.",
    "pages": "100pp",
    "catalog": "poesia",
    "year": "2023",
    "imagen": "dessins8.jpg"
};

const libro9 = {
    "id": 42,
    "author": "Julia Barata",
    "title": "El amor,los hijos,los excesos,la paz,el desayuno de cada mañana",
    "pages": "100pp",
    "catalog": "terror",
    "year": "2023",
    "imagen": "juliabarata9.jpg"
};


addBook(new Book(libro1.id, libro1.author, libro1.title, libro1.pages, libro1.catalog, libro1.year, libro1.imagen));

const bookshelf = [];
bookshelf.push(libro1, libro2, libro3, libro4, libro5, libro6, libro7, libro8, libro9);

console.log(bookshelf);

let libro = bookshelf; //we define the variable
for (libro of bookshelf) {
    let newDivBook = document.createElement("div");
    newDivBook.className += "col-12 col-md-6 col-lg-4 my-2";
    newDivBook.innerHTML += `<hr><div class="container">
                            <div class="row align-items-start">
                            <div class="col">
                            <div id="${libro.id}" class="card container card-size">
                            <img src="../imagenes/${libro.imagen}" height="350px" class="card-img-top"
                            alt="Libro de gran formato.">
                            <div class="card-body">
                            <h5 class="card-title size-title">${libro.author}</h5>
                            <p class="card-text">${libro.title}</p>
                            <p>${libro.pages}</p>
                            <p>${libro.catalog}</p>
                            <p>${libro.year}</p>
                            <button class="btn btn-primary" id="btnComprar${libro.id}"><i class="bi bi-cart2 icon-size"></i></button>
                            </div>
                            </div>
                            </div>`;
    divBook.appendChild(newDivBook);
}


/* class Shopping {
    constructor(id, author, title, precio, cantidad, imagen) {
        this.id = id,
            this.author = author,
            this.title = title,
            this.precio = precio,
            this.cantidad = cantidad,
            this.imagen = imagen


    }
}
 */


//Carrito de compras
/* let ShoppingCart = [''];


ShoppingCart.innerHTML += `<div class="card border-primary mb-3" id="productoCarrito${productoCarrito.id}" style="max-width: 540px;">
                                <img class="card-img-top" height="300"px src="">
                                <div class="card-body">
                                <p class="card-text">${productoCarrito.author}</p>
                                <h4 class="card-title">${productoCarrito.titulo}</h4>
                                <p class="card-text"> Precio Unitario ${productoCarrito.precio}</p>
                                <p class="card-text"> Total de productos ${productoCarrito.cantidad}</p>
                                <p class="card-text"> SubTotal ${productoCarrito.cantidad * productoCarrito.precio}</p>
                                
                                <button class="btn btn-danger" id="botonEliminarUnidad"${productoCarrito.id}><i class="fas fa-trash-alt"></i></button>
                                <button class="btn btn-danger" id="botonSumarUnidad"${productoCarrito.id}><i></i></button>
                                <button class="btn btn-danger" id="botonEliminar">${productoCarrito.id}<i class="fas fa-trash-alt"></i></button>
                                </div>
                                </div>`
ShoppingCart.appendChild('');

 */

