function lastKNumbersSequence(n, k) {

    let result = [1];

    for (let i = 1; i < n; i++) {
        let startIndex = i - k;
        if (startIndex < 0) {
            startIndex = 0;
        }

        let currArr = result.slice(startIndex, i);
        let currSum = 0;
        for (let num of currArr) {
            currSum += num;
        }
        result.push(currSum);
    }

    return result;

}
lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);