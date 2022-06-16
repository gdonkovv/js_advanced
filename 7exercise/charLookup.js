function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}


describe("Test group 1", () => {

    it("Test 1", () => {
        if(lookupChar(123,"abc") !== undefined){
            throw new Error;
        }
    });
    it("Test 2", () => {
        if(lookupChar("abc","def") !== undefined){
            throw new Error;
        }
    });
    it("Test 3", () => {
        if(lookupChar(123,456) !== undefined){
            throw new Error;
        }
    });
    it("Test 4", () => {
        if(lookupChar("abc",5) !== "Incorrect index"){
            throw new Error;
        }
    });
    it("Test 5", () => {
        if(lookupChar("abc",3) !== "Incorrect index"){
            throw new Error;
        }
    });
    it("Test 6", () => {
        if(lookupChar("abc",-8) !== "Incorrect index"){
            throw new Error;
        }
    });
    it("Test 7", () => {
        if(lookupChar("abc",1.2) !== undefined){
            throw new Error;
        }
    });
    it("Test 8", () => {
        if(lookupChar("abc",2) !== "c"){
            throw new Error;
        }
    });
});