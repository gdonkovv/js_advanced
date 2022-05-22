function sameNums(input) {

    let numAsStr = String(input);
    let sum = 0;
    let isSame = true;
    let first = numAsStr[0];

    for (let ch of numAsStr) {
        sum += Number(ch);
        if(ch !== first){
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sum);

}
sameNums(2222222);
sameNums(1234);