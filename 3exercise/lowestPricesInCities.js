function lowestPricesInCities(input) {

    let result = {};
    for (let line of input) {
        let tokens = line.split(" | ");
        let townName = tokens[0];
        let productName = tokens[1];
        let productPrice = Number(tokens[2]);

        if (result.hasOwnProperty(productName) === false) {
            result[productName] = { productPrice, townName };
        } else {
            if (result[productName].productPrice > productPrice) {
                result[productName].productPrice = productPrice;
                result[productName].townName = townName;
            }
        }

    }

    for (let key of Object.keys(result)) {
        console.log(`${key} -> ${result[key].productPrice} (${result[key].townName})`);
    }

}
lowestPricesInCities([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);