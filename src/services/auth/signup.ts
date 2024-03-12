import "whatwg-fetch";

import { apiClient } from "@/apiConfig";

export default async function register(email: string, password: string) {
  // create fetch operations
  const registerOpt = apiClient.path("/auth/candidate/register").method("post").create();

  // fetch
  try {
    const { status, data } = await registerOpt({
      email,
      password,
    });
    return { status, data };
  } catch (e) {
    if (e instanceof registerOpt.Error) {
      return { status: e.status, data: e.data };
    }
    throw e
  }
}
