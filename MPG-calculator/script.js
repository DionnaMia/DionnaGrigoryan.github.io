function calculateMPG() {
    let miles = document.getElementById("miles").value;
    let gallons = document.getElementById("gallons").value;

    miles = parseFloat(miles);
    gallons = parseFloat(gallons);

    if (gallons === 0 || isNaN(miles) || isNaN(gallons)) {
        document.getElementById("result").innerHTML = "Please enter valid numbers.";
        return;
    }

    let mpg = miles / gallons;

    document.getElementById("result").innerHTML = "Miles per Gallon: " + mpg.toFixed(2);
}