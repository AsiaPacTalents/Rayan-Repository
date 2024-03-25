import CustomButton from "@/components/CustomButton";
import { useState } from "react";
import { useRouter } from "next/router";
import ErrorDialog from "@/components/ErrorDialog";
import apply, { ApplyRequest } from "@/services/jobapps/apply";
import CustomInputForPersonal_Info from "@/components/CustomInputForPersonal_Info";
import interviewImage from "@/assets/interview.png"; // Importing the image
import chines from "@/assets/chinese.png"; // Importing the image
import english from "@/assets/english.png"; // Importing the image

export default function GetInterview() {
  const [errMsg, setErrMsg] = useState("");
  const [formData, setFormData] = useState<ApplyRequest>({
    position: "",
    salary: "",
    location: "",
    distanceFromLRT: "",
    applicantStatus: "",
    contacts: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const validateForm = () => {
    // Check for any empty fields in formData
    for (const [key, value] of Object.entries(formData)) {
      if (value.trim() === "") {
        setErrMsg(
          `Please fill out the ${key.replace(/([A-Z])/g, " $1").trim()} field.`
        ); // Add space before capital letters for readability
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
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "10px",
          marginTop: "30px",
        }}
      >
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div style={{ maxWidth: "450px" }}>
            <img
              src={interviewImage.src}
              alt="Personal Info"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div>
          Input your details to secure an <span>INSTANT INTERVIEW</span>
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
        <div
          style={{
            display: "grid",
            rowGap: "5px",
            width: "100%",
            maxWidth: "722px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <label
              htmlFor="salary"
              style={{ marginRight: "10px", whiteSpace: "nowrap" }}
            >
              Expected Package: RM
            </label>
            <CustomInputForPersonal_Info
              onChange={(e) => {
                setFormData((old) => ({ ...old, salary: e.target.value }));
              }}
              style={{
                outline: "3px solid var(--focus-primary-color)",
                width: "200px",
              }} // Adjusted width here
              type="text"
              placeholder="0"
              name="package"
            />
          </div>
          <CustomInputForPersonal_Info
            onChange={(e) => {
              setFormData((old) => ({ ...old, location: e.target.value }));
            }}
            style={{ outline: "3px solid var(--focus-primary-color)" }}
            type="text"
            placeholder="Basic Salary"
            name="BasicSalary"
          />
          <div
            style={{
              backgroundColor: "blue",
              borderRadius: "4px",
              padding: "1px",
            }}
          >
            <select
              name="educationLevel"
              onChange={(e) => {
                setFormData((old) => ({
                  ...old,
                  educationLevel: e.target.value,
                }));
              }}
              style={{
                appearance: "none",
                width: "100%",
                outline: "none",
                border: "none",
                padding: "8px",
                borderRadius: "4px",
                color: "black", // Ensure text color contrasts well with the blue background
                backgroundColor: "transparent", // Make the select background transparent
              }}
            >
              <option value="">Select your education level</option>
              <option value="SPM">SPM</option>
              <option value="Diploma">Diploma</option>
              <option value="Degree">Degree</option>
              <option value="Master">Master</option>
              <option value="PhD">PhD</option>
            </select>
          </div>

          <CustomInputForPersonal_Info
            onChange={(e) => {
              setFormData((old) => ({
                ...old,
                distanceFromLRT: e.target.value,
              }));
            }}
            style={{ outline: "3px solid var(--focus-primary-color)" }}
            type="text"
            placeholder="Year of Birth"
            name="BirthYear"
          />
          <CustomInputForPersonal_Info
            onChange={(e) => {
              setFormData((old) => ({
                ...old,
                applicantStatus: e.target.value,
              }));
            }}
            style={{ outline: "3px solid var(--focus-primary-color)" }}
            type="text"
            placeholder="Work Start Date"
            name="WorkDate"
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            Languages Rating
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              maxWidth: "722px",
            }}
          >
            {/* Left side input */}
            <div style={{ width: "49%" }}>
              <img
                src={chines.src}
                alt="Language Proficiency"
                style={{ width: "100%", height: "35%", marginBottom: "1px" }}
              />
              {/* Flex container for label and input */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1px",
                }}
              >
                <label
                  htmlFor="salary"
                  style={{ marginRight: "10px", whiteSpace: "nowrap" }}
                >
                  1-10
                </label>
                <CustomInputForPersonal_Info
                  onChange={(e) => {
                    setFormData((old) => ({ ...old, salary: e.target.value }));
                  }}
                  style={{
                    outline: "3px solid var(--focus-primary-color)",
                    width: "200px",
                  }} // Adjusted width here
                  type="text"
                  placeholder="0"
                  name="chinese"
                />
              </div>
            </div>

            {/* Right side input */}
            <div style={{ width: "49%" }}>
              <img
                src={english.src}
                alt="Language Proficiency"
                style={{ width: "100%", height: "35%", marginBottom: "1px" }}
              />
              {/* Flex container for label and input */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1px",
                }}
              >
                <label
                  htmlFor="salary"
                  style={{ marginRight: "10px", whiteSpace: "nowrap" }}
                >
                  1-10
                </label>
                <CustomInputForPersonal_Info
                  onChange={(e) => {
                    setFormData((old) => ({ ...old, salary: e.target.value }));
                  }}
                  style={{
                    outline: "3px solid var(--focus-primary-color)",
                    width: "200px",
                  }} // Adjusted width here
                  type="text"
                  placeholder="0"
                  name="english"
                />
              </div>
            </div>
            
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              maxWidth: "722px",
            }}
          >
            {/* Left side input */}
            <div style={{ width: "49%" }}>
              <img
                src={chines.src}
                alt="Language Proficiency"
                style={{ width: "100%", height: "35%", marginBottom: "1px" }}
              />
              {/* Flex container for label and input */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1px",
                }}
              >
                <label
                  htmlFor="salary"
                  style={{ marginRight: "10px", whiteSpace: "nowrap" }}
                >
                  1-10
                </label>
                <CustomInputForPersonal_Info
                  onChange={(e) => {
                    setFormData((old) => ({ ...old, salary: e.target.value }));
                  }}
                  style={{
                    outline: "3px solid var(--focus-primary-color)",
                    width: "200px",
                  }} // Adjusted width here
                  type="text"
                  placeholder="0"
                  name="chinese"
                />
              </div>
            </div>

            {/* Right side input */}
            <div style={{ width: "49%" }}>
              <img
                src={english.src}
                alt="Language Proficiency"
                style={{ width: "100%", height: "35%", marginBottom: "1px" }}
              />
              {/* Flex container for label and input */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1px",
                }}
              >
                <label
                  htmlFor="salary"
                  style={{ marginRight: "10px", whiteSpace: "nowrap" }}
                >
                  1-10
                </label>
                <CustomInputForPersonal_Info
                  onChange={(e) => {
                    setFormData((old) => ({ ...old, salary: e.target.value }));
                  }}
                  style={{
                    outline: "3px solid var(--focus-primary-color)",
                    width: "200px",
                  }} // Adjusted width here
                  type="text"
                  placeholder="0"
                  name="english"
                />
              </div>
            </div>
            
          </div>

          
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CustomButton
              onClick={submitApplication}
              style={{
                backgroundColor: isSubmitting
                  ? "grey"
                  : "#1569C7",
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
