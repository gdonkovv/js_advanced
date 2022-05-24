function diagonalAttack(input) {

    //parse input of strings into matrix of numbers
    for (let i = 0; i < input.length; i++) {
        let nums = input[i].split(" ").map(Number);
        input[i] = nums;
    }
    //calculate the sums of the two main diagonals
    let sumMain1 = 0;
    for (let i = 0; i < input.length; i++) {
        let row = input[i];
        sumMain1 += row[i];
    }

    let sumMain2 = 0;
    let index = input.length - 1;
    for (let j = 0; j < input.length; j++) {
        let row = input[j];
        sumMain2 += row[index];
        index--;
    }
    //if both diagonals have equal sums
    //  - all numbers that are not part of the diagonals are replaced by the diagonal sum
    //  - else -> the initial input is printed

    if (sumMain1 !== sumMain2) {
        for (let row of input) {
            console.log(row.join(" "));
        }
    } else {

        //function to check if position is on diagonal
        for (let k = 0; k < input.length; k++) {
            let currRow = input[k];
            for (let l = 0; l < currRow.length; l++) {
                if (isOnDiagonal(k, l, input.length) === false) {
                    currRow[l] = sumMain1;
                }
            }
        }
        for (let line of input) {
            console.log(line.join(" "));
        }
    }


    function isOnDiagonal(rowIndex, colIndex, arrLength) {
        //check for main
        if (rowIndex === colIndex) {
            return true;
        }

        //check for secondary
        if (rowIndex === (arrLength - 1) - colIndex) {
            return true;
        }
        return false;
    }

}
diagonalAttack(
    ['5 3 12 3 1',
        '11 4 23 2 5',
        '101 12 3 21 10',
        '1 4 5 2 2',
        '5 22 33 11 1']);
// diagonalAttack(
//     ['1 1 1',
//         '1 1 1',
//         '1 1 0']);