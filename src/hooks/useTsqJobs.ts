import "whatwg-fetch";

import { apiClient } from "@/apiConfig";

export default async function useTsqJobs() {
  // create fetch operations
  const findManyTsqJobs = apiClient.path("/tsq-jobs").method("post").create();

  // fetch
  const { status, data } = await findManyTsqJobs({
    pager: { limit: 1, page: 1 },
    where: {},
  });
}
