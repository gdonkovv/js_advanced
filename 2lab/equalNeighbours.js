function equalNeighbours(input) {

    let pairs = 0;
    for (let i = 0; i < input.length - 1; i++) {

        let currArr = input[i];
        let nextArr = input[i + 1];

        for (let j = 0; j < currArr.length; j++) {
            if (currArr[j] === nextArr[j]) {
                pairs++;
            }
        }
    }

    for (let i = 0; i < input.length; i++) {

        let currArr = input[i];
        for (let j = 0; j < currArr.length - 1; j++) {
            if (currArr[j] === currArr[j + 1]) {
                pairs++;
            }
        }

    }

    console.log(pairs);

}
equalNeighbours([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]);
equalNeighbours([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]);