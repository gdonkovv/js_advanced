const bookSelection = {
  isGenreSuitable(genre, age) {
    if (age <= 12 && (genre === "Thriller" || genre === "Horror")) {
      return `Books with ${genre} genre are not suitable for kids at ${age} age`;
    } else {
      return `Those books are suitable`;
    }
  },
  isItAffordable(price, budget) {
    if (typeof price !== "number" || typeof budget !== "number") {
      throw new Error("Invalid input");
    }

    let result = budget - price;

    if (result < 0) {
      return "You don't have enough money";
    } else {
      return `Book bought. You have ${result}$ left`;
    }
  },
  suitableTitles(array, wantedGenre) {
    let resultArr = [];

    if (!Array.isArray(array) || typeof wantedGenre !== "string") {
      throw new Error("Invalid input");
    }
    array.map((obj) => {
      if (obj.genre === wantedGenre) {
        resultArr.push(obj.title);
      }
    });
    return resultArr;
  },
};


describe("Tests", function () {
  describe("Test group 1 - isGenreSuitable", function () {
    it("Test 1", function () {
      if (bookSelection.isGenreSuitable("Horror", 12) !== `Books with Horror genre are not suitable for kids at 12 age`) {
        throw new Error;
      }
    });
    it("Test 2", function () {
      if (bookSelection.isGenreSuitable("Thriller", 10) !== `Books with Thriller genre are not suitable for kids at 10 age`) {
        throw new Error;
      }
    });
    it("Test 3", function () {
      if (bookSelection.isGenreSuitable("Adventure", 8) !== `Those books are suitable`) {
        throw new Error;
      }
    });
  });
  describe("Test group 2 - isItAffordable", function () {
    it("Test 1", function () {
      if (bookSelection.isItAffordable(10, 5) !== "You don't have enough money") {
        throw new Error;
      }
    });
    it("Test 2", function () {
      if (bookSelection.isItAffordable(10, 15) !== `Book bought. You have 5$ left`) {
        throw new Error;
      }
    });
    it("Test 3", function () {
      let result;
      try {
        bookSelection.isItAffordable("10", "15");
        result = "okay";
      } catch (err) {
        if (err.message === "Invalid input") {
          result = "not good";
        }
      }
      if (result !== "not good") {
        throw new Error;
      }
    });
  });
  describe("Test group 3 - suitableTitles", function () {
    it("Test 1", function () {
      let newArr = bookSelection.suitableTitles(
        [{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "IT", genre: "Horror" }], "Horror");
      if ((newArr.length === 1 && newArr[0] === "IT") === false) {
        throw new Error;
      }
    });
    it("Test 2", function () {
      let result;
      try {
        bookSelection.suitableTitles("", "Horror");
        result = "okay";
      } catch (err) {
        if (err.message === "Invalid input") {
          result = "not good";
        }
      }
      if (result !== "not good") {
        throw new Error;
      }
    });
    it("Test 3", function () {
      let result;
      try {
        bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "IT", genre: "Horror" }], 4);
        result = "okay";
      } catch (err) {
        if (err.message === "Invalid input") {
          result = "not good";
        }
      }
      if (result !== "not good") {
        throw new Error;
      }
    });
  });
});

