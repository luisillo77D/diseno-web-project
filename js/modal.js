// Obtener elementos del DOM
let listaProductos = document.querySelectorAll('.entradas, .platos-fuertes, .postres, .bebidas');
let modal = document.getElementById('modal');
let cerrarModal = document.getElementById('cerrarModal');
let tituloProductoModal = document.getElementById('name-product')
let precioProductoModal = document.getElementById('price-product');
let urlimagen = document.getElementById('img-modal');


// Función para abrir el modal y mostrar los detalles del producto seleccionado
function abrir(event) {
    // Obtener info de producto seleccionado
    let tituloProducto = event.currentTarget.querySelector('h3').textContent;
    let precioProduct = event.currentTarget.querySelector('h4').textContent;
    let imagenProducto = event.currentTarget.querySelector('img').src;
    
    // asignar la info al modal
    tituloProductoModal.textContent = tituloProducto;
    precioProductoModal.textContent = precioProduct;
    urlimagen.src = imagenProducto;
    
    // Mostrar el modal
    modal.style.display = 'block';
}

// Función para cerrar el modal
function cerrar() {
    modal.style.display = 'none';
}

// Agregar evento de clic a cada producto de la lista utilizando map
Array.from(listaProductos).map(function(producto) {
    producto.addEventListener('click', abrir);
});


// Evento de clic para cerrar el modal
cerrarModal.addEventListener('click', cerrar);

// Evento de clic fuera del modal para cerrarlo
window.addEventListener('click', function (event) {
    if (event.target == modal) {
        cerrar();
    }
});