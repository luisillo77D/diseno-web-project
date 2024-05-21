document.addEventListener("DOMContentLoaded", function() {
    const currencySelector = document.getElementById("currency-selector");
    const currencyDropdown = document.getElementById("currency-dropdown");
  
   
    currencySelector.addEventListener("mouseover", function() {
      currencyDropdown.style.display = "block";
    });
  
  
    currencySelector.addEventListener("mouseout", function(event) {
     
      const buttonBounds = currencySelector.getBoundingClientRect();
      const dropdownBounds = currencyDropdown.getBoundingClientRect();
      const mouseX = event.clientX;
      const mouseY = event.clientY;
  
     
      if (
        mouseX < buttonBounds.left || mouseX > buttonBounds.right ||
        mouseY < buttonBounds.top || mouseY > dropdownBounds.bottom
      ) {
        currencyDropdown.style.display = "none";
      }
    });
  
    currencyDropdown.addEventListener("mouseout", function(event) {
      
      const buttonBounds = currencySelector.getBoundingClientRect();
      const dropdownBounds = currencyDropdown.getBoundingClientRect();
      const mouseX = event.clientX;
      const mouseY = event.clientY;
  
     
      if (
        mouseX < buttonBounds.left || mouseX > buttonBounds.right ||
        mouseY < buttonBounds.top || mouseY > dropdownBounds.bottom
      ) {
        currencyDropdown.style.display = "none";
      }
    });
  });
 document.addEventListener('DOMContentLoaded', function() {
    // Agrega event listeners a los enlaces de cambio de moneda
    document.getElementById('currency-usd').addEventListener('click', function() {
        convertirMoneda('USD');
    });

    document.getElementById('currency-eur').addEventListener('click', function() {
        convertirMoneda('EUR');
    });

    document.getElementById('currency-mxn').addEventListener('click', function() {
        convertirMoneda('MXN');
    });
});

function convertirMoneda(moneda) {
    var conversion = 1; // Por defecto, si es MXN no hay conversión
    if (moneda === 'USD') {
        conversion = 0.05; // Valor de conversión a dólares
    } else if (moneda === 'EUR') {
        conversion = 0.04; // Valor de conversión a euros
    }

    // Selecciona todos los elementos de precio en el menú
    var precios = document.querySelectorAll('.precio-item');

    precios.forEach(function(precio) {
        // Obtiene el precio original en pesos del atributo data
        var precioPesos = parseFloat(precio.getAttribute('data-precio-pesos'));

        // Verifica si el precio en pesos es un número válido
        if (!isNaN(precioPesos)) {
            // Convierte el precio a la moneda seleccionada
            var precioConvertido = precioPesos * conversion;

            // Actualiza el precio en el elemento
            precio.textContent = moneda + ' ' + precioConvertido.toFixed(2);
        } else {
            // Si el precio en pesos no es válido, muestra un mensaje de error
            console.error('El precio en pesos no es válido para el elemento:', precio);
        }
    });
}