document.getElementById('calorie-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const activity = parseFloat(document.getElementById('activity').value);

    const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    const calories = bmr * activity;

    document.getElementById('result').innerHTML = `<h4>Calorías diarias necesarias: ${calories.toFixed(2)}</h4>`;
});