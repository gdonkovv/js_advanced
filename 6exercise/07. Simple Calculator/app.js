const calculate = calculator();
calculate.init('#num1', '#num2', '#result');


function calculator() {

    let domObject = {};

    return {
        init,
        add,
        subtract
    };

    function init(selector1, selector2, resultSelector) {
        // initializes the object to work with the supplied selectors
        let num1El = document.querySelector(selector1);
        let num2El = document.querySelector(selector2);
        let resultEl = document.querySelector(resultSelector);

        domObject = {
            num1El,
            num2El,
            resultEl
        };
    }

    function add() {
        domObject.resultEl.value = Number(domObject.num1El.value) + Number(domObject.num2El.value);
    }

    function subtract() {
        domObject.resultEl.value = Number(domObject.num1El.value) - Number(domObject.num2El.value);
    }

}




