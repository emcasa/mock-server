import faker from "faker";
import { MockList } from "graphql-tools";
import withSeed from "../helpers/withSeed";

const matterportCode = [
  "QJygux45Kvx",
  "bvy3rygY2Sq",
  "JRfMzgSDDhb",
  "9N87veHH44i",
  "Nai4bSWCjQp",
  "Q7QBkBxgdQ3",
  "MU72K2wKVte",
  "h3e847x37gM",
  "gdSfPho3V9b",
  "3znDcnP9jen",
  "8FxqPg9yX8w"
];

export default withSeed(
  seedValue => ({
    id: seedValue,
    description: () => faker.lorem.paragraph(),
    type: () => faker.random.arrayElement(["Casa", "Apartamento", "Cobertura"]),
    price: () => faker.random.number({ min: 500, max: 3000 }) * 1000,
    matterportCode: () => faker.random.arrayElement(matterportCode),
    images: () => new MockList([2, 12]),
    area: () => faker.random.number({ min: 50, max: 300 }),
    rooms: faker.random.number({ min: 1, max: 10 }),
    bathrooms: faker.random.number({ min: 1, max: 10 }),
    floor: faker.random.number({ min: 0, max: 10 }),
    isActive: true
  }),
  (_, { id }) => id || faker.random.number({ min: 100, max: 9999 })
);
