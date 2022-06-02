function editElement(el, text, replacer) {

    while (el.textContent.includes(text)) {
        el.textContent = el.textContent.replace(text, replacer);
    }

}