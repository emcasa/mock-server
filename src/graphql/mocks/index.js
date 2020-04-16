import faker from "faker";
import Image from "./Image";
import Address from "./Address";
import User from "./User";
import Listing from "./Listing";
import ListingIndex from "./ListingIndex";
import District from "./District";

export default {
  Image,
  Address,
  Listing,
  ListingIndex,
  User,
  District,
  UUID: () => String(faker.random.uuid()),
  ID: () => String(faker.random.number()),
  String: () => "",
  Int: () => faker.random.number({ min: 1, max: 1000 }),
  Float: () => faker.random.number({ min: 1, max: 1000 }).toFixed(2),
  Decimal: () => faker.finance.amount(0, 1000, 6),
  Boolean: () => faker.random.boolean(),
  NaiveDateTime: () => new Date().toISOString()
};
