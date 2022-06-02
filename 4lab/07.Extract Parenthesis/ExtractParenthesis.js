function extract(content) {
    let text = document.getElementById(content).textContent;
    let pattern = /\((?<value>[A-Za-z ]+)\)/g;

    let result = [];
    let match = pattern.exec(text);
    while (match !== null) {
        result.push(match.groups.value);
        match = pattern.exec(text);
    }
    return result.join("; ");
}