function fibonacci() {

    // 1 1 2 3 5 8 13 21

    let nums = [0,1];

    return function nextNum() {

        let next = nums[nums.length - 2] + nums[nums.length - 1];
        let curr = nums[nums.length - 1];

        nums.push(next);

        return curr;

    }

}

let fib = fibonacci();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13