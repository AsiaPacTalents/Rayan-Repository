import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import ErrorDialog from "@/components/ErrorDialog";
import login from "@/services/auth/login";
import { useAuthStore } from "@/utils/zustand/store";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface LoginResponse {
  accessToken: string;
}

export default function LoginPage() {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const navigate = useRouter();
  const [errMsg, setErrMsg] = useState("");
  const { accessToken, setAccessToken } = useAuthStore((state) => ({
    accessToken: state.accessToken,
    setAccessToken: state.setAccessToken,
  }));
  const router = useRouter();
  const onLogin = async () => {
    const { status, data } = await login(loginForm.email, loginForm.password);
    const loginResponse = data as LoginResponse;
    if (status !== 200 || !loginResponse.accessToken) {
      console.log("error");
      setErrMsg("Invalid email / password");
      return;
    }

    setAccessToken(loginResponse.accessToken);
    navigate.push("/job/list");
  };

  useEffect(() => {
    if (accessToken) {
      router.push("/job/list");
    }
  }, []);

  return (
    <div
      style={{
        gridArea: "2 / 2 / 4 / 3",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ErrorDialog errMsg={errMsg} setErrMsg={setErrMsg}></ErrorDialog>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          maxWidth: "400px",
          width: "100%",
          minHeight: "500px",
          paddingBottom: "130px",
        }}
      >
        <h1
          style={{
            color: "black",
            margin: "0",
            paddingTop: "0",
            paddingBottom: "30px",
          }}
        >
          Login
        </h1>
        <CustomInput
          onChange={(e) => {
            setLoginForm((old) => ({ ...old, email: e.target.value }));
          }}
          type="text"
          placeholder="Email Address"
          style={{
            backgroundColor: "#e8f0fe", // Background color set to the one from the image
            // Add any other styles for the input here
          }}
        ></CustomInput>
        <br />
        <CustomInput
          onChange={(e) => {
            setLoginForm((old) => ({ ...old, password: e.target.value }));
          }}
          type="password"
          placeholder="Password"
          style={{
            backgroundColor: "#e8f0fe", // Background color set to the one from the image
            // Add any other styles for the input here
          }}
        ></CustomInput>
        <br />
        <CustomButton
          onClick={onLogin}
          style={{
            color: "white",
            backgroundColor: "var(--focus-primary-color)",
          }}
        >
          Login
        </CustomButton>
        <br />
        <Link href="/auth/signup" passHref>
          <CustomButton
            style={{
              backgroundColor: "white",
              color: "var(--focus-primary-color)",
              marginTop: "10px",
            }}
          >
            New user? Register here
          </CustomButton>
        </Link>
      </div>
    </div>
  );
}
