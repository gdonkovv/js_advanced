function addItem() {
    let text = document.getElementById("newItemText").value;
    let value = document.getElementById("newItemValue").value;

    let dropDown = document.querySelector("select");
    
    let option = document.createElement("option");
    option.textContent = text;
    option.value = value;

    dropDown.appendChild(option);

    document.getElementById("newItemText").value = "";
    document.getElementById("newItemValue").value = "";
}