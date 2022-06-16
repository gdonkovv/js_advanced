let mathEnforcer = {
    addFive: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe("Test group 1", () => {
    it("Test 1", () => {
        if (mathEnforcer.addFive("abc") !== undefined) {
            throw new Error;
        }
        if (mathEnforcer.addFive({ abc: "abc" }) !== undefined) {
            throw new Error;
        }
        if (mathEnforcer.addFive([1, 2, 3]) !== undefined) {
            throw new Error;
        }
        if (mathEnforcer.addFive(false) !== undefined) {
            throw new Error;
        }
        if (mathEnforcer.addFive(undefined) !== undefined) {
            throw new Error;
        }
        if (mathEnforcer.addFive(null) !== undefined) {
            throw new Error;
        }
        if (mathEnforcer.addFive(5) !== 10) {
            throw new Error;
        }
        if (mathEnforcer.addFive(-5) !== 0) {
            throw new Error;
        }
        if (mathEnforcer.addFive(0) !== 5) {
            throw new Error;
        }
        if ((mathEnforcer.addFive(1.5) <= 6.51 && mathEnforcer.addFive(1.5) >= 6.49) === false) {
            throw new Error;
        }
        if ((mathEnforcer.addFive(-1.5) <= 3.51 && mathEnforcer.addFive(-1.5) >= 3.49) === false) {
            throw new Error;
        }
        if ((mathEnforcer.addFive(1.555) <= 6.560 && mathEnforcer.addFive(1.555) >= 6.499) === false) {
            throw new Error;
        }
        if ((mathEnforcer.addFive(1.00000001) <= 6.01 && mathEnforcer.addFive(1.00000001) >= 6.00) === false) {
            throw new Error;
        }
    });
    it("Test 2", () => {
        if (mathEnforcer.subtractTen("abc") !== undefined) {
            throw new Error;
        }
        if (mathEnforcer.subtractTen({ abc: "abc" }) !== undefined) {
            throw new Error;
        }
        if (mathEnforcer.subtractTen([1, 2, 3]) !== undefined) {
            throw new Error;
        }
        if (mathEnforcer.subtractTen(false) !== undefined) {
            throw new Error;
        }
        if (mathEnforcer.subtractTen(undefined) !== undefined) {
            throw new Error;
        }
        if (mathEnforcer.subtractTen(null) !== undefined) {
            throw new Error;
        }
        if (mathEnforcer.subtractTen(15) !== 5) {
            throw new Error;
        }
        if (mathEnforcer.subtractTen(10) !== 0) {
            throw new Error;
        }
        if (mathEnforcer.subtractTen(-15) !== -25) {
            throw new Error;
        }
        if ((mathEnforcer.subtractTen(15.5) <= 5.51 || mathEnforcer.subtractTen(15.5) >= 5.49) === false) {
            throw new Error;
        }
        if ((mathEnforcer.subtractTen(-15.5) >= -25.51 || mathEnforcer.subtractTen(-15.5) <= -25.49) === false) {
            throw new Error;
        }
        if ((mathEnforcer.subtractTen(15.555) <= 5.560 || mathEnforcer.subtractTen(15.555) >= 5.499) === false) {
            throw new Error;
        }
        if ((mathEnforcer.subtractTen(15.00000001) <= 5.01 || mathEnforcer.subtractTen(15.00000001) >= 5.0) === false) {
            throw new Error;
        }
    });
    it("Test 3", () => {
        if (mathEnforcer.sum("abc", "abc") !== undefined) {
            throw new Error;
        }
        if (mathEnforcer.sum({}, {}) !== undefined) {
            throw new Error;
        }
        if (mathEnforcer.sum([], []) !== undefined) {
            throw new Error;
        }
        if (mathEnforcer.sum(true, false) !== undefined) {
            throw new Error;
        }
        if (mathEnforcer.sum(12, "abc") !== undefined) {
            throw new Error;
        }
        if (mathEnforcer.sum("abc", 12) !== undefined) {
            throw new Error;
        }
        if (mathEnforcer.sum(12, undefined) !== undefined) {
            throw new Error;
        }
        if (mathEnforcer.sum(undefined, 12) !== undefined) {
            throw new Error;
        }
        if (mathEnforcer.sum(undefined, undefined) !== undefined) {
            throw new Error;
        }
        if (mathEnforcer.sum(12, null) !== undefined) {
            throw new Error;
        }
        if (mathEnforcer.sum(null, 12) !== undefined) {
            throw new Error;
        }
        if (mathEnforcer.sum(null, null) !== undefined) {
            throw new Error;
        }
        if (mathEnforcer.sum(12, 12) !== 24) {
            throw new Error;
        }
        if (mathEnforcer.sum(-12, 12) !== 0) {
            throw new Error;
        }
        if (mathEnforcer.sum(-12, 14) !== 2) {
            throw new Error;
        }
        if (mathEnforcer.sum(14, -12) !== 2) {
            throw new Error;
        }
        if (mathEnforcer.sum(-14, -12) !== -26) {
            throw new Error;
        }
        if ((mathEnforcer.sum(12, 1.2) <= 13.21 && mathEnforcer.sum(12, 1.2) >= 13.19) === false) {
            throw new Error;
        }
        if ((mathEnforcer.sum(1.2, 1.2) <= 2.41 && mathEnforcer.sum(1.2, 1.2) >= 2.39) === false) {
            throw new Error;
        }
        if ((mathEnforcer.sum(-1.2, 1.2) <= 0.01 && mathEnforcer.sum(1.2, 1.2) >= -0.01) === false) {
            throw new Error;
        }
        if ((mathEnforcer.sum(1.222, 1.222) <= 2.459 && mathEnforcer.sum(1.222, 1.222) >= 2.399) === false) {
            throw new Error;
        }
        if ((mathEnforcer.sum(0.00000001, 0.00000001) <= 0.01000000 && mathEnforcer.sum(0.00000001, 0.00000001) >= 0.00000000) === false) {
            throw new Error;
        }
    });
});