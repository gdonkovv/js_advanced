function townPopulation(input) {

    let result = {};

    for (let line of input) {
        let tokens = line.split(" <-> ");
        let name = tokens[0];
        let population = Number(tokens[1]);

        if (result[name]) {
            result[name] += population;
        } else {
            result[name] = population;
        }
    }

    for (let key in result) {
        console.log(`${key} : ${result[key]}`);
    }

}
townPopulation(
    ['Sofia <-> 1200000',
        'Montana <-> 20000',
        'New York <-> 10000000',
        'Washington <-> 2345000',
        'Las Vegas <-> 1000000']);