import { decodeAccessToken, encodeJwt } from "../../helpers/jwt";

export default {
  accountKitSignIn: (_, { accessToken }) => {
    const user = decodeAccessToken(accessToken);
    return {
      user,
      jwt: encodeJwt(user)
    };
  }
};
