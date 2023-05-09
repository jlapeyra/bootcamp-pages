function calculate() {
    var display = document.getElementById("display");
    var expression = display.value;
    if (expression === "Error") return;
    try {
        var result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function addToDisplay(value) {
    document.getElementById("display").value += value;
}

function handleKeyPress(event) {
    var key = event.key;
    //var allowedKeys = /[-+*/\d\s()]/;

    if (key === "Enter") {
        calculate();
    } else if (key === "Escape") {
        clearDisplay();
    }
    //} else if (allowedKeys.test(key)) {
    //    addToDisplay(key);
    //}
}