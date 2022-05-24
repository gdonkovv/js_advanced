function ticTakToe(input) {

    let dashboard = [[false, false, false],
    [false, false, false],
    [false, false, false]];

    let last = "";
    let gameWon = false;


    for (let i = 0; i < input.length; i++) {

        let tokens = input[i].split(" ");
        let rowIndex = Number(tokens[0]);
        let colIndex = Number(tokens[1]);

        if (dashboard[rowIndex][colIndex] !== false) {
            console.log("This place is already taken. Please choose another!");
        } else {
            if (last !== "X") {
                last = "X";
            } else if (last !== "O") {
                last = "O";
            }
            dashboard[rowIndex][colIndex] = last;
        }

        // function to check if game is won
        let check = checkIfGameWon(dashboard);
        gameWon = check[0];

        // function to check if dashboard is filled
        if (checkIfDashboardIsFilled(dashboard) && gameWon === false) {
            console.log("The game ended! Nobody wins :(");
            break;
        }

        if (gameWon === true) {
            console.log(`Player ${check[1]} wins!`);
            break;
        }

    }

    for (let line of dashboard) {
        console.log(line.join("\t"));
    }


    function checkIfDashboardIsFilled(arr) {
        let isFilled = true;
        for (let row of arr) {
            if (row.includes(false)) {
                isFilled = false;
                return false;
            }
        }
        return true;
    }




    function checkIfGameWon(arr) {
        // check by rows
        for (let row of arr) {
            let result = row.join("");
            if (result === "XXX" || result === "OOO") {
                return [true, result[0]];
            }
        }

        // check by columns

        for (let i = 0; i < arr.length; i++) {
            let result = "";
            for (let j = 0; j < arr.length; j++) {
                let row = arr[j];
                result += row[i];
            }
            if (result === "XXX" || result === "OOO") {
                return [true, result[0]];
            }
        }

        // check by diagonals
        // - main diagonal
        let resultMain = "";
        for (let i = 0; i < arr.length; i++) {
            let row = arr[i];
            resultMain += row[i];
        }
        if (resultMain === "XXX" || resultMain === "OOO") {
            return [true, resultMain[0]];
        }

        // - secondary diagonal
        let resultSec = "";
        let index = 2;
        for (let j = 0; j < arr.length; j++) {
            let row = arr[j];
            resultSec += row[index];
            index = index - 1;
        }
        if (resultSec === "XXX" || resultSec === "OOO") {
            return [true, resultSec[0]];
        }

        //default
        return [false];
    }

}
ticTakToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]);