import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import ErrorDialog from "@/components/ErrorDialog";
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
  const { setAccessToken } = useAuthStore((state) => ({
    setAccessToken: state.setAccessToken,
  }));
  const onRegister = async () => {
    if (!registerForm.email.trim() || !registerForm.password.trim()) {
      setErrMsg("Email / Password cannot be empty");
      return;
    }
    if (registerForm.password !== registerForm.confirmPassword) {
      setErrMsg("Confirm password is different");
      return;
    }
    const { status, data } = await register(
      registerForm.email,
      registerForm.password
    );

    if (status === 409) {
      setErrMsg("Email already exists");
      return;
    }

    if (status !== 201) {
      setErrMsg(
        "Failed to register\n\nPlease check if:\n\n1. Your email is in correct format\n2. Your password is 6 characters and longer"
      );
      return;
    }

    setAccessToken(data.accessToken);
    navigate.push("/job/list");
  };

  useEffect(() => {
    if (useAuthStore.getState().accessToken) {
      navigate.push("/job/list");
    }
  }, []);

  return (
    <div
      style={{
        gridArea: "2 / 2 / 4 / 3",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          padding: "0px 20px 20px",
          marginTop: "30px",
          marginBottom: "15px",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "650px",
          maxWidth: "90%",
        }}
      >
        <h2
          style={{
            marginTop: "0",
            color: "black",
            fontSize: "35px",
            width: "100%",
            textAlign: "center",
          }}
        >
          Sign Up
        </h2>
        <ErrorDialog errMsg={errMsg} setErrMsg={setErrMsg}></ErrorDialog>

        <CustomInput
          onChange={(e) =>
            setRegisterForm((old) => ({ ...old, email: e.target.value }))
          }
          type="text"
          placeholder="Email Address"
          style={{ backgroundColor: '#E0F7FA' }}
        ></CustomInput>
        <br />
        <CustomInput
          onChange={(e) =>
            setRegisterForm((old) => ({ ...old, password: e.target.value }))
          }
          type="password"
          placeholder="Password"
          style={{ backgroundColor: '#E0F7FA' }}
        ></CustomInput>
        <br />
        <CustomInput
          onChange={(e) =>
            setRegisterForm((old) => ({
              ...old,
              confirmPassword: e.target.value,
            }))
          }
          type="password"
          placeholder="Confirm Password"
          style={{ backgroundColor: '#E0F7FA' }}
        ></CustomInput>
        <br />
        <CustomButton
          onClick={onRegister}
          style={{
            color: "white",
            backgroundColor: "var(--focus-primary-color)",
          }}
        >
          Register
        </CustomButton>
        <br />
        <Link href="/auth/login">
          <span style={{ cursor: "pointer", marginTop: "20px" }}>
            <span style={{ color: "black", textDecoration: "none" }}>Old user?</span>
            <span style={{ color: "var(--focus-primary-color)", textDecoration: "none" }}> Login here</span>
          </span>
        </Link>
      </div>
    </div>
  );
}
