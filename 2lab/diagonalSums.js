function diagonalSums(input) {

    let sumMain = 0;
    let sumSec = 0;

    for (let i = 0; i < input.length; i++) {
        sumMain += input[i][i];
    }

    let rowNum = 0;

    for (let i = input.length - 1; i >= 0; i--) {
        sumSec += input [rowNum] [i];

        rowNum++;
    }
    console.log(sumMain, sumSec);
}
diagonalSums([
    [20, 40],
    [10, 60]]);
diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);