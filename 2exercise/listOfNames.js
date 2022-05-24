function listOfNames(input) {
    input.sort((a,b) => a.localeCompare(b));
    input.forEach((x, i) => console.log(`${i+1}.${x}`));
}
listOfNames(["John", "Bob", "Christina", "Ema"]);