function colorize() {
    let rows = Array.from(document.querySelectorAll("tr"));
    rows.shift();
    for (let i = 0; i < rows.length; i += 2) {
        let row = rows[i];
        row.style.backgroundColor = "teal";
    }
}