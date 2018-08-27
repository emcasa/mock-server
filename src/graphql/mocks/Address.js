import faker from "faker/locale/pt_BR";
import withSeed from "../helpers/withSeed";

const neighborhoods = [
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

export default withSeed(() => ({
  city: faker.address.city,
  state: faker.address.stateAbbr,
  lat: faker.address.latitude,
  lng: faker.address.longitude,
  neighborhood: () => faker.random.arrayElement(neighborhoods),
  neighborhoodSlug: () => faker.random.arrayElement(neighborhoods),
  postalCode: faker.address.zipCode,
  street: faker.address.streetName,
  streetNumber: () => faker.random.number(1000).toString()
}));
