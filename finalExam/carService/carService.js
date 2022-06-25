const carService = {
  isItExpensive(issue) {
    if (issue === "Engine" || issue === "Transmission") {
      return `The issue with the car is more severe and it will cost more money`;
    } else {
      return `The overall price will be a bit cheaper`;
    }
  },
  discount(numberOfParts, totalPrice) {
    if (typeof numberOfParts !== "number" || typeof totalPrice !== "number") {
      throw new Error("Invalid input");
    }

    let discountPercentage = 0;

    if (numberOfParts > 2 && numberOfParts <= 7) {
      discountPercentage = 15;
    } else if (numberOfParts > 7) {
      discountPercentage = 30;
    }

    let result = (discountPercentage / 100) * totalPrice;

    if (numberOfParts <= 2) {
      return "You cannot apply a discount";
    } else {
      return `Discount applied! You saved ${result}$`;
    }
  },
  partsToBuy(partsCatalog, neededParts) {
    let totalSum = 0;

    if (!Array.isArray(partsCatalog) || !Array.isArray(neededParts)) {
      throw new Error("Invalid input");
    }
    neededParts.forEach((neededPart) => {
      partsCatalog.map((obj) => {
        if (obj.part === neededPart) {
          totalSum += obj.price;
        }
      });
    });

    return totalSum;
  },
};

describe("Tests", function () {
  describe("Test group 1 - isItExpensive", function () {
    it("Test 1", function () {
      if (carService.isItExpensive("Engine") !== `The issue with the car is more severe and it will cost more money`) {
        throw new Error;
      }
    });
    it("Test 2", function () {
      if (carService.isItExpensive("Transmission") !== `The issue with the car is more severe and it will cost more money`) {
        throw new Error;
      }
    });
    it("Test 3", function () {
      if (carService.isItExpensive("Door") !== `The overall price will be a bit cheaper`) {
        throw new Error;
      }
    });
  });
  describe("Test group 2 - discount", function () {
    it("Test 1", function () {
      if (carService.discount(5, 100) !== `Discount applied! You saved 15$`) {
        throw new Error;
      }
    });
    it("Test 2", function () {
      if (carService.discount(8, 100) !== `Discount applied! You saved 30$`) {
        throw new Error;
      }
    });
    it("Test 3", function () {
      if (carService.discount(2, 100) !== "You cannot apply a discount") {
        throw new Error;
      }
    });
    it("Test 4", function () {
      let result;
      try {
        carService.discount("abc", 100);
      } catch (err) {
        if (err.message === "Invalid input") {
          result = "ok";
        }
      }
      if (result !== "ok") {
        throw new Error;
      }
    });
    it("Test 5", function () {
      let result;
      try {
        carService.discount(5, "cba");
      } catch (err) {
        if (err.message === "Invalid input") {
          result = "ok";
        }
      }
      if (result !== "ok") {
        throw new Error;
      }
    });
  });
  describe("Test group 3 - partsToBuy", function () {
    // [{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }]
    it("Test 1", function () {
      if (carService.partsToBuy([], ["blowoff valve", "injectors"]) !== 0) {
        throw new Error;
      }
    });
    it("Test 2", function () {
      if (carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve"]) !== 145) {
        throw new Error;
      }
    });
    it("Test 3", function () {
      let result;
      try {
        carService.partsToBuy("abc", ["blowoff valve", "injectors"]);
      } catch (err) {
        if (err.message === "Invalid input") {
          result = 'ok';
        }
      }
      if (result !== "ok") {
        throw new Error;
      }
    });
    it("Test 4", function () {
      let result;
      try {
        carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], "cba");
      } catch (err) {
        if (err.message === "Invalid input") {
          result = 'ok';
        }
      }
      if (result !== "ok") {
        throw new Error;
      }
    });
  });
});