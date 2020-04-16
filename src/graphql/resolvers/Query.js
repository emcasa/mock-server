import { getDistrict, DISTRICTS } from "../mocks/District";
import { TAGS } from "../mocks/Tag";

export default {
  districts: () => DISTRICTS.map(name => getDistrict(() => name)),
  tags: () => TAGS
};
