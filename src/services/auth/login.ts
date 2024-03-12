import "whatwg-fetch";

import { apiClient } from "@/apiConfig";

export default async function login(email: string, password: string) {
  // create fetch operations
  const loginOpt = apiClient.path("/auth/login").method("post").create();

  // fetch
  try {
    const { status, data } = await loginOpt({
      email,
      password,
    });
    return { status, data };
  } catch (e) {
    if (e instanceof loginOpt.Error) {
      return { status: e.status, data: e.data };
    }

    throw e;
  }
}
