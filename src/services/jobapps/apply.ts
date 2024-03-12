import "whatwg-fetch";

import { apiClient } from "@/apiConfig";

export interface ApplyRequest {
  position: string;
  salary: string;
  location: string;
  distanceFromLRT: string;
  contacts: string;
  applicantStatus: string;
}

export default async function apply(args: ApplyRequest) {
  // create fetch operations
  const apply = apiClient.path("/jobapps/apply").method("post").create();

  // fetch
  const { status, data } = await apply(args);

  return { status, data };
}
