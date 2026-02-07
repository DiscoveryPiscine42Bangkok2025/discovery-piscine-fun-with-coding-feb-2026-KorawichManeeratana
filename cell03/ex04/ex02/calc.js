function calculate() {
    // ใช้ jQuery ในการดึงค่าจาก Input และ Select
    const leftStr = $("#left").val();
    const rightStr = $("#right").val();
    const op = $("#operator").val();

    if (!/^\d+$/.test(leftStr) || !/^\d+$/.test(rightStr)) {
        alert("Error :(");
        return;
    }

    const a = parseInt(leftStr);
    const b = parseInt(rightStr);
    let result;

    if ((op === "/" || op === "%") && b === 0) {
        alert("It’s over 9000!");
        console.log("It’s over 9000!");
        return;
    }

    switch (op) {
        case "+": result = a + b; break;
        case "-": result = a - b; break;
        case "*": result = a * b; break;
        case "/": result = a / b; break;
        case "%": result = a % b; break;
    }

    // แสดงผลลัพธ์
    alert(result);
    console.log(result);
}

$(function() {
    $('input[type="submit"]').on('click', function(e) {
        e.preventDefault();
        calculate();
    });

    setInterval(function() {
        alert("Please, use me...");
    }, 30000);
});