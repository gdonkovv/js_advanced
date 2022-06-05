function attachGradientEvents() {
    let box = document.getElementById("gradient");
    box.addEventListener("mousemove", hoverFunc);

    function hoverFunc(event) {
        let resultElement = document.getElementById("result");

        let percent = Math.floor((Number(event.offsetX) + 0) / (Number(box.clientWidth)) * 100);
        resultElement.textContent = `${percent}%`;
    }

}