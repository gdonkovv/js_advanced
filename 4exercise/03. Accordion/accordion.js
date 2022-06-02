function toggle() {
    let extraText = document.querySelector("#extra");
    let button = document.querySelector(".button");

    if (extraText.style.display === "none" || extraText.style.display === "") {
        extraText.style.display = "block";
        button.textContent = "Less";
    } else {
        extraText.style.display = "none";
        button.textContent = "More";
    }
}