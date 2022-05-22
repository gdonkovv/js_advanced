function biggestElement(input) {
    let biggest = input[0][0];
    for (let row of input) {
        for (let col of row) {
            if (col > biggest) {
                biggest = col;
            }
        }
    }
    console.log(biggest);
}
biggestElement([[20, 50, 10], [8, 33, 145]]);
biggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);