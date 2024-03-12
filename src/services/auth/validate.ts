import "whatwg-fetch";

import { apiClient } from "@/apiConfig";

export default async function validate(jwt: string) {
  // create fetch operations
  const loginOpt = apiClient.path("/auth/validate").method("post").create();

  // fetch
  const { status, data } = await loginOpt({
    jwt,
  });

  return { status, data };
}
