function createCalculator() {
    let value = 0;
    return {
        add: function (num) { value += Number(num); },
        subtract: function (num) { value -= Number(num); },
        get: function () { return value; }
    }
}

describe("Test group 1", () => {
    it("Test 1", () => {
        let object = createCalculator();
        if (object.add && object.subtract && object.get) {
            console.log("working");
        } else {
            throw new Error("not working");
        }
    });
    it("Test 2", () => {
        let object = createCalculator();
        value = 12;
        if (object.get() === 0) {
            console.log("working");
        } else if (object.get() === 12) {
            throw new Error("not working");
        }
    });
    it("Test 3", () => {
        let object = createCalculator();
        object.add(5);
        if (object.get() === 5) {
            console.log("working");
        } else {
            throw new Error("not working function add");
        }
    });
    it("Test 4", () => {
        let object = createCalculator();
        object.add("5");
        if (object.get() === 5) {
            console.log("working");
        } else {
            throw new Error("not working function add");
        }
    });
    it("Test 5", () => {
        let object = createCalculator();
        object.subtract(5);
        if (object.get() === -5) {
            console.log("working");
        } else {
            throw new Error("not working function add");
        }
    });
    it("Test 6", () => {
        let object = createCalculator();
        object.subtract("5");
        if (object.get() === -5) {
            console.log("working");
        } else {
            throw new Error("not working function add");
        }
    });
});