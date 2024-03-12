import CustomButton from "@/components/CustomButton";
import Image from "next/image";
import submission from "@/assets/submission.png"; // Ensure the path is correct

export default function ApplySuccess() {
  return (
    <>
      <style global jsx>{`
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
          // This ensures the root div of Next.js is also full height
          height: 100%;
        }
      `}</style>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start", // Changed to flex-start to align items to the top
          alignItems: "center",
          height: "100vh", // Full height of the viewport
          width: "100vw",
          textAlign: "center",
          position: "relative",
          padding: "0 20px", // Horizontal padding
          boxSizing: "border-box",
        }}
      >
        <h1
          style={{
            color: "#FFFFFF", // White color for the text
            fontSize: "48px", // Larger font size for the header
            fontWeight: "bold", // Bold font weight
            marginTop: "20px", // Reduced top margin to push the content up
            marginBottom: "20px", // Space between header and image
          }}
        >
          Submission <br /> Successful! {/* Break the line between the words */}
        </h1>

        <div style={{ marginBottom: "20px" }}>
          <Image
            src={submission}
            alt="Submission Image"
            width={500}
            height={300}
            layout="intrinsic" // Maintain the original size of the image
            priority // Load the image first
          />
        </div>

        <p
          style={{
            color: "#FFFFFF", // White color for the text
            fontSize: "16px", // Smaller font size for the subtext
            marginBottom: "20px", // Space before the buttons
          }}
        >
          or contact your Career Consultant
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column", // Stack buttons vertically
            alignItems: "center", // Center buttons horizontally
            width: "100%", // Full width
            maxWidth: "300px", // Max width for the buttons
            marginBottom: "20px", // Space at the bottom of the buttons
          }}
        >
          <CustomButton
            style={{
              color: "white",
              backgroundColor: "#24a0ed", // Blue color for the button
              borderRadius: "20px", // Rounded corners
              padding: "10px 20px", // Padding inside the button
              fontWeight: "bold", // Bold font weight
              margin: "10px 0", // Margin around the button for spacing
            }}
          >
            Search job near me
          </CustomButton>

          <CustomButton
            onClick={() => {
              window.open("https://api.whatsapp.com/send?phone=601127518776&text=Hi I need help from search.mynew.jobs.", "_blank")
            }}
            style={{
              color: "white",
              backgroundColor: "#25D366", // WhatsApp green color
              borderRadius: "20px", // Rounded corners
              padding: "10px 20px", // Padding inside the button
              fontWeight: "bold", // Bold font weight
              margin: "10px 0", // Margin around the button for spacing
            }}
          >
            WhatsApp
          </CustomButton>
        </div>
      </div>
    </>
  );
}
