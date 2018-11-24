import flow from "lodash.flow";
import faker from "faker/locale/pt_BR";
import slugify from "../helpers/slugify";
import withSeed from "../helpers/withSeed";

export const DISTRICTS = [
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
];

export const getDistrict = districtName => ({
  name: districtName,
  nameSlug: flow(
    districtName,
    slugify
  ),
  city: "Rio de Janeiro",
  citySlug: "rio-de-janeiro",
  state: "RJ",
  stateSlug: "rj",
  description: () => faker.lorem.sentence()
});

export default withSeed(() =>
  getDistrict(() => faker.random.arrayElement(DISTRICTS))
);
