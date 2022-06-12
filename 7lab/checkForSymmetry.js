function isSymmetric(arr) {
    if (!Array.isArray(arr)) {
        return false; // Non-arrays are non-symmetric
    }
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}


describe("Test group 1", () => {
    it("Test1", () => {
        if (isSymmetric("test") === true) {
            throw new Error(`not excluding values different than array`);
        } else {
            console.log("isSymmetric is working only with arrays");
        }
    });
    it("Test2", () => {
        if (isSymmetric(["a", "b", "b", "a"]) !== true) {
            throw new Error(`isSymmetric is not working with ["a","b","b","a"]`);
        } else {
            console.log(`isSymmetric is working with ["a","b","b","a"]`);
        }
    });
    it("Test3", () => {
        if (isSymmetric(["a", "b", "a"]) !== true) {
            throw new Error(`isSymmetric is not working with ["a", "b", "a"]`);
        } else {
            console.log(`isSymmetric is working with ["a", "b", "a"]`);
        }
    });
    it("Test4", () => {
        if (isSymmetric([1, 2, 2, 1]) !== true) {
            throw new Error(`isSymmetric is not working with [1, 2, 2, 1]`);
        } else {
            console.log(`isSymmetric is working with [1, 2, 2, 1]`);
        }
    });
    it("Test5", () => {
        if (isSymmetric({ test: 10 }) !== false) {
            throw new Error(`isSymmetric should not work with objects`);
        } else {
            console.log(`isSymmetric is not working with objects and this is correct`);
        }
    });
    it("Test6", () => {
        if (isSymmetric([2, "3", 3, "2"]) === true) {
            throw new Error(`isSymmetric not working`);
        } else {
            console.log(`isSymmetric is not working with with different value types and this is correct`);
        }
    });
});