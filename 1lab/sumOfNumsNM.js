function sumOfNumsNM(n, m) {

    n = Number(n);
    m = Number(m);

    let sum = 0;

    for(let i = n; i <= m; i++){
        sum += i;
    }
    return sum;
}
sumOfNumsNM('1', '5');
sumOfNumsNM('-8', '20');