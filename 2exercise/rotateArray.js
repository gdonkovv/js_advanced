function rotateArray(arr, num) {

    for (let i = 0; i < num; i++) {
        arr.unshift(arr.pop());
    }
    console.log(arr.join(" "));

}
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);