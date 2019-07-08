const faker = require("faker");
const _ = require("lodash");
const { STATION, NS } = require("./constants");

const generateStations = count =>
  _.range(count).map((val, index) => {
    return {
      id: faker.random.uuid(),
      createdAt: faker.date.past().toISOString(),
      updatedAt: faker.date.past().toISOString(),
      producer: faker.random.arrayElement(["特来电", "国家电网"]),
      model: "ZX121",
      ns: faker.random.arrayElement(NS),
      startAt: faker.date.past().toISOString(),
      endAt: faker.date.past().toISOString(),
      pileNo: `1111${faker.random.number({ min: 100, max: 900 })}`,
      station: faker.random.arrayElement(STATION),
      line: faker.random.number({ min: 100, max: 500 }).toString(),
      vehicleNo: `zj-${faker.random.number({ min: 100, max: 900 })}`,
      alertLevel: faker.random.arrayElement(["1", "2", "3"]),
      status: faker.random.arrayElement(["USING", "EMPTY", "BROKEN"]),
      type: faker.random.arrayElement(["DC", "AC"]),
      startSoc: faker.random.number({ min: 0, max: 50 }),
      endSoc: faker.random.number({ min: 50, max: 100 }),
      chargingAmount: faker.random.number({ min: 10, max: 50 }),
      voltage: 220,
      current: 100,
      power: 22,
      duration: faker.random.number({ min: 1, max: 3 }),
    };
  });

module.exports = generateStations;
