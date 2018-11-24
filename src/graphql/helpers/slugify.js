import slugify$ from "slugify";

export default str => slugify$(str, { lower: true });
