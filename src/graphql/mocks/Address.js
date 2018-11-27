import flow from "lodash.flow";
import faker from "faker/locale/pt_BR";
import slugify from "../helpers/slugify";
import withSeed from "../helpers/withSeed";
import { DISTRICTS } from "./District";

const neighborhood = () => faker.random.arrayElement(DISTRICTS);

export default withSeed(() => ({
  lat: faker.address.latitude,
  lng: faker.address.longitude,
  postalCode: faker.address.zipCode,
  streetNumber: () => faker.random.number(1000).toString(),
  neighborhood: neighborhood,
  neighborhoodSlug: flow(
    neighborhood,
    slugify
  ),
  street: faker.address.streetName,
  streetSlug: flow(
    faker.address.streetName,
    slugify
  ),
  city: "Rio de Janeiro",
  citySlug: "rio-de-janeiro",
  state: "RJ",
  stateSlug: "rj"
}));
