function cars(input) {

    let collection = {};

    for (let line of input) {
        let tokens = line.split(" ");
        let command = tokens[0];
        if (command === "create") {
            let name = tokens[1];
            let secondCommand = tokens[2];
            let parent = tokens[3];
            if (secondCommand !== "inherit") {
                create(name);
            } else {
                let inheritor = create(name);
                inheritor(name, parent);
            }
        } else if (command === "set") {
            let name = tokens[1];
            let key = tokens[2];
            let value = tokens[3];
            set(name, key, value);
            if (collection[name].hasOwnProperty("copyProp")) {
                collection[name]["copyProp"](key,value);
            }
        } else {
            let name = tokens[1];
            print(name);
        }
    }

    function create(name) {
        collection[name] = {};

        return function inherit(newName, parentName) {
            collection[parentName]["copyProp"] = function (key, value) {
                collection[newName][key] = value;
            }
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
            if(typeof currObj[key] !== "function"){
                result.push(`${key}:${currObj[key]}`);
            }
            
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