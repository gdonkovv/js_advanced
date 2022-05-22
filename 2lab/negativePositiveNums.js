function negativePositiveNums(input) {

    let result = [];
    for (let num of input) {
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }

    console.log(result.join("\n"));

}
negativePositiveNums([7, -2, 8, 9]);
negativePositiveNums([3, -2, 0, -1]);