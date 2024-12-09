const db = require('./database');

const productos = [
    {
        nombre: "Teclado Mecánico",
        descripcion: "Teclado mecánico con retroiluminación RGB.",
        precio: 45.99,
        imagen: "images/teclado.jpg"
    },
    {
        nombre: "Ratón Óptico",
        descripcion: "Ratón óptico ergonómico de alta precisión.",
        precio: 19.99,
        imagen: "images/raton.jpg"
    },
    {
        nombre: "Monitor 24\"",
        descripcion: "Monitor Full HD de 24 pulgadas.",
        precio: 199.99,
        imagen: "images/monitor.jpg"
    }
];

productos.forEach((producto) => {
    db.run(`
        INSERT INTO productos (nombre, descripcion, precio, imagen)
        VALUES (?, ?, ?, ?)
    `, [producto.nombre, producto.descripcion, producto.precio, producto.imagen], (err) => {
        if (err) {
            console.error("Error al insertar producto:", err.message);
        } else {
            console.log("Producto insertado correctamente:", producto.nombre);
        }
    });
});

db.close();
