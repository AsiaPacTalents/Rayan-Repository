import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import ErrorDialog from "@/components/ErrorDialog";
import login from "@/services/auth/login";
import register from "@/services/auth/signup";
import { useAuthStore } from "@/utils/zustand/store";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const [registerForm, setRegisterForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useRouter();
  const [errMsg, setErrMsg] = useState("");
  const { accessToken, setAccessToken } = useAuthStore((state) => ({
    accessToken: state.accessToken,
    setAccessToken: state.setAccessToken,
  }));
  const router = useRouter();

  const onRegister = async () => {
    if (!registerForm.email.trim() || !registerForm.password.trim()) {
      setErrMsg("Email / Password cannot be empty");
      return;
    }
    if (registerForm.password !== registerForm.confirmPassword) {
      setErrMsg("Confirm password is different");
      return;
    }
    const { status, data } = await register(registerForm.email, registerForm.password);

    if (status === 409) {
      setErrMsg("Email already exists");
      return;
    }

    if (status !== 201) {
      setErrMsg("Failed to register\n\nPlease check if:\n\n1. Your email is in correct format\n2. Your password is 6 characters and longer");
      return;
    }

    setAccessToken(data.accessToken);
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
        <h1>Register</h1>
        <CustomInput
          onChange={(e) => {
            setRegisterForm((old) => ({ ...old, email: e.target.value }));
          }}
          type="text"
          placeholder="Email Address"
          style={{ backgroundColor: 'white' }} // Background set to white
        ></CustomInput>
        <br />
        <CustomInput
          onChange={(e) => {
            setRegisterForm((old) => ({ ...old, password: e.target.value }));
          }}
          type="password"
          placeholder="Password"
          style={{ backgroundColor: 'white' }} // Background set to white
        ></CustomInput>
        <br />
        <CustomInput
          onChange={(e) => {
            setRegisterForm((old) => ({
              ...old,
              confirmPassword: e.target.value,
            }));
          }}
          type="password"
          placeholder="Confirm Password"
          style={{ backgroundColor: 'white' }} // Background set to white
        ></CustomInput>
        <br />
        <CustomButton
          onClick={onRegister}
          style={{
            color: "white",
            backgroundColor: "var(--focus-primary-color)",
            width: "100%", 
          }}
        >
          Register
        </CustomButton>
        <br />
        <Link href="/auth/login">
          <CustomButton
            style={{
              backgroundColor: "white",
              color: "var(--focus-primary-color)",
              whiteSpace: "nowrap",
              minWidth: "200px",
              padding: "10px 20px",
            }}
          >
            Old user? Login here
          </CustomButton>
        </Link>
      </div>
    </div>
  );
}
