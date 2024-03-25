// interviewsubmission.tsx
import CustomButton from "@/components/CustomButton";
import Image from "next/image";

export default function InterviewSubmission() {
  return (
    <>
      <style jsx global>{`
        body,
        html {
          margin: 0;
          padding: 0;
          overflow: hidden; // Prevent scrolling if content fits on the screen
          height: 100%; // Ensure body takes full viewport height
          background: linear-gradient(
            to bottom,
            #7f7fd5,
            #86a8e7,
            #91eae4
          ); // Gradient background
        }
        #__next {
          height: 100%; // Ensures the root div of Next.js is also full height
        }
      `}</style>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          textAlign: "center",
          position: "relative",
          padding: "0 20px",
          boxSizing: "border-box",
        }}
      >
        <h1
          style={{
            color: "#FFFFFF",
            fontSize: "60px",
            fontWeight: "bold",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          Submission Successful!
        </h1>

        <p
          style={{
            color: "#FFFFFF",
            fontSize: "40px",
            marginBottom: "63px",
          }}
        >
          Your <br />
          interview <br /> slots <br /> have <br />
          been <br />
          confirmed.
        </p>

        <CustomButton
          style={{
            color: "white",
            backgroundColor: "#4684CE",
            borderRadius: "20px",
            padding: "10px 20px",
            fontWeight: "bold",
            margin: "10px 0",
          }}
        >
          Check booked interviews
        </CustomButton>
      </div>
    </>
  );
}
