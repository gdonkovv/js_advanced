function attachEventsListeners() {

    let items = document.querySelectorAll("div");
    for (let item of items) {
        let button = item.children[2];
        button.addEventListener("click", convert);
    }


    function convert(event) {
        let button = event.target;
        let currItem = button.parentElement;
        let value = Number(currItem.children[1].value);
        let measure = currItem.children[0].htmlFor;

        if (measure === "days") {
            for (let item of items) {
                let itemMeasure = item.children[0].htmlFor;
                let itemField = item.children[1];

                switch (itemMeasure) {
                    case "days":
                        break;
                    case "hours":
                        itemField.value = value * 24;
                        break;
                    case "minutes":
                        itemField.value = value * 24 * 60;
                        break;
                    case "seconds":
                        itemField.value = value * 24 * 60 * 60;
                        break;
                }
            }
        } else if (measure === "hours") {
            for (let item of items) {
                let itemMeasure = item.children[0].htmlFor;
                let itemField = item.children[1];

                switch (itemMeasure) {
                    case "days":
                        itemField.value = value / 24;
                        break;
                    case "hours":
                        break;
                    case "minutes":
                        itemField.value = value * 60;
                        break;
                    case "seconds":
                        itemField.value = value * 60 * 60;
                        break;
                }
            }
        } else if (measure === "minutes") {
            for (let item of items) {
                let itemMeasure = item.children[0].htmlFor;
                let itemField = item.children[1];

                switch (itemMeasure) {
                    case "days":
                        itemField.value = (value / 60) / 24;
                        break;
                    case "hours":
                        itemField.value = value / 60;
                        break;
                    case "minutes":
                        break;
                    case "seconds":
                        itemField.value = value * 60;
                        break;
                }
            }
        } else if (measure === "seconds") {
            for (let item of items) {
                let itemMeasure = item.children[0].htmlFor;
                let itemField = item.children[1];

                switch (itemMeasure) {
                    case "days":
                        itemField.value = ((value / 60) / 60) / 24;
                        break;
                    case "hours":
                        itemField.value = (value / 60) / 60;
                        break;
                    case "minutes":
                        itemField.value = value / 60;
                        break;
                    case "seconds":
                        break;
                }
            }
        }



    }
}