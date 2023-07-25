// Función para agregar un libro al carrito
function agregaItemCarrito(book) {
    const cartItems = tomaItemCarrito();
    cartItems.push(book);
    guardaItemStorage(cartItems);
}

// Función para obtener todos los libros del carrito
function tomaItemCarrito() {
    const cartItemsString = localStorage.getItem("cartItems");
    return cartItemsString ? JSON.parse(cartItemsString) : [];
}

// Función para guardar los libros del carrito en el almacenamiento local
function guardaItemStorage(cartItems) {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

// Función para calcular el total del carrito
function calculaTotalCompra() {
    const cartItems = tomaItemCarrito();
    let total = 0;
    cartItems.forEach((book) => {
        total += Number(book.price);
    });
    return total;
}

// Función para eliminar un libro del carrito por su ID
function borraItemCarrito(bookId) {
    const cartItems = tomaItemCarrito();
    const updatedCartItems = cartItems.filter((book) => book.id !== bookId);
    guardaItemStorage(updatedCartItems);
}

// Código para generar la vista del carrito en el HTML
function generarVistaCarrito() {
    const cartItems = tomaItemCarrito();
    let carritoComprasDiv = document.createElement('div');
    carritoComprasDiv.className = 'container py-5 h-100';
    // Resto del código para generar la vista del carrito
    // Aquí deberías agregar el código HTML y JavaScript necesario para mostrar los libros en el carrito, el total, etc.
    // No tengo acceso al servidor, así que no puedo crear el carrito real con los datos de los libros.
    // Solo puedo refactorizar la estructura general del código.

    // Agregamos el div del carrito a la página
    document.body.appendChild(carritoComprasDiv);
}

generarVistaCarrito();