function orbit(input) {
    let width = Number(input[0]);
    let height = Number(input[1]);
    let y = Number(input[2]);
    let x = Number(input[3]);

    let matrix = [];
    for (let i = 0; i < height; i++) {
        matrix[i] = [];
        for (let j = 0; j < width; j++) {
            matrix[i][j] = 0;
        }
    }

    matrix[y][x] = 1;

    for (let i = 0; i < matrix.length; i++) {
        let currRow = matrix[i];
        if (currRow.includes(1)) {
            let starIndex = currRow.indexOf(1);
            for (let j = 0; j < currRow.length; j++) {
                let diff = Math.abs(starIndex - j) + 1;
                currRow[j] = diff;
            }
        } else {
            for (let k = 0; k < currRow.length; k++) {
                let diffInHeight = Math.abs(i - y);
                let diffInWidth = Math.abs(k - x);

                if (diffInHeight > diffInWidth) {
                    currRow[k] = diffInHeight + 1;
                } else {
                    currRow[k] = diffInWidth + 1;
                }

            }
        }
    }

    for (let row of matrix) {
        console.log(row.join(" "));
    }


}
orbit([4, 4, 0, 0]);