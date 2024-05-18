document.getElementById('reservation-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const people = document.getElementById('people').value;

    const result = `
        <h4>Reservación Confirmada</h4>
        <p>Nombre: ${name}</p>
        <p>Correo Electrónico: ${email}</p>
        <p>Número de Teléfono: ${phone}</p>
        <p>Fecha: ${date}</p>
        <p>Hora: ${time}</p>
        <p>Número de Personas: ${people}</p>
    `;
    document.getElementById('result').innerHTML = result;
});