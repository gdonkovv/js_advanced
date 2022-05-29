function fromJSONToHTMLTable(input) {

    function escapeHTML(value) {
        return value
          .toString()
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;');
      }

    let arr = JSON.parse(input);
    console.log("<table>");
    let headers = (Object.keys(arr[0])).slice().map(x => {
        let newX = "";
        for (let char of x) {
            newX += escapeHTML(char);
        }
        return `<th>${newX}</th>`;
    });
    let headersText = "   <tr>" + headers.join("") + "</tr>";
    console.log(headersText);

    for (let item of arr) {
        let result = "";
        for (let key of Object.keys(item)) {
            let newItem = "";
            for (let char of String(item[key])) {
                newItem += escapeHTML(char);
            }
            result += `<td>${newItem}</td>`;
        }
        console.log("   <tr>" + result + "</tr>");
    }
    console.log("</table>");
}
fromJSONToHTMLTable(`[{"Name<":"Stamat","Score":5.5},{"Name":"Rumen","Score":6}]`);


function fromJSONToHTMLTable2(input) {
    //Write your code here
    let finalResult = "";
    let arr = JSON.parse(input[0]);
    finalResult += "<table>";
    let headers = (Object.keys(arr[0])).slice().map(x => `<th>${encodeURI(x.trim())}</th>`);
    let headersText = "   <tr>" + headers.join("") + "</tr>";
    finalResult += "\n" + headersText;

    for (let item of arr) {
        let result = "";
        for (let key of Object.keys(item)) {
            result += `<td>${encodeURI(String(item[key]).trim())}</td>`;
        }
        finalResult += "\n" + "   <tr>" + result + "</tr>";
    }
    finalResult += "\n</table>";
    return finalResult;
}
console.log(fromJSONToHTMLTable2([`[{"Name":"Stamat","Score":5.5},{"Name":"Rumen","Score":6}]`]));