// CALCULATOR PROGRAM

// DOM ID dengan variabel
const display = document.getElementById("displaynumber");

function appendToDisplay(input) { 
    // Menampilkan angka di input
    display.value += input;
}

function clearDisplay() {
    // Menghapus value di bagian input
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch(error) {
        display.value = "Error";
    }
}