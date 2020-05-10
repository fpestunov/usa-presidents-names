const uniqueRandomArray = require("unique-random-array");
const usaPresidentsNames = require("./president-names.json");

module.exports = {
  all: usaPresidentsNames,
  random: uniqueRandomArray(usaPresidentsNames),
};
