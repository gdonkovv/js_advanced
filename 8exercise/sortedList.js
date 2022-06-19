class List {

    #innerArr = [];

    constructor() {
        this.size = this.#innerArr.length;
    }

    add(element) {
        this.#innerArr.push(element);
        this.size++;
        this.#innerArr.sort((a,b) => a-b);
    }

    remove(index) {
        if (this.#innerArr[index] !== undefined) {
            this.#innerArr.splice(index, 1);
            this.size--;
            this.#innerArr.sort((a,b) => a-b);
        }
    }

    get(index) {
        if (this.#innerArr[index] !== undefined) {
            return this.#innerArr[index];
        }
    }

}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));