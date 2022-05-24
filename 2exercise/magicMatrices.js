function magicMatrices(input) {

    let isMagical = true;
    let sum = 0;
    for (let j = 0; j < input[0].length; j++) {
        sum += input[0][j];
    }

    for (let i = 1; i < input.length; i++) {
        let currRow = input[i];
        let currSum = 0;
        for (let j = 0; j < currRow.length; j++) {
            currSum += currRow[j];
        }
        if (currSum !== sum) {
            isMagical = false;
        }
    }

    if (isMagical === false) {
        return isMagical;
    } else {
        for (let i = 0; i < input.length; i++) {
            let currSum = 0;
            for (let row of input) {
                currSum += row[i];
            }
            if (currSum !== sum) {
                isMagical = false;
            }
        }
    }
    return isMagical;
}
magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);
magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);