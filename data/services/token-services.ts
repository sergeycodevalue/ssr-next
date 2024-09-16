import { cookies } from "next/headers";

export const getAuthToken = () => {
  const authToken = cookies().get("jwt")?.value;
  return authToken;
};
