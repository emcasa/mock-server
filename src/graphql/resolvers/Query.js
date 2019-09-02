import { getDistrict, DISTRICTS } from "../mocks/District";

export default {
  districts: () => DISTRICTS.map(name => getDistrict(() => name))
};
