function enterd(event) {
    var p = document.getElementById("display");
    p.value += event.target.textContent;
}

function calculate() {
    var p = document.getElementById("display");
    try {
        p.value = eval(p.value);
    } catch (e) {
        p.value = "Error";
    }
}

function clearDisplay() {
    var p = document.getElementById("display");
    p.value = "";
}