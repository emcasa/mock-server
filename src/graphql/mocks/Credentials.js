import flow from "lodash.flow";
import faker from "faker/locale/pt_BR";
import slugify$ from "slugify";
import withSeed from "../helpers/withSeed";

export default () => ({
  jwt: faker.random.uuid
});
