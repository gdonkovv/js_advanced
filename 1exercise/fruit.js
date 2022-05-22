function fruit(type, weightInGrams, pricePerKilo) {

    let weight = weightInGrams / 1000;
    let money = weight * pricePerKilo;

    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${type}.`);

}
fruit('orange', 2500, 1.80);