function encodeAndDecodeMessages() {

    document.getElementsByTagName("button")[0].addEventListener("click", encode);
    document.getElementsByTagName("button")[1].addEventListener("click", decode);


    function encode() {
        let inputText = document.getElementsByTagName("textarea")[0].value;
        let newText = "";

        for (let ch of inputText) {
            let newCh = String.fromCharCode(ch.charCodeAt(ch) + 1);
            newText += newCh;
        }
        document.getElementsByTagName("textarea")[0].value = "";

        document.getElementsByTagName("textarea")[1].value = newText;
    }


    function decode() {
        let inputText = document.getElementsByTagName("textarea")[1].value;
        let newText = "";

        for (let ch of inputText) {
            let newCh = String.fromCharCode(ch.charCodeAt(ch) - 1);
            newText += newCh;
        }

        document.getElementsByTagName("textarea")[1].value = newText;
    }
}
// The password for my bank account is 123sdfdf