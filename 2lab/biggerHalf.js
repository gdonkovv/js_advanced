function biggerHalf(input) {

    input.sort((a, b) => a - b);
    let result = [];

    let startIndex = Math.floor(input.length / 2);

    for (let i = startIndex; i < input.length; i++) {
        result.push(input[i]);
    }

    return result;

}
biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);