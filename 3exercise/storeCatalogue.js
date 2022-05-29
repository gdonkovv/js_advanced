function storeCatalogue(input) {

    let catalogue = {};

    for (let line of input) {
        let tokens = line.split(" : ");
        let product = tokens[0];
        let price = Number(tokens[1]);
        let letter = product[0];

        if (catalogue.hasOwnProperty(letter) === false) {
            catalogue[letter] = {
                [product]: price
            }
        } else {
            catalogue[letter][product] = price;
        }
    }

    let sortedKeys = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));
    for (let key of sortedKeys) {
        console.log(key);
        let productsObj = catalogue[key];
        let sortedProducts = Object.entries(productsObj).sort((a, b) => a[0].localeCompare(b[0]));
        for (let product of sortedProducts) {
            console.log(`  ${product[0]}: ${product[1]}`);
        }
    }
}
storeCatalogue(['Banana : 2',
    "Rubic's Cube : 5",
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']);