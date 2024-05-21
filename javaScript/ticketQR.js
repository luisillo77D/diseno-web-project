document.addEventListener("DOMContentLoaded", function() {
    // Obtener los parámetros de la URL
    var urlParams = new URLSearchParams(window.location.search);

    // Verificar si existen parámetros en la URL
    if (urlParams.has('items') && urlParams.has('total')) {
        // Obtener el valor del parámetro 'items'
        var itemsEncoded = urlParams.get('items');
        var totalEncoded = urlParams.get('total');

        // Decodificar los valores
        var itemsDecoded = decodeURIComponent(itemsEncoded);
        var totalDecoded = decodeURIComponent(totalEncoded);
        var total = parseFloat(totalDecoded);

        // Convertir los datos decodificados de 'items' de cadena a objeto JavaScript
        var itemsObj = JSON.parse(itemsDecoded);

        var contenedorProductos = document.getElementById('contenedorProductos');
        contenedorProductos.innerHTML = "";

        // Recorrer los productos y crear tarjetas para cada uno
        itemsObj.forEach(function(item) {
            var card = document.createElement('div');
            card.classList.add('card', 'mb-3');
            card.innerHTML = `
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${item.imagen}" class="img-fluid rounded-start" alt="${item.titulo}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="fs-2 text">${item.titulo}</h5>
                            <p class="fs-3 text">Precio: ${item.precio} $</p>
                            <p class="fs-3 text">Cantidad: ${item.cantidad}</p>
                        </div>
                    </div>
                </div>
            `;
            contenedorProductos.appendChild(card);
        });

        // Mostrar el total
        document.getElementById('totalPrecio').innerHTML=`<span>${total.toLocaleString("es")}$</span>`
    } else {
        console.log('No se encontraron parámetros en la URL.');
    }
});
