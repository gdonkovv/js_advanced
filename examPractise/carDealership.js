class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (model === "" || (horsepower < 0 || Number.isInteger(horsepower) === false) || price < 0 || mileage < 0) {
            throw new Error("Invalid input!");
        }
        let car = {
            model,
            horsepower,
            price,
            mileage
        };
        this.availableCars.push(car);
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        let car = this.availableCars.filter(x => x.model === model)[0];
        let index = this.availableCars.indexOf(car);
        if (car === undefined) {
            throw new Error(`${model} was not found!`);
        }

        let diff = Math.abs(car.mileage - desiredMileage);
        let soldPrice = car.price;

        if (car.mileage <= desiredMileage) {
            // price stays the same
        } else if (diff <= 40000) {
            // price gets deducted by 5 %
            soldPrice = soldPrice * 0.95;
        } else {
            // price gets deducted by 10 %
            soldPrice = soldPrice * 0.9;
        }

        this.availableCars.splice(index, 1);
        this.soldCars.push({
            model: car.model,
            horsepower: car.horsepower,
            soldPrice: soldPrice
        });
        this.totalIncome += soldPrice;
        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    }

    currentCar() {
        let result = "";
        if (this.availableCars.length === 0) {
            result = "There are no available cars";
        } else {
            result = "-Available cars:\n";
            let cars = this.availableCars.map(x => `---${x.model} - ${x.horsepower} HP - ${x.mileage.toFixed(2)} km - ${x.price.toFixed(2)}$`);
            result += cars.join("\n");
        }
        return result;
    }

    salesReport(criteria) {
        if (criteria !== "horsepower" && criteria !== "model") {
            throw new Error("Invalid criteria!");
        }
        let sorted;

        if (criteria === "horsepower") {
            sorted = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        } else if (criteria === "model") {
            sorted = this.soldCars.sort((a,b) => (a.model).localeCompare(b.model));
        }

        let result = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n`;
        result += `-${this.soldCars.length} cars sold:\n`;

        let cars = sorted.map(x => `---${x.model} - ${x.horsepower} HP - ${x.soldPrice.toFixed(2)}$`);
        result += cars.join("\n");

        return result;
    }
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));
