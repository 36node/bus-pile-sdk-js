const faker = require("faker");

const generateStations = () => ({
  using: faker.random.number({ min: 100, max: 500 }),
  empty: faker.random.number({ min: 100, max: 500 }),
  broken: faker.random.number({ min: 100, max: 500 }),
});

module.exports = generateStations;
