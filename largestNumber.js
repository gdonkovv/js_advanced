function largestNumber(num1, num2, num3) {

    let largest = num1;
    if (largest < num2) {
        largest = num2;
    }
    if (largest < num3){
        largest = num3;
    }

    console.log(`The largest number is ${largest}.`);

}
largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);