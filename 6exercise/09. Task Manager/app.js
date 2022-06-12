function solve() {
    let taskTitle = document.getElementById("task");
    let taskDescription = document.getElementById("description");
    let taskDueDate = document.getElementById("date");

    let buttonAdd = document.getElementById("add");
    buttonAdd.addEventListener("click", add);

    let allSections = Array.from(document.querySelectorAll("section"));
    let openSec = allSections[1];
    let sectInProgress = allSections[2];
    let complSec = allSections[3];

    function add(event) {

        event.preventDefault();
        if (taskTitle.value !== "" && taskDescription.value !== "" && taskDueDate.value !== "") {
            let artElement = document.createElement("article");

            let title = document.createElement("h3");
            title.textContent = taskTitle.value;
            let description = document.createElement("p");
            description.textContent = "Description: " + taskDescription.value;
            let dueDate = document.createElement("p");
            dueDate.textContent = "Due Date: " + taskDueDate.value;

            let buttonsDiv = document.createElement("div");
            buttonsDiv.className = "flex";
            let buttonStart = document.createElement("button");
            buttonStart.className = "green";
            buttonStart.textContent = "Start";
            buttonStart.addEventListener("click", startTask);
            let buttonDelete = document.createElement("button");
            buttonDelete.className = "red";
            buttonDelete.textContent = "Delete";
            buttonDelete.addEventListener("click", deleteTask);

            buttonsDiv.appendChild(buttonStart);
            buttonsDiv.appendChild(buttonDelete);

            artElement.appendChild(title);
            artElement.appendChild(description);
            artElement.appendChild(dueDate);
            artElement.appendChild(buttonsDiv);

            openSec.children[1].appendChild(artElement);

            taskTitle.value = "";
            taskDescription.value = "";
            taskDueDate.value = "";
        }
    }


    function deleteTask(event) {
        let button = event.target;
        let div = button.parentElement;
        let art = div.parentElement;
        let divParent = art.parentElement;

        divParent.removeChild(art);
    }

    function startTask(event) {
        let button = event.target;
        let div = button.parentElement;
        let art = div.parentElement;
        let divParent = art.parentElement;

        div.removeChild(button);
        divParent.removeChild(art);

        let finButton = document.createElement("button");
        finButton.className = "orange";
        finButton.addEventListener("click", finishTask);
        finButton.textContent = "Finish";
        div.appendChild(finButton);

        sectInProgress.children[1].appendChild(art);
    }

    function finishTask(event) {
        let button = event.target;
        let div = button.parentElement;
        let art = div.parentElement;
        let divParent = art.parentElement;

        divParent.removeChild(art);
        art.removeChild(div);

        complSec.children[1].appendChild(art);
    }
}



