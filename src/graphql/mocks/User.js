import faker from 'faker'

export default () => ({
  name: () => faker.name.findName(),
  id: () => faker.random.number({min: 1, max: 200}) * 1000,
  email: () => faker.internet.email(),
  phone: () => faker.phone.phoneNumber()
})
