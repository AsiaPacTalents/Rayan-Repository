import "whatwg-fetch";

import { apiClient, authApiClient } from "@/apiConfig";
import { ApiError } from "openapi-typescript-fetch";
import { ErrorSharp } from "@mui/icons-material";

export default async function me() {
  // create fetch operations
  const me = authApiClient.path("/candidates/me").method("get").create();

  // fetch
  const { status, data } = await me({});
  return { status, data };
}
