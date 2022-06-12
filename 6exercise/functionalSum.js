function functionalSum(num) {

    function inner(n) {
        num += n;
        return inner;
    }

    inner.toString = function () {
        return num;
    }

    return inner;
}
console.log(functionalSum(1).toString());
console.log(functionalSum(1)(6)(-3).toString());