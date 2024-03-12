import CustomButton from "@/components/CustomButton";
import { useState } from "react";
import { useRouter } from "next/router";
import ErrorDialog from "@/components/ErrorDialog";
import apply, { ApplyRequest } from "@/services/jobapps/apply";
import CustomInputForPersonal_Info from "@/components/CustomInputForPersonal_Info";

export default function ApplyJob() {
  const [errMsg, setErrMsg] = useState("");
  const [formData, setFormData] = useState<ApplyRequest>({
    position: "",
    salary: "",
    location: "",
    distanceFromLRT: "",
    applicantStatus: "",
    contacts: "", // Assuming you want to validate this field as well, even though it's not included in the input forms shown.
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const validateForm = () => {
    // Check for any empty fields in formData
    for (const [key, value] of Object.entries(formData)) {
      if (value.trim() === "") {
        setErrMsg(`Please fill out the ${key.replace(/([A-Z])/g, ' $1').trim()} field.`); // Add space before capital letters for readability
        return false;
      }
    }
    return true;
  };

  const submit = async () => {
    const { data, status } = await apply(formData);
    if (status !== 201) {
      console.log("error");
      setErrMsg((data as any).message[0]);
      return;
    }
    router.push("/apply-success");
  };

  const submitApplication = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    // Validate form before submitting
    if (!validateForm()) {
      setIsSubmitting(false); // Reset submission state if validation fails
      return; // Exit the function to prevent submitting
    }

    await submit();
    setIsSubmitting(false);
  };

  return (
    <>
      <ErrorDialog errMsg={errMsg} setErrMsg={setErrMsg}></ErrorDialog>
      <div
        style={{
          gridArea: "2 / 2 / 4 / 3",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <div style={{ width: "100%" }}>
          <h1>Personal Info</h1>
          <br />
          <div>Enter your details below</div>
        </div>
      </div>
      <div
        style={{
          gridArea: "4 / 2 / 5 / 3",
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "grid", rowGap: "20px", width: "100%" }}>
          <CustomInputForPersonal_Info
            onChange={(e) => {
              setFormData((old) => ({ ...old, position: e.target.value }));
            }}
            style={{ outline: "3px solid var(--focus-primary-color)" }}
            type="text"
            placeholder="Position"
            name="position"
          />
          <CustomInputForPersonal_Info
            onChange={(e) => {
              setFormData((old) => ({ ...old, salary: e.target.value }));
            }}
            style={{ outline: "3px solid var(--focus-primary-color)" }}
            type="text"
            placeholder="Salary"
            name="salary"
          />
          <CustomInputForPersonal_Info
            onChange={(e) => {
              setFormData((old) => ({ ...old, location: e.target.value }));
            }}
            style={{ outline: "3px solid var(--focus-primary-color)" }}
            type="text"
            placeholder="Location"
            name="location"
          />
          <CustomInputForPersonal_Info
            onChange={(e) => {
              setFormData((old) => ({ ...old, distanceFromLRT: e.target.value }));
            }}
            style={{ outline: "3px solid var(--focus-primary-color)" }}
            type="text"
            placeholder="Distance From LRT"
            name="distanceFromLRT"
          />
          <CustomInputForPersonal_Info
            onChange={(e) => {
              setFormData((old) => ({ ...old, applicantStatus: e.target.value }));
            }}
            style={{ outline: "3px solid var(--focus-primary-color)" }}
            type="text"
            placeholder="Status"
            name="applicantStatus"
          />
          {/* Button is wrapped in a div for alignment */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CustomButton
              onClick={submitApplication}
              style={{
                backgroundColor: isSubmitting ? "grey" : "var(--focus-primary-color)",
                color: "white",
                marginBottom: "10px",
              }}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </CustomButton>
          </div>
        </div>
      </div>
    </>
  );
}
