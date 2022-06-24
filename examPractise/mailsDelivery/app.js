function solve() {

    let btnSend = document.getElementById("add");
    let btnReset = document.getElementById("reset");

    btnSend.addEventListener("click", addToList);
    btnReset.addEventListener("click", clearInputFields);

    function addToList(event) {
        event.preventDefault();
        let targetUl = document.querySelector("div.list-mails ul");
        let input = {
            recipient: document.getElementById("recipientName"),
            title: document.getElementById("title"),
            message: document.getElementById("message")
        };
        if (input.recipient.value !== "" && input.title.value !== "" && input.message.value !== "") {
            let parentLi = document.createElement("li");
            let title = document.createElement("h4");
            title.textContent = "Title: " + input.title.value;
            parentLi.appendChild(title);
            let recipient = document.createElement("h4");
            recipient.textContent = "Recipient Name: " + input.recipient.value;
            parentLi.appendChild(recipient);
            let message = document.createElement("span");
            message.textContent = input.message.value;
            parentLi.appendChild(message);

            let div = document.createElement("div");
            div.setAttribute("id", "list-action");
            let btnSendForm = document.createElement("button");
            btnSendForm.setAttribute("type", "submit");
            btnSendForm.setAttribute("id", "send");
            btnSendForm.textContent = "Send";
            btnSendForm.addEventListener("click", sendToSentMails);
            div.appendChild(btnSendForm);
            let btnDeleteForm = document.createElement("button");
            btnDeleteForm.setAttribute("type", "submit");
            btnDeleteForm.setAttribute("id", "delete");
            btnDeleteForm.textContent = "Delete";
            btnDeleteForm.addEventListener("click", deleteRecord);
            div.appendChild(btnDeleteForm);

            parentLi.appendChild(div);
            targetUl.appendChild(parentLi);

            input.recipient.value = "";
            input.title.value = "";
            input.message.value = "";
        }

    }

    function clearInputFields(event) {
        event.preventDefault();
        let input = {
            recipient: document.getElementById("recipientName"),
            title: document.getElementById("title"),
            message: document.getElementById("message")
        };

        input.recipient.value = "";
        input.title.value = "";
        input.message.value = "";
    }

    function sendToSentMails(event) {
        let button = event.target;
        let parentDiv = button.parentElement;
        let parentLi = parentDiv.parentElement;
        let targetUl = document.querySelector("div.sent-mails ul");

        let title = parentLi.children[0].textContent.split(": ")[1];
        let recipient = parentLi.children[1].textContent.split(": ")[1];
        parentLi.remove();

        let newLi = document.createElement("li");
        let spanRec = document.createElement("span");
        spanRec.textContent = "To: " + recipient + " ";
        newLi.appendChild(spanRec);

        let spanTit = document.createElement("span");
        spanTit.textContent = "Title: " + title;
        newLi.appendChild(spanTit);

        let newDiv = document.createElement("div");
        newDiv.className = "btn";
        let btnDel = document.createElement("button");
        btnDel.className = "delete";
        btnDel.setAttribute("type", "submit");
        btnDel.textContent = "Delete";
        btnDel.addEventListener("click", deleteRecord);
        newDiv.appendChild(btnDel);

        newLi.appendChild(newDiv);
        targetUl.appendChild(newLi);
    }

    function deleteRecord(event) {
        let button = event.target;
        let parentDiv = button.parentElement;
        let parentLi = parentDiv.parentElement;
        let targetUl = document.querySelector("div.trash ul");

        let title = parentLi.children[0].textContent.split(": ")[1];
        let recipient = parentLi.children[1].textContent.split(": ")[1];
        parentLi.remove();

        let newLi = document.createElement("li");
        let spanRec = document.createElement("span");
        spanRec.textContent = "To: " + recipient + " ";
        newLi.appendChild(spanRec);
        let spanTit = document.createElement("span");
        spanTit.textContent = "Title: " + title;
        newLi.appendChild(spanTit);

        targetUl.appendChild(newLi);
    }

}
solve()