function tickets(arr, sortingCriterion) {

    let result = [];

    class Ticket {
        constructor(destinationName, price, status) {
            this.destination = destinationName;
            this.price = price;
            this.status = status;
        }
    }

    for (let line of arr) {
        let tokens = line.split("|");
        let destinationName = tokens[0];
        let price = Number(tokens[1]);
        let status = tokens[2];

        let currObj = new Ticket(destinationName, price, status);

        result.push(currObj);
    }



    return result.sort((a, b) => {
        if (sortingCriterion === "price") {
            return a.price - b.price;
        } else if (sortingCriterion === "destination") {
            return a.destination.localeCompare(b.destination);
        } else if (sortingCriterion === "status") {
            return a.status.localeCompare(b.status);
        }
    })


}

console.log(tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'));