import * as database from "./database.js";

// Variables para almacenar los productos en el carrito
const cartItems = {};

// Función para obtener los valores del producto por su ID
function getProductInfo(id) {
    alert(`get book by ${id}`)
    let book = database.getBookById(id)
    alert(`book has title ${book.title}`)
    return book

/*
    const productTitle = document.getElementById(`product-title-${id}`).textContent;
    const productAuthor = document.getElementById(`product-author-${id}`).textContent;
    const productPrice = parseFloat(document.getElementById(`product-price-${id}`).textContent.replace('$', ''));
    const productId = parseInt(document.getElementById(`product-id-${id}`).textContent);

    return {
        title: productTitle,
        author: productAuthor,
        price: productPrice,
        id: productId
    };
    */
}

// Función para actualizar el display del carrito
function updateCartDisplay() {
    alert('3')
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';

    for (const productId in cartItems) {
        const product = cartItems[productId];
        const li = document.createElement('li');
        li.textContent = `${product.title} (ID: ${product.id}) - Cantidad: ${product.quantity} - Precio: $${(product.price * product.quantity).toFixed(2)}`;
        cartItemsElement.appendChild(li);
    }
}

// Función para agregar un producto al carrito
function addToCart(productId) {
    if (cartItems[productId]) {
        cartItems[productId].quantity++;
    } else {
        const productInfo = getProductInfo(productId);
        productInfo.quantity = 1;
        cartItems[productId] = productInfo;
    }
    updateCartDisplay();
}

// Función para remover un producto del carrito
function removeFromCart(productId) {
    if (cartItems[productId]) {
        cartItems[productId].quantity--;
        if (cartItems[productId].quantity <= 0) {
            delete cartItems[productId];
        }
        updateCartDisplay();
    }
}

// Función para vaciar el carrito
function clearCart() {
    for (const productId in cartItems) {
        delete cartItems[productId];
    }
    updateCartDisplay();
}

// Event listener para el botón de suma
function sumarProducto(productId) {
    addToCart(productId);
}

// Event listener para el botón de resta
function restarProducto(productId) {
    removeFromCart(productId);
}

// Event listener para el botón de vaciar carrito
document.getElementById('clear-cart').addEventListener('click', clearCart);