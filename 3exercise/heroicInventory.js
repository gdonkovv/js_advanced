function heroicInventory(input) {

    let result = [];
    for (let line of input) {
        let tokens = line.split(" / ");
        let name = tokens[0];
        let level = Number(tokens[1]);
        if (tokens[2]) {
            let items = tokens[2].split(", ");
            result.push({
                name,
                level,
                items
            });
        } else {
            result.push({
                name,
                level,
                items: []
            });
        }


    }
    let newResult = JSON.stringify(result);
    return newResult;
}
heroicInventory(['Isacc / 25 / Apple, GravityGun', 
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);