function commandProcessor() {

    let str = "";

    function append(string) {
        str += string;
    }

    function removeStart(n) {
        n = Number(n);
        str = str.substring(n);
    }

    function removeEnd(n) {
        n = Number(n);
        str = str.substring(0,str.length - n);
    }
    function print() {
        console.log(str);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    }
}


let secondZeroTest = commandProcessor();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();