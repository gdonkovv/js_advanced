function add(n) {

    const sum = n;

    return function adding(num) {
        return sum + num;
    }

}


let add5 = add(5);
console.log(add5(2));
console.log(add5(3));