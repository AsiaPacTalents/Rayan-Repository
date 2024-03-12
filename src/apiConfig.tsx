import { Fetcher, Middleware } from "openapi-typescript-fetch";
import { paths } from "./apiClient";
import { useAuthStore } from "./utils/zustand/store";

export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.mynew.jobs"
    : "http://localhost:3003";

// declare fetcher for paths
export const apiClient = Fetcher.for<paths>();

// global configuration
apiClient.configure({
  baseUrl: baseUrl,
  init: {
    headers: {},
  },
  use: [], // middlewares
});

const useAuthMiddleware: Middleware = async (url, init, next) => {
  const headers = new Headers();
  headers.append(
    "Authorization",
    `Bearer ${useAuthStore.getState().accessToken}`
  );
  try {
    const response = await next(url, {
      ...init,
      headers,
    });
    return response;
  } catch (error) {
    // @ts-ignore
    if (error?.status === 401) {
      useAuthStore.getState().logOut();
    }
    throw error;
  }
};

export const authApiClient = Fetcher.for<paths>();
authApiClient.configure({
  baseUrl,
  use: [useAuthMiddleware],
});
