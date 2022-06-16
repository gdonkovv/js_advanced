function isOddOrEven(string) {
    if (typeof (string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }
    return "odd";
}

describe("Test group", () => {
    it("Test 1", () => {
        if (isOddOrEven(123) !== undefined) {
            throw new Error;
        }
    });
    it("Test 2", () => {
        if (isOddOrEven("abc") !== "odd") {
            throw new Error;
        }
    });
    it("Test 3", () => {
        if (isOddOrEven("abcd") !== "even") {
            throw new Error;
        }
    });
});
