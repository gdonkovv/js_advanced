function smallestTwoNums(input) {

    input.sort((a,b) => a-b);
    console.log(input[0], input[1]);

    // let smallest1 = input.shift();
    // let smallest2 = input.shift();

    // for (let num of input) {
    //     if (num < smallest1 && num !== smallest2) {
    //         smallest1 = num;
    //     } else if (num < smallest2 && num !== smallest1){
    //         smallest2 = num
    //     }
    // }
    // if(smallest1 < smallest2){
    //     console.log(smallest1, smallest2);
    // } else {
    //     console.log(smallest2, smallest1);
    // }

}
smallestTwoNums([30, 15, 50, 5]);
smallestTwoNums([3, 0, 10, 4, 7, 3]);