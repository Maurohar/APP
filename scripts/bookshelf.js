import { Book } from "./database";


function agregarAlCarrito(libro) {
    console.log(libro);
}

agregarAlCarrito();

let bookshelf = [];


let libro1 = [
    {
        "id": 1,
        "imagen": "hokusai1.jpg",
        "author": "HOKUSAI",
        "title": "Cuerpo LA GRAN OLA.",
        "pages": "500pp",
        "catalog": "Poemas",
        "year": "1951",
        "price": "5000"

    }
];

let libro2 = {
    "id": 2,
    "imagen": "solsromaine2.jpg",
    "author": "Sols Romaine Nuevo",
    "title": "Libro de gran formato",
    "pages": "100pp",
    "catalog": "terror",
    "year": "2023",
    "price": "5000"
};

let libro3 = {
    "id": 3,
    "imagen": "vienne3.jpg",
    "author": "Vienne",
    "title": "Libro de gran formato",
    "pages": "100pp",
    "catalog": "bestsellers",
    "year": "2023",
    "price": "5000"
};

let libro4 = {
    "id": 4,
    "imagen": "truffaut4.jpg",
    "author": "Truffaut",
    "title": "TRUFFAUT HITCHCOCK",
    "pages": "100pp",
    "catalog": "terror",
    "year": "2023",
    "price": "5000"
};

let libro5 = {
    "id": 5,
    "imagen": "andrebreton5.jpg",
    "author": "Andre Breton",
    "title": "París, Ediciones del Centro Pompidou.",
    "pages": "512pp",
    "catalog": "poemas",
    "year": "1991",
    "price": "5000"
};

let libro6 = {
    "id": 6,
    "imagen": "delprete6.jpg",
    "author": "Del Prete",
    "title": "Esculturas y Dibujos",
    "pages": "240pp",
    "catalog": "terror",
    "year": "2023",
    "price": "5000"
};

let libro7 = {
    "id": 7,
    "imagen": "francesbeaufs7.jpg",
    "author": "La France des Beaufs",
    "title": "CABU continúa su exploración del planeta",
    "pages": "100pp",
    "catalog": "poemas",
    "year": "2023",
    "price": "5000"
};

let libro8 = {
    "id": 8,
    "imagen": "dessins.jpg",
    "author": "Felini Dessins",
    "title": "Festival de Cine de París. De toda rareza.",
    "pages": "100pp",
    "catalog": "poesia",
    "year": "2023",
    "price": "5000"
};

let libro9 = {
    "id": 9,
    "imagen": "juliabarata9.jpg",
    "author": "Julia Barata",
    "title": "El amor, los hijos, los excesos, la paz, el desayuno de cada mañana",
    "pages": "100pp",
    "catalog": "terror",
    "year": "2023",
    "price": "5000"
};

bookshelf.push(libro1, libro2, libro3, libro4, libro5, libro6, libro7, libro8, libro9);