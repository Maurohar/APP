import { Book } from "./database";

/* variable para guardar un array de objetos en este caso 9 libros */
let bookshelf = [];


let libro1 = [
    {
        "id": 34,
        "author": "HOKUSAI",
        "title": "Cuerpo LA GRAN OLA.",
        "pages": "500pp",
        "catalog": "Poemas",
        "year": "1951",
        "price": "5000",
        "imagen": "hokusai1.jpg"

    }
];

let libro2 = {
    "id": 35,
    "author": "Sols Romaine Nuevo",
    "title": "Libro de gran formato",
    "pages": "100pp",
    "catalog": "terror",
    "year": "2023",
    "price": "5000",
    "imagen": "solsromaine2.jpg"
};

let libro3 = {
    "id": 36,
    "author": "Vienne",
    "title": "Libro de gran formato",
    "pages": "100pp",
    "catalog": "bestsellers",
    "year": "2023",
    "price": "5000",
    "imagen": "vienne3.jpg"
};

let libro4 = {
    "id": 37,
    "author": "Truffaut",
    "title": "TRUFFAUT HITCHCOCK",
    "pages": "100pp",
    "catalog": "terror",
    "year": "2023",
    "price": "5000",
    "imagen": "truffaut4.jpg"
};

let libro5 = {
    "id": 38,
    "author": "Andre Breton",
    "title": "París, Ediciones del Centro Pompidou.",
    "pages": "512pp",
    "catalog": "poemas",
    "year": "1991",
    "price": "5000",
    "imagen": "andrebreton5.jpg"
};

let libro6 = {
    "id": 39,
    "author": "Del Prete",
    "title": "Esculturas y Dibujos",
    "pages": "240pp",
    "catalog": "terror",
    "year": "2023",
    "price": "5000",
    "imagen": "delprete6.jpg"
};

let libro7 = {
    "id": 40,
    "author": "La France des Beaufs",
    "title": "CABU continúa su exploración del planeta",
    "pages": "100pp",
    "catalog": "poemas",
    "year": "2023",
    "price": "5000",
    "imagen": "francesbeaufs7.jpg"
};

let libro8 = {
    "id": 41,
    "author": "Felini Dessins",
    "title": "Festival de Cine de París. De toda rareza.",
    "pages": "100pp",
    "catalog": "poesia",
    "year": "2023",
    "price": "5000",
    "imagen": "dessins.jpg",
};

let libro9 = {
    "id": 42,
    "author": "Julia Barata",
    "title": "El amor, los hijos, los excesos, la paz, el desayuno de cada mañana",
    "pages": "100pp",
    "catalog": "terror",
    "year": "2023",
    "price": "5000",
    "imagen": "juliabarata9.jpg"
};

bookshelf.push(libro1, libro2, libro3, libro4, libro5, libro6, libro7, libro8, libro9);