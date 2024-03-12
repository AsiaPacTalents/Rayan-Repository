import { create } from "zustand";
import { persist } from "zustand/middleware";
interface AuthState {
  accessToken: string;
  getAccessToken: () => string;
  setAccessToken: (token: string) => void;
  logOut: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      accessToken: "",
      isAuth: () => Boolean(get().accessToken),
      getAccessToken: () => get().accessToken,
      setAccessToken: (token: string) => set({ accessToken: token }),
      logOut: () => set({ accessToken: "" }),
    }),
    {
      name: "token",
    }
  )
);
