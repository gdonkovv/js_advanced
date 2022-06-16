function validate() {
    let inputField = document.getElementById("email");

    inputField.addEventListener("change", check);

    function check() {
        let pattern = /^[a-z]+\@[a-z]+\.[a-z]+$/m;
        let match = pattern.test(inputField.value);
        if(match === true){
            inputField.classList.remove("error");
        } else {
            inputField.classList.add("error");
        }
    }
}