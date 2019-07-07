const generateStations = require("./stations");
const generatePiles = require("./piles");
const generateStatistics = require("./statistics");
const generateChargeAggs = require("./chargeAggs");
const faker = require("faker");
const { NS } = require("./constants");

const myRouter = (req, res, next) => {
  /** example */
  // if (req.path === "/sessions" && req.method === "POST") {
  //   req.body.token = TOKEN;
  // }
  next();
};

const generateRewrites = base => {
  const rewrites = {};
  rewrites[`${base}/stations*`] = "/stations$1";
  rewrites[`${base}/piles*`] = "/piles$1";
  rewrites[`${base}/statistics*`] = "/statistics$1";
  rewrites[`${base}/chargeAggs*`] = "/chargeAggs$1";
  return rewrites;
};

/**
 * mock
 *
 * @param {object} opt mock options
 * @param {number} opt.count how many pets to be generated
 */
const mock = ({ base = "/pile/v0", count = 100 }) => ({
  /**
   * mock data
   */
  db: {
    stations: generateStations(10),
    piles: generatePiles(count),
    statistics: generateStatistics(count),
    chargeAggs: generateChargeAggs(count),
  },

  /**
   * rewrite
   */
  rewrites: generateRewrites(base),

  routers: [myRouter],

  aggregations: {
    "/chargeAggs": {
      count: () => faker.random.number({ min: 100, max: 500 }),
      amout: () => faker.random.number({ min: 30000, max: 50000 }),
      lowAmout: () => faker.random.number({ min: 10000, max: 20000 }),
      highAmout: () => faker.random.number({ min: 10000, max: 20000 }),
      mediumAmout: () => faker.random.number({ min: 10000, max: 20000 }),
      nsName: () => faker.random.arrayElement(NS),
    },
  },
});

module.exports = mock;
