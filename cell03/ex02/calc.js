function calculate() {
    const left = document.getElementById("left").value;
    const right = document.getElementById("right").value;
    const op = document.getElementById("operator").value;
    if (
        left === "" || right === "" ||
        isNaN(left) || isNaN(right) ||
        left < 0 || right < 0 ||
        !Number.isInteger(Number(left)) ||
        !Number.isInteger(Number(right))
    ) {
        alert("Error :(");
        return;
    }

    const a = Number(left);
    const b = Number(right);
    let result;

    if ((op === "/" || op === "%") && b === 0) {
        alert("Division by zero is not allowed.");
        return;
    }

    switch (op) {
        case "+": result = a + b; break;
        case "-": result = a - b; break;
        case "*": result = a * b; break;
        case "/": result = a / b; break;
        case "%": result = a % b; break;
    }

    alert(result);
    console.log(result);
}

setInterval(() => {
    alert("Please, use me...");
}, 30000);
