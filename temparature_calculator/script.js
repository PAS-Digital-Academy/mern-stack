function convert_from_celsius() {
    const cel = document.getElementById("cel").value
    let result = (cel * 9 / 5) + 32;
    let kelvin = parseFloat(cel) + 273.15

    document.getElementById("kel").value = kelvin.toFixed(4)
    document.getElementById("fer").value = result.toFixed(4)
}


function convert_from_fahrenheit() {
    const fer = document.getElementById("fer").value
    let result = (fer - 32) * 5 / 9;
    let kelvin = result + 273.15

    document.getElementById("cel").value = result.toFixed(4)
    document.getElementById("kel").value = kelvin.toFixed(4)
}


function convert_from_kelvin() {
    const kel = document.getElementById("kel").value

    const cel = kel - 273.15;
    const fer = (cel * 9 / 5) + 32


    document.getElementById('cel').value = cel.toFixed(4)
    document.getElementById('fer').value = fer.toFixed(4)

}