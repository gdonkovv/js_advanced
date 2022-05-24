function sortArrayBy2Criteria(input) {

    input.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    });
    console.log(input.join("\n"));
}
sortArrayBy2Criteria(['alpha', 'beta', 'gamma']);
sortArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);