function autoEngineeringCompany(input) {

    let cars = {};


    for (let line of input) {
        let tokens = line.split(" | ");
        let carBrand = tokens[0];
        let carModel = tokens[1];
        let producedCars = Number(tokens[2]);

        if (cars.hasOwnProperty(carBrand)) {
            if (cars[carBrand].hasOwnProperty(carModel)) {
                cars[carBrand][carModel] += producedCars;
            } else {
                cars[carBrand][carModel] = producedCars;
            }
        } else {
            cars[carBrand] = {};
            cars[carBrand][carModel] = producedCars;
        }
    }

    for (let brand of Object.keys(cars)) {
        console.log(brand);
        for (let model of Object.keys(cars[brand])) {
            console.log(`###${model} -> ${cars[brand][model]}`);
        }
    }

}
autoEngineeringCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);