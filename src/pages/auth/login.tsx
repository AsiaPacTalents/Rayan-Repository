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
    <div style={{ gridArea: "2 / 2 / 4 / 3" }}>
      <ErrorDialog errMsg={errMsg} setErrMsg={setErrMsg}></ErrorDialog>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Login</h1>
        <CustomInput
          onChange={(e) => {
            setLoginForm((old) => ({ ...old, email: e.target.value }));
          }}
          type="text"
          placeholder="Email Address"
          style={{ backgroundColor: 'white' }} // Background set to white
        ></CustomInput>
        <br />
        <CustomInput
          onChange={(e) => {
            setLoginForm((old) => ({ ...old, password: e.target.value }));
          }}
          type="password"
          placeholder="Password"
          style={{ backgroundColor: 'white' }} // Background set to white
        ></CustomInput>
        <br />
        <CustomButton
          onClick={onLogin}
          style={{
            color: "white",
            backgroundColor: "var(--focus-primary-color)",
            width: "100%", 
          }}
        >
          Login
        </CustomButton>
        <br />
        <Link href="/auth/signup">
          <CustomButton
            style={{
              backgroundColor: "white",
              color: "var(--focus-primary-color)",
              whiteSpace: "nowrap",
              minWidth: "250px",
              padding: "10px 20px",
            }}
          >
            New user? Register here
          </CustomButton>
        </Link>
      </div>
    </div>
  );
}
