function generateReport() {
    let headers = Array.from(document.querySelectorAll("thead input"));
    let rows = Array.from(document.querySelectorAll("tbody tr"));
    let result = [];

    if (headers.length !== 0) {
        for (let i = 0; i < rows.length; i++) {
            let row = rows[i];
            let data = Array.from(row.children).map(x => x.textContent);

            let dataObj = {};

            for (let j = 0; j < headers.length; j++) {
                let header = headers[j];
                if (header.checked) {
                    dataObj[header.name] = data[j];
                }
            }

            result.push(dataObj);
        }
    }
    document.getElementById("output").textContent = JSON.stringify(result, undefined, 4);

}