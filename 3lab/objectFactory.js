const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};
const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    }
];

function factory(library, orders) {

    let result = [];

    for (let el of orders) {
        let currObj = {
            name: el.template.name
        }
        let funcs = el.parts;

        for (let func of funcs) {
            currObj[func] = library[func];
        }
        result.push(currObj);
    }

    return result;
}
const products = factory(library, orders);
console.log(products);  