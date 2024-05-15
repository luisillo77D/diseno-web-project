let historial = JSON.parse(localStorage.getItem('historial')) || [];
const historialContainer = document.getElementById('historial-container');

function mostrarHistorial() {
    historialContainer.innerHTML = '';
    historial.forEach((productos, index) => {
        const historialCard = document.createElement('div');
        historialCard.classList.add('card');
        historialCard.innerHTML = `
            <div class="card-body">
            <h3>Compra #${index + 1}</h3>
            <ul>
                ${productos.map(producto => `
                    <li>
                        <p>Producto: ${producto.titulo}</p>
                        <p>Cantidad: ${producto.cantidad}</p>
                        
                        ${productos.indexOf(producto) === productos.length - 1 ? `
                        <div class=""> 
                            <p>Total: ${producto.total}</p>
                            <p>Fecha: ${producto.fecha}</p>
                        </div>
                        `             
                        : ''}
                    </li>
                `).join('')}
            </ul>
            </div>
        `;
        historialContainer.appendChild(historialCard);
    });
}

mostrarHistorial();