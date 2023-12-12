// Simula una lista de productos
const productos = [
    { id: 1, nombre: 'Camiseta The Noise', precio: 20 },
    { id: 2, nombre: 'Gorra The Noise', precio: 15 },
    // Agrega más productos según sea necesario
];

// Función para renderizar productos en el catálogo
function renderizarCatalogo() {
    const catalogoElement = document.getElementById('catalogo');

    productos.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('producto');
        card.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>${producto.precio} USD</p>
            <button class="button-agregar" onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
        `;
        catalogoElement.appendChild(card);
    });
}

// Ejecutar funciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    renderizarCatalogo();
});