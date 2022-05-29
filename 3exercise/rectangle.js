function rectangle(width, height, color) {

    let newColor = color[0].toUpperCase();
    for (let i = 1; i < color.length; i++) {
        newColor += color[i];
    }
    let result = {
        width,
        height,
        color: newColor,
        calcArea: function () {
            return this.width * this.height;
        }
    }

    return result;
}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());