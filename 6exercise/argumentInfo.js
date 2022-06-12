function argumentInfo(...arr) {
    let types = {};

    for (let argument of arr) {
        let type = typeof argument;
        console.log(`${type}: ${argument}`);

        if (types.hasOwnProperty(type)) {
            types[type]++;
        } else {
            types[type] = 1;
        }
    }

    let sorted = Object.entries(types).sort((a, b) => {
        return b[1] - a[1];
    });

    for (let type of sorted) {
        console.log(`${type[0]} = ${type[1]}`);
    }

}
argumentInfo('cat', 42, function () { console.log('Hello world!'); });
argumentInfo({ name: 'bob' }, 3.333, 9.999);