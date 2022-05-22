function processOddPositions(input) {

    let result = [];

    for (let i = 1; i < input.length; i += 2) {
        result.unshift(input[i] * 2);
    }
    return result.join(" ");

}
processOddPositions([10, 15, 20, 25]);
processOddPositions([3, 0, 10, 4, 7, 3]);