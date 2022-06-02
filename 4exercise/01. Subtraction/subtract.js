function subtract() {
    let first = Number(document.getElementById("firstNumber").value);
    let second = Number(document.getElementById("secondNumber").value);
    let resultElement = document.getElementById("result");
    resultElement.textContent = first - second;
}