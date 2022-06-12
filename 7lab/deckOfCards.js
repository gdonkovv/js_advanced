function deckOfCards(input) {

    let result = [];

    for (let card of input) {
        let tokens = card.split("");
        let suit = tokens.pop();
        let face = tokens.join("");

        try {
            let currCard = createCard(face, suit).toString();
            result.push(currCard);
        } catch (err) {
            result = [`Invalid card: ${card}`];
        }
    }

    console.log(result.join(" "));


    function createCard(face, suit) {

        let faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        let suits = {
            S: "\u2660",
            H: "\u2665",
            D: "\u2666",
            C: "\u2663"
        }

        if (!faces.includes(face) || !suits.hasOwnProperty(suit)) {
            throw new Error;
        }

        return {
            face: face,
            suit: suits[suit],
            toString: function () {
                return this.face + this.suit;
            }
        }

    }


}
deckOfCards(['AS', '10D', 'KH', '2C']);
deckOfCards(['5S', '3D', 'QD', '1C']);