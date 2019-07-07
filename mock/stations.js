const faker = require("faker");
const _ = require("lodash");
const { STATION } = require("./constants");

const generateStations = count =>
  _.range(count).map((val, index) => {
    return {
      id: faker.random.uuid(),
      createdAt: faker.date.past().toISOString(),
      updatedAt: faker.date.past().toISOString(),
      name: faker.random.arrayElement(STATION),
      address: faker.address.streetAddress(),
      position: {
        longitude: faker.random.number({
          min: 121,
          max: 122,
          precision: 0.00001,
        }),
        latitude: faker.random.number({ min: 31, max: 32, precision: 0.00001 }),
      },
      status: faker.random.arrayElement(["USING", "EMPTY", "BROKEN"]),
      power: faker.random.number({ min: 10000, max: 20000 }),
      outPower: faker.random.number({ min: 10000, max: 20000 }),
      usingCount: faker.random.number({ min: 100, max: 300 }),
      emptyCount: faker.random.number({ min: 100, max: 300 }),
      brokenCount: faker.random.number({ min: 100, max: 300 }),
      level3Count: faker.random.number({ min: 0, max: 20 }),
      level2Count: faker.random.number({ min: 0, max: 20 }),
      level1Count: faker.random.number({ min: 0, max: 20 }),
      chargingVehicles: faker.random.number({ min: 0, max: 100 }),
      chargingACVehicles: faker.random.number({ min: 0, max: 100 }),
      chargingDCVehicles: faker.random.number({ min: 0, max: 100 }),
    };
  });

module.exports = generateStations;
