function townsToJSON(input) {

    let result = [];

    for (let i = 1; i < input.length; i++) {
        let line = input[i];
        let tokens = line.split("|").map(x => x.trim());
        tokens.shift();
        tokens.pop();

        let Town = tokens[0];
        let Latitude = Number(tokens[1]).toFixed(2);
        let Longitude = Number(tokens[2]).toFixed(2);

        result.push({
            Town,
            Latitude: Number(Latitude),
            Longitude: Number(Longitude)
        })
    }

    return JSON.stringify(result);

}
townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);