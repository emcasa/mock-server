import mapValues from "lodash.mapvalues";
import faker from "faker";

const timestamp = () => Date.now();

const seed = seed => fun => (...args) => {
  faker.seed(seed);
  const value = fun(...args);
  faker.random.number(); // Reset faker seed in case it hasn't been used
  return value;
};

export default (getMockData, getSeed = timestamp) => (...args) => {
  const mySeed = seed(getSeed(...args));
  return mapValues(
    getMockData(...args),
    value => (typeof value === "function" ? mySeed(value) : value)
  );
};
