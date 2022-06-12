function sortArr(arr, order) {


    if (order === "asc") {
        asc();
    } else if (order === "desc") {
        desc();
    }
    return arr;

    function asc() {
        arr.sort((a, b) => a - b);
    }
    function desc() {
        arr.sort((a, b) => b - a);
    }

}
console.log(sortArr([14, 7, 17, 6, 8], 'asc'));
console.log(sortArr([14, 7, 17, 6, 8], 'desc'));