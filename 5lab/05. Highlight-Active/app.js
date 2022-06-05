function focused() {
    Array.from(document.querySelectorAll("input"))
        .forEach(x => {
            x.addEventListener("focus", focusFunc);
            x.addEventListener("blur", blurFunc);
        });

    function focusFunc(event) {
        let element = event.target;
        element.parentElement.classList.add("focused");
    }

    function blurFunc(event) {
        let element = event.target;
        element.parentElement.classList.remove("focused");
    }
}