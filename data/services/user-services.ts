import { getAuthToken } from "./token-services";
// import { getStrapiURL } from "from/somewhere";

export const getUser = async () => {
  // const baseUrl = getStrapiURL();

  const authToken = getAuthToken();
  if (!authToken) return { ok: false, data: null, error: null };

  try {
    // const response = await fetch(url.href, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${authToken}`,
    //   },
    //   cache: "no-cache",
    // });
    // const data = await response.json();
    // if (data.error) return { ok: false, data: null, error: data.error };
    return { ok: true, data: {}, error: null };
  } catch (error) {
    console.log(error);
    return { ok: false, data: null, error: error };
  }
};
