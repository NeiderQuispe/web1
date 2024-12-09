document.addEventListener('DOMContentLoaded', () => {
    fetch('/productos')
        .then(response => response.json())
        .then(productos => {
            const productosContainer = document.querySelector('.productos');
            productos.forEach(producto => {
                const productoHTML = `
                    <div class="producto">
                        <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-img">
                        <h3>${producto.nombre}</h3>
                        <p>${producto.descripcion}</p>
                        <p>$${producto.precio.toFixed(2)}</p>
                        <button>Agregar al carrito</button>
                    </div>
                `;
                productosContainer.innerHTML += productoHTML;
            });
        })
        .catch(err => console.error("Error al cargar productos:", err));
});
