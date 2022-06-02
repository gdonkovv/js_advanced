function sumTable() {
    let rows = Array.from(document.querySelectorAll("tr"));
    rows.shift();
    rows.pop();
    let sum = 0;
    for (let row of rows) {
        let secondColCell = row.children[1];
        sum += Number(secondColCell.textContent);
    }

    let resultElement = document.querySelector("td#sum");
    resultElement.textContent = sum;

}