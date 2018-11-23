import mapValues from "lodash.mapvalues";
import faker from "faker";

const timestamp = () => Date.now();

const seed = seed => fun => (...args) => {
  faker.seed(parseInt(seed));
  const value = fun(...args);
  faker.random.number(); // Reset faker seed in case it hasn't been used
  return value;
};

export default (getMockData, getSeed = timestamp) => (...args) => {
  const seedValue = getSeed(...args);
  const mySeed = seed(seedValue);
  return mapValues(getMockData(seedValue, ...args), value =>
    typeof value === "function" ? mySeed(value) : value
  );
};
