// import { getStrapiURL } from "from/somewhere";

interface RegisterUserProps {
  username: string;
  password: string;
  email: string;
}

export const registerUserService = async (userData: RegisterUserProps) => {
  // const url = new URL("/api/auth/local/register", baseUrl);

  try {
    // const response = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ ...userData }),
    //   cache: "no-cache",
    // });
    // return response.json();
    console.log("#############");
    console.log("User Data To Register", userData);
    console.log("#############");

    return { ok: true, jwt: "generated-jwt", error: null };
  } catch (error) {
    console.error("Registration Service Error:", error);
    return { ok: false, jwt: null, error };
  }
};

interface LoginUserProps {
  identifier: string;
  password: string;
}

export const loginUserService = async (userData: LoginUserProps) => {
  // const url = new URL("/api/auth/local", baseUrl);

  try {
    // const response = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ ...userData }),
    //   cache: "no-cache",
    // });
    // return response.json();
    console.log("#############");
    console.log("User Data To Login", userData);
    console.log("#############");

    return { ok: true, jwt: "generated-jwt", error: null };
  } catch (error) {
    console.error("Login Service Error:", error);
    return { ok: false, jwt: null, error };
  }
};
