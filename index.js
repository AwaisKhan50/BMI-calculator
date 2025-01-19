function myfun() {
    var weight = parseFloat(document.getElementById('input1').value);
    var height = parseFloat(document.getElementById('input2').value);
    if (!weight || !height || weight <= 0 || height <= 0) {
        alert("Please enter valid weight and height values.");
        return;
    }
    var bmi = weight / Math.pow(height, 2);
    bmi = Math.round(bmi * 10) / 10; // Rounds to 1 decimal place
    document.getElementById('input3').value = bmi;
}