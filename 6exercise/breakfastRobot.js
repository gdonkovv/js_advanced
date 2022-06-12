function breakfastRobot() {

    let storage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }

    return function commandsHandler(string) {

        let tokens = string.split(" ");
        let command = tokens[0];

        if (command === "restock") {
            let product = tokens[1];
            let value = Number(tokens[2]);
            return restock(product, value);
        } else if (command === "prepare") {
            let recipe = tokens[1];
            let quantity = Number(tokens[2]);
            return prepare(recipe, quantity);
        } else {
            return report();
        }



        function restock(product, value) {
            storage[product] += value;
            return "Success";
        }

        function prepare(recipe, quantity) {
            let currRecipe = recipes[recipe];
            let result = "Success";

            for (let i = 0; i < quantity; i++) {
                // for each product of the recipe -> check if enough in storage
                for (let key of Object.keys(currRecipe)) {
                    let pr = key;
                    let neededStock = currRecipe[key];

                    if (storage[pr] >= neededStock) {
                        storage[pr] -= neededStock;
                    } else {
                        result = `Error: not enough ${pr} in stock`;
                        break;
                    }
                }
            }
            return result;
        }


        function report() {
            return(`protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`);
        }
    }

}



let manager = breakfastRobot();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));

