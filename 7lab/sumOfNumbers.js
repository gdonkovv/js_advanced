function sum(arr) {
    let sum = 0;
    for (let num of arr){
        sum += Number(num);
    }
    return sum;
}



describe("Test group 1", () => {
    it("Test1", () => {
        if(sum([1,2,3,4]) !== 10){
            throw new Error(`sum is not working with [1,2,3,4]`);
        } else {
            console.log("sum is working with [1,2,3,4]");
        }
    });
    it("Test2", () => {
        if(sum([4,5,6,7]) !== 22){
            throw new Error(`sum is not working with [4,5,6,7]`);
        } else {
            console.log("sum is working with [4,5,6,7]");
        }
    });
    it("Test3", () => {
        if(sum([0,0,0,0]) !== 0){
            throw new Error(`sum is not working with [0,0,0,0]`);
        } else {
            console.log("sum is working with [0,0,0,0]");
        }
    });
    it("Test4", () => {
        if(sum([7,6,5,4]) !== 22){
            throw new Error(`sum is not working with [7,6,5,4]`);
        } else {
            console.log("sum is working with [7,6,5,4]");
        }
    });
});