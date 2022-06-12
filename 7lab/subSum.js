function subSum(arr, start, end) {

    if (arr.length === 0) {
        return 0;
    } else if (arr[0] === undefined) {
        return NaN;
    }
    if (start < 0) {
        start = 0;
    }
    if (end > arr.length - 1) {
        end = arr.length - 1;
    }

    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += Number(arr[i]);
    }

    return sum;

}
console.log(subSum([], 1, 2));

