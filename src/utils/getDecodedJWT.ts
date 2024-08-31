import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

export interface DecodedJWTUser {
  user_id: string;
  given_name: string;
  family_name: string;
  userType: string;
  exp: number;
}

function getDecodedJWT(): DecodedJWTUser | null {
  const jwt = Cookies.get("jwt");
  if (jwt) {
    const decoded: DecodedJWTUser = jwtDecode(jwt);

    return decoded;
  }
  return null;
}

export default getDecodedJWT;
