const btnPago = document.querySelector('.btn-pagar');
const btnHistorial = document.getElementById('historial-nav');
let tituloProducto, cantidadProducto, totalProducto;
let historial = JSON.parse(localStorage.getItem('historial')) || [];

btnPago.addEventListener('click', () => {
    tituloProducto = document.querySelectorAll('.carrito-item-titulo');
    cantidadProducto = document.querySelectorAll('.carrito-item-cantidad');
    totalProducto = document.getElementById('total-carrito');
    //guardamos los datos en un array
    let productos = [];
    for (let i = 0; i < tituloProducto.length; i++) {
        productos.push({
            titulo: tituloProducto[i].textContent,
            cantidad: cantidadProducto[i].value,
            total: totalProducto.textContent,
            fecha: new Date().toLocaleDateString(),
        });
    }
    historial.push(productos);
    localStorage.removeItem('historial');
    localStorage.setItem('historial', JSON.stringify(historial));
    console.log(historial);
});
