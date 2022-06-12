function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255)) {
        return undefined; // Red value is invalid
    }
    if (!Number.isInteger(green) || (green < 0) || (green > 255)) {
        return undefined; // Green value is invalid
    }
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255)) {
        return undefined; // Blue value is invalid
    }
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}


describe("Test group 1", () => {
    it("Test 1", () => {
        if (rgbToHexColor(2, 42, 50) === "#022A32") {
            console.log("converter is working");
        } else {
            throw new Error("converter is not working properly");
        }
    });
    it("Test 2", () => {
        if (rgbToHexColor("2", 42, 50) === undefined) {
            console.log("converter is working");
        } else {
            throw new Error("converter is not working properly");
        }
    });
    it("Test 3", () => {
        if (rgbToHexColor(-2, 42, 50) === undefined) {
            console.log("converter is working");
        } else {
            throw new Error("converter is not working properly");
        }
    });
    it("Test 4", () => {
        if (rgbToHexColor(256, 42, 50) === undefined) {
            console.log("converter is working");
        } else {
            throw new Error("converter is not working properly");
        }
    });
    it("Test 5", () => {
        if (rgbToHexColor(2, "42", 50) === undefined) {
            console.log("converter is working");
        } else {
            throw new Error("converter is not working properly");
        }
    });
    it("Test 6", () => {
        if (rgbToHexColor(2, -42, 50) === undefined) {
            console.log("converter is working");
        } else {
            throw new Error("converter is not working properly");
        }
    });
    it("Test 7", () => {
        if (rgbToHexColor(2, 420, 50) === undefined) {
            console.log("converter is working");
        } else {
            throw new Error("converter is not working properly");
        }
    });
    it("Test 8", () => {
        if (rgbToHexColor(2, 42, "50") === undefined) {
            console.log("converter is working");
        } else {
            throw new Error("converter is not working properly");
        }
    });
    it("Test 9", () => {
        if (rgbToHexColor(2, 42, -50) === undefined) {
            console.log("converter is working");
        } else {
            throw new Error("converter is not working properly");
        }
    });
    it("Test 10", () => {
        if (rgbToHexColor(2, 42, 500) === undefined) {
            console.log("converter is working");
        } else {
            throw new Error("converter is not working properly");
        }
    });
    it("Test 11", () => {
        if (rgbToHexColor(0, 0, 0) === "#000000") {
            console.log("converter is working");
        } else {
            throw new Error("converter is not working properly");
        }
    });
    it("Test 12", () => {
        if (rgbToHexColor(255, 255, 255) === "#FFFFFF") {
            console.log("converter is working");
        } else {
            throw new Error("converter is not working properly");
        }
    });
});