const rentCar = {
    searchCar(shop, model) {
        let findModel = [];
        if (Array.isArray(shop) && typeof model == 'string') {
            for (let i = 0; i < shop.length; i++) {
                if (model == shop[i]) {
                    findModel.push(shop[i]);
                }
            }
            if (findModel.length !== 0) {
                return `There is ${findModel.length} car of model ${model} in the catalog!`;
            } else {
                throw new Error('There are no such models in the catalog!')
            }
        } else {
            throw new Error('Invalid input!')
        }
    },
    calculatePriceOfCar(model, days) {
        let catalogue = {
            Volkswagen: 20,
            Audi: 36,
            Toyota: 40,
            BMW: 45,
            Mercedes: 50
        };

        if (typeof model == 'string' && Number.isInteger(days)) {
            if (catalogue.hasOwnProperty(model)) {
                let cost = catalogue[model] * days;
                return `You choose ${model} and it will cost $${cost}!`
            } else {
                throw new Error('No such model in the catalog!')
            }
        } else {
            throw new Error('Invalid input!')
        }
    },
    checkBudget(costPerDay, days, budget) {
        if (!Number.isInteger(costPerDay) || !Number.isInteger(days) || !Number.isInteger(budget)) {
            throw new Error('Invalid input!');
        } else {
            let cost = costPerDay * days;
            if (cost <= budget) {
                return `You rent a car!`
            } else {
                return 'You need a bigger budget!'
            }
        }
    }
}

describe("Tests rentCar", function () {
    describe("Test group 1 - searchCar", function () {
        it("Test 1", function () {
            if (rentCar.searchCar(["Volkswagen", "BMW", "Audi", "Audi"], "Audi") !==
                `There is 2 car of model Audi in the catalog!`) {
                throw new Error;
            }
        });
        it("Test 2", function () {
            let result;
            try {
                rentCar.searchCar(["Volkswagen", "BMW", "Audi", "Audi"], 4);
            } catch (err) {
                if (err.message === "Invalid input!") {
                    result = "ok";
                }
            }
            if (result !== "ok") {
                throw new Error;
            }
        });
        it("Test 3", function () {
            let result;
            try {
                rentCar.searchCar({ carName: "Audi" }, "Audi");
            } catch (err) {
                if (err.message === "Invalid input!") {
                    result = "ok";
                }
            }
            if (result !== "ok") {
                throw new Error;
            }
        });
        it("Test 4", function () {
            let result;
            try {
                rentCar.searchCar(["Volkswagen", "Audi", "Audi"], "BMW");
            } catch (err) {
                if (err.message === 'There are no such models in the catalog!') {
                    result = "ok";
                }
            }
            if (result !== "ok") {
                throw new Error;
            }
        });
    });
    describe("Test group 2 - calculatePriceOfCar", function () {
        it("Test 1", function () {
            let result;
            try {
                rentCar.calculatePriceOfCar("Audi", "abc");
            } catch (err) {
                if (err.message === "Invalid input!") {
                    result = "ok";
                }
            }
            if (result !== "ok") {
                throw new Error;
            }
        });
        it("Test 2", function () {
            let result;
            try {
                rentCar.calculatePriceOfCar(14, 5);
            } catch (err) {
                if (err.message === "Invalid input!") {
                    result = "ok";
                }
            }
            if (result !== "ok") {
                throw new Error;
            }
        });
        it("Test 3", function () {
            if (rentCar.calculatePriceOfCar("Audi", 5) !== `You choose Audi and it will cost $180!`) {
                throw new Error;
            }
        });
        it("Test 4", function () {
            let result;
            try {
                rentCar.calculatePriceOfCar("Jeep", 5);
            } catch (err) {
                if (err.message === 'No such model in the catalog!') {
                    result = "ok";
                }
            }
            if (result !== "ok") {
                throw new Error;
            }
        });
    });
    describe("Test group 3 - checkBudget", function () {
        it("Test 1", function () {
            let result;
            try {
                rentCar.checkBudget("a", 4, 120);
            } catch (err) {
                if (err.message === "Invalid input!") {
                    result = "ok";
                }
            }
            if (result !== "ok") {
                throw new Error;
            }
        });
        it("Test 2", function () {
            let result;
            try {
                rentCar.checkBudget(2, "b", 120);
            } catch (err) {
                if (err.message === "Invalid input!") {
                    result = "ok";
                }
            }
            if (result !== "ok") {
                throw new Error;
            }
        });
        it("Test 3", function () {
            let result;
            try {
                rentCar.checkBudget(2, 4, "c");
            } catch (err) {
                if (err.message === "Invalid input!") {
                    result = "ok";
                }
            }
            if (result !== "ok") {
                throw new Error;
            }
        });
        it("Test 4", function () {
            if (rentCar.checkBudget(4, 3, 12) !== `You rent a car!`) {
                throw new Error;
            }
        });
        it("Test 5", function () {
            if (rentCar.checkBudget(4, 3, 10) !== 'You need a bigger budget!') {
                throw new Error;
            }
        });
    });
});
