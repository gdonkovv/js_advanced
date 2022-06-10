function areaAndVolumeCalc(areaFunc, volFunc, input) {

    let parsedInput = JSON.parse(input);

    let result = [];

    parsedInput.forEach(el => {
        let obj = {
            x: Number(el.x),
            y: Number(el.y),
            z: Number(el.z)
        };

        result.push({
            area: areaFunc.call(obj),
            volume: volFunc.call(obj)
        });
    });

    return result;

}

areaAndVolumeCalc(
    area,
    vol,
    `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`);


function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};
