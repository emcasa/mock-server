import faker from 'faker'
import Image from './Image'
import Address from './Address'
import User from './User'
import Listing from './Listing'
import ListingIndex from './ListingIndex'

export default {
  Image,
  Address,
  Listing,
  ListingIndex,
  User,
  ID: () => String(faker.random.number()),
  String: () => '',
  Int: () => faker.random.number(1, 1000),
  Float: () => faker.random.number(1, 1000).toFixed(2),
  Boolean: () => faker.random.boolean()
}
