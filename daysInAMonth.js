function daysInAMonth(month, year) {

    let numOfDays = 0;
    month = month - 1;

    let date = new Date(year, month, 1);

    while (date.getMonth() === month) {
        numOfDays++;
        date.setDate(date.getDate() + 1);
    }
    console.log(numOfDays);

}
daysInAMonth(1, 2012);
daysInAMonth(2, 2021);