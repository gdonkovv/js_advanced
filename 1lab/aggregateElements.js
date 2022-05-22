function aggregateElements(input) {

    let sum = 0;
    let sumInverse = 0;
    let concat = "";

    for (let el of input) {
        sum += el;
        sumInverse += 1 / el;
        concat += el;
    }
    console.log(sum);
    console.log(sumInverse);
    console.log(concat);

}
aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);