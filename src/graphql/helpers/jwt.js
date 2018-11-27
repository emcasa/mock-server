import { Buffer } from "buffer";
import { createError } from "apollo-errors";
import User from "../mocks/User";

const InvalidLoginTokenError = createError("InvalidLoginTokenError", {
  message: "The provided token is invalid."
});

export const encodeToken = name => (user = {}) => {
  const data = { [name]: { ...User(), ...user } };
  const payload = Buffer.from(JSON.stringify(data)).toString("base64");
  return payload;
};

export const decodeToken = name => jwt => {
  const payload = Buffer.from(jwt, "base64").toString("ascii");
  try {
    const data = JSON.parse(payload);
    if (name in data) return data[name];
  } catch (e) {}
  throw new InvalidLoginTokenError();
};

export const encodeJwt = encodeToken("jwt");
export const decodeJwt = decodeToken("jwt");

export const encodeAccessToken = encodeToken("account-kit");
export const decodeAccessToken = decodeToken("account-kit");
