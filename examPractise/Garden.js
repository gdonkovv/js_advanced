class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable >= spaceRequired) {
            let plant = {
                plantName,
                spaceRequired,
                ripe: false,
                quantity: 0
            };
            this.plants.push(plant);
            this.spaceAvailable -= spaceRequired;
            return `The ${plantName} has been successfully planted in the garden.`;
        } else {
            throw new Error("Not enough space in the garden.");
        }
    }

    ripenPlant(plantName, quantity) {
        let currPlant = this.plants.filter(x => x.plantName === plantName)[0];
        let index = this.plants.indexOf(currPlant);

        if (currPlant === undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (this.plants[index].ripe === true) {
            throw new Error(`The ${plantName} is already ripe.`);
        }
        if (quantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        }

        this.plants[index].ripe = true;
        this.plants[index].quantity += quantity;
        if (quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`;
        }

    }

    harvestPlant(plantName) {
        let currPlant = this.plants.filter(x => x.plantName === plantName)[0];
        if (currPlant === undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (currPlant.ripe === false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }
        let index = this.plants.indexOf(currPlant);
        this.plants.splice(index, 1);
        this.storage.push({
            plantName: currPlant.plantName,
            quantity: currPlant.quantity
        });
        this.spaceAvailable += currPlant.spaceRequired;
        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
        let result = `The garden has ${this.spaceAvailable} free space left.\n`;
        let plantNames = this.plants.map(x => x.plantName).sort((a, b) => a.localeCompare(b));
        result += "Plants in the garden: " + plantNames.join(", ") + "\n";

        if (this.storage.length === 0) {
            result += "Plants in storage: The storage is empty.";
        } else {
            let storagePlants = this.storage.map(x => `${x.plantName} (${x.quantity})`);
            result += "Plants in storage: " + storagePlants.join(", ");
        }
        return result;
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());





