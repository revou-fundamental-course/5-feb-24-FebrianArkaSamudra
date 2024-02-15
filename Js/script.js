function konversiSuhu() {
    var celciusInput = parseFloat(document.getElementById("celcius").value);
    var fahrenheitInput = parseFloat(document.getElementById("fahrenheit").value);
    var hasil, penjelasan;

    if (!isNaN(celciusInput) && !isNaN(fahrenheitInput)) {
        penjelasan = "Masukkan hanya satu suhu (Celsius atau Fahrenheit).";
    } else if (!isNaN(celciusInput)) {
        hasil = celciusInput * 9 / 5 + 32;
        penjelasan = celciusInput + " Celsius adalah " + hasil.toFixed(2) + " Fahrenheit.";
    } else if (!isNaN(fahrenheitInput)) {
        hasil = (fahrenheitInput - 32) * 5 / 9;
        penjelasan = fahrenheitInput + " Fahrenheit adalah " + hasil.toFixed(2) + " Celsius.";
    } else {
        penjelasan = "Masukkan suhu yang valid.";
    }

    document.getElementById("hasil").innerHTML = penjelasan;
}

function clearFields() {
    document.getElementById("celcius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("hasil").innerHTML = "";
}