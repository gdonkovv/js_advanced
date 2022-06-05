function deleteByEmail() {
    let inputText = document.querySelector("input").value;
    let table = document.querySelector("tbody");
    let items = Array.from(document.querySelectorAll("tbody tr"));
    let result = "Not found.";

    for (let item of items) {
        let data = item.children;
        let email = data[1].textContent;
        if (inputText === email) {
            table.removeChild(item);
            result = "Deleted.";
            break;
        }
    }

    document.getElementById("result").textContent = result;
}