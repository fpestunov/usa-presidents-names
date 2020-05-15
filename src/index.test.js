const expect = require("chai").expect;
const presidents = require("./index");

describe("usa presidents", function () {
  it("should work", function () {
    expect(true).to.be.true;
  });

  describe("random", function () {
    it("should return random item", function () {
      const randomItem = presidents.random();
      expect(presidents.all).to.include(randomItem);
    });
  });

  describe("all", function () {
    it("should be an array of strings", function () {
      expect(presidents.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function (item) {
          return typeof item === "string";
        });
      }
    });

    it("should contain `Donald Trump`", function () {
      expect(presidents.all).to.include("Donald Trump");
    });
  });
});
