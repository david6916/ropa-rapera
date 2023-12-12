carrito.js// Simula una lista de productos
const productos = [
    { id: 1, nombre: 'Camiseta The Noise', precio: 20 },
    { id: 2, nombre: 'Gorra The Noise', precio: 15 },
    // Agrega más productos según sea necesario
];

// Estado del carrito de compras
let carrito = [];

// Función para renderizar los items del carrito
function renderizarCarrito() {
    const carritoItemsElement = document.getElementById('carrito-items');
    carritoItemsElement.innerHTML = '';

    carrito.forEach(producto => {
        const carritoItem = document.createElement('div');
        carritoItem.classList.add('carrito-item');
        carritoItem.innerHTML = `
            <p>${producto.nombre} - ${producto.precio} USD</p>
        `;
        carritoItemsElement.appendChild(carritoItem);
    });
}

// Función para agregar productos al carrito
function agregarAlCarrito(productId) {
    const productoSeleccionado = productos.find(producto => producto.id === productId);

    if (productoSeleccionado) {
        carrito.push(productoSeleccionado);
        renderizarCarrito();
    }
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    renderizarCarrito();
}

// Ejecutar funciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    renderizarCarrito();

    document.getElementById('vac