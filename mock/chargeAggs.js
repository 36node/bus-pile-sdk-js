const faker = require("faker");
const _ = require("lodash");
const { STATION, NS } = require("./constants");

const generateStations = count =>
  _.range(count).map((val, index) => {
    return {
      id: faker.random.uuid(),
      at: faker.date.past().toISOString(),
      station: faker.random.arrayElement(STATION),
      ns: faker.random.arrayElement(NS),
      line: faker.random.number({ min: 100, max: 500 }).toString(),
    };
  });

module.exports = generateStations;
