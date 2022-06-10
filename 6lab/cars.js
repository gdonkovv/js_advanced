function cars(input) {

    let collection = {};

    for (let line of input) {
        let tokens = line.split(" ");
        let command = tokens[0];
        if (command === "create") {
            let name = tokens[1];
            let secondCommand = tokens[2];
            let parent = tokens[3];
            let parentObj = collection[parent];
            create(name,secondCommand,parentObj);
        } else if (command === "set") {
            let name = tokens[1];
            let key = tokens[2];
            let value = tokens[3];
            set(name, key, value);
        } else {
            let name = tokens[1];
            print(name);
        }
    }

    function create(name, secondCommand, parent) {
        if (secondCommand === "inherit") {
            collection[name] = Object.create(parent);
        } else {
            collection[name] = {};
        }
    }

    function set(name, key, value) {
        let currObj = collection[name];
        currObj[key] = value;
    }

    function print(name) {
        let currObj = collection[name];
        let result = [];

        for (let key of Object.keys(currObj)) {
            result.push(`${key}:${currObj[key]}`);
        }
        console.log(result.join(","));
    }


}
cars([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);