function addAndRemoveElements(input) {

    let result = [];
    let num = 0;

    for (let command of input) {
        num++;
        if (command === "add") {
            result.push(num);
        } else if (command === "remove") {
            result.pop(result.length - 1);
        }
    }

    if (result.length < 1) {
        console.log("Empty");
    } else {
        console.log(result.join("\n"));
    }

}
//addAndRemoveElements(['add', 'add', 'add', 'add']);
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);
//addAndRemoveElements(['remove', 'remove', 'remove']);