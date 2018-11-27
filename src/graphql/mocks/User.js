export default (_, __, { user = {} } = {}) => ({
  name: "John Doe",
  id: 300,
  email: "johndoe@example.com",
  phone: "+552199999999",
  ...user
});
