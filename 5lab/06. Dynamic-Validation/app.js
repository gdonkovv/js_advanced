function validate() {
    let inputField = document.getElementById("email");
    inputField.addEventListener("change", OnChange);

    function OnChange(event) {
        let email = event.target.value;
        let pattern = /[a-z]+\@[a-z]+\.[a-z]+/;
        if (pattern.exec(email) === null) {
            inputField.classList.add("error");
        } else {
            inputField.classList.remove("error");
        }
    }
}