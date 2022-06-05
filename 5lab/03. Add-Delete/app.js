function addItem() {
    let list = document.getElementById("items");
    let text = document.getElementById("newItemText").value;

    let newItem = document.createElement("li");
    newItem.textContent = text;

    list.appendChild(newItem);
    document.getElementById("newItemText").value = "";

    let deleteLink = document.createElement("a");
    deleteLink.href = "#";
    deleteLink.textContent = "[Delete]";
    deleteLink.addEventListener("click", delFunc);
    newItem.appendChild(deleteLink);

    function delFunc() {
        list.removeChild(newItem);
    }

}