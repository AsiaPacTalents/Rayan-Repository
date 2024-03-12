import React from "react";
import { useRouter } from "next/router";
import { useAuthStore } from "@/utils/zustand/store";

export default function IsAuth<T>(Component: React.ComponentType<T>) {
  return function ProtectedRoute(props: T) {
    const router = useRouter();

    // Check if user is authenticated
    if (!useAuthStore().accessToken) {
      router.push("/auth/login");
    }

    return (
      <>
        <Component {...props!} />
      </>
    );
  };
}
