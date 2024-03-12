import React, { useEffect, useState } from "react";
// import { isAuth } from "../utils/authUtils";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // TODO: Uncomment
    // if (!isAuth()) {
    //   navigate("/");
    // }
  }, []);
  return <>{children}</>;
}
