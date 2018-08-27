import flow from "lodash.flow";
import faker from "faker/locale/pt_BR";
import slugify$ from "slugify";
import withSeed from "../helpers/withSeed";

const slugify = str => slugify$(str, { lower: true });

const neighborhood = () =>
  faker.random.arrayElement([
    "Botafogo",
    "Catete",
    "Copacabana",
    "Cosme Velho",
    "Flamengo",
    "Gávea",
    "Humaitá",
    "Ipanema",
    "Itanhangá",
    "Jardim Botânico",
    "Joá",
    "Lagoa",
    "Laranjeiras",
    "Leblon",
    "Leme",
    "São Conrado",
    "Urca"
  ]);

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
