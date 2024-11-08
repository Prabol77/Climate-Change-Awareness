function calculateFootprint() {
    const transport = document.getElementById('transport').value;
    const electricity = document.getElementById('electricity').value;
    const food = document.getElementById('food').value;

    const footprint = (transport * 0.21) + (electricity * 0.233) + (food * 0.03);
    document.getElementById('carbon-output').textContent = footprint.toFixed(2) + ' tonnes CO₂ per year';
}
