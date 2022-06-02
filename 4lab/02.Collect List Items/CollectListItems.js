function extractText() {

    let listItems = Array.from(document.querySelectorAll("ul#items li"));
    let resultArr = [];

    for (let el of listItems) {
        resultArr.push(el.textContent);
    }

    let resultField = document.getElementById("result");
    resultField.textContent = resultArr.join("\n");
    
}