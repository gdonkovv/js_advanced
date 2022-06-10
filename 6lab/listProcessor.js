function listProcessor(input) {

    let collection = [];

    for (let line of input) {
        let tokens = line.split(" ");
        let command = tokens[0];
        let value = tokens[1];


        if (command === "add") {
            add(value);
        } else if (command === "remove") {
            remove(value);
        } else if (command === "print") {
            print(collection);
        }
    }

    function add(string) {
        collection.push(string);
    }

    function remove(string) {
        collection = collection.filter(x => x !== string);
    }

    function print(col) {
        console.log(col.join(","));
    }

}
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);