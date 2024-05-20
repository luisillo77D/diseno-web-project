// Obtener elementos del DOM
let listaProductos = document.querySelectorAll('.item');
let modal = document.getElementById('modal');
let cerrarModal = document.getElementById('cerrarModal');
let tituloProductoModal = document.getElementById('name-product')
let precioProductoModal = document.getElementById('price-product');
let urlimagen = document.getElementById('img-modal');
const btnAgregar = document.querySelectorAll('.boton-item');


// Función para abrir el modal y mostrar los detalles del producto seleccionado
function abrir(event) {
    // Obtener info de producto seleccionado
    let tituloProducto = event.currentTarget.querySelector('.titulo-item').textContent;
    let precioProduct = event.currentTarget.querySelector('.precio-item').textContent;
    let imagenProducto = event.currentTarget.querySelector('.img-item').src;
    
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

//agregamos la funcion cerrar al boton de agregar
Array.from(btnAgregar).map(function(boton) {
    boton.addEventListener('click',  ()=> {
        //esperamos 1 segundo y cerramos el modal
        setTimeout(cerrar, .5);
        console.log('cerrar');
    }
    );
});
