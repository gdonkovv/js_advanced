function lockedProfile() {
    let profiles = Array.from(document.getElementsByClassName("profile"));
    for (let profile of profiles) {
        profile.children[10].addEventListener("click", showMore);
    }

    function showMore(event) {
        let button = event.target;
        let item = button.parentElement;
        let unlock = item.children[4].checked;

        if (unlock) {
            if (button.textContent === "Show more") {
                item.children[9].style.display = "block";
                button.textContent = "Hide it";
            } else if (button.textContent === "Hide it") {
                item.children[9].style.display = "none";
                button.textContent = "Show more";
            }

        }
    }
}