function filterEmployees(data, criteria) {

    let parsedData = JSON.parse(data);
    let tokens = criteria.split("-");
    let critKey = tokens[0];
    let critValue = tokens[1];

    let result = [];

    if (criteria === "all") {
        for (let obj of parsedData) {
            result.push(obj);
        }

    } else {
        for (let obj of parsedData) {
            if (obj[critKey] === critValue) {
                result.push(obj);
            }
        }
    }

    for (let i = 0; i < result.length; i++) {

        let obj = result[i];
        console.log(`${i}. ${obj["first_name"]} ${obj["last_name"]} - ${obj["email"]}`);

    }
}



filterEmployees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'last_name-Johnson'
)