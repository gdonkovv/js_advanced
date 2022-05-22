function greatestCommonDevisor(num1, num2) {

    let bigger;
    let smaller;
    if (num1 > num2) {
        bigger = num1;
        smaller = num2;
    } else if (num1 < num2) {
        bigger = num2;
        smaller = num1;
    }

    let divisor = smaller;
    for (let i = smaller; i > 0; i--) {
        if (bigger % i === 0 && smaller % i === 0) {
            divisor = i;
            break;
        }
    }

    console.log(divisor);
}
greatestCommonDevisor(2154, 458);