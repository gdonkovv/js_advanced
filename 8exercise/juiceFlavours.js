function juiceFlavours(input) {

    let juices = {};
    let bottles = {};

    for (let line of input) {
        let tokens = line.split(" => ");
        let juiceName = tokens[0];
        let juiceQuantity = Number(tokens[1]);

        if (juices.hasOwnProperty(juiceName)) {
            juices[juiceName] += juiceQuantity;
        } else {
            juices[juiceName] = juiceQuantity;
        }

        while (juices[juiceName] >= 1000) {

            if (bottles.hasOwnProperty(juiceName)) {
                bottles[juiceName]++;
            } else {
                bottles[juiceName] = 1;
            }
            juices[juiceName] -= 1000;
        }


    }
    for (let key of Object.keys(bottles)) {
        console.log(`${key} => ${bottles[key]}`);
    }

}
juiceFlavours([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);