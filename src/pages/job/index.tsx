import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import jobSearchBanner from "@/assets/JobSearchLogo.png";

export default function JobSearchIndex() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // If there is a search query, proceed with navigation
      window.location.href = `/job/apply?search=${searchQuery}`;
    } else {
      // If there is no search query, show an error message
      setShowErrorMessage(true);
    }
  };

  return (
    <div
      style={{
        gridArea: "2 / 2 / 4 / 3",
        height: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
          display: "grid",
          rowGap: "20px",
          width: "100%",
          padding: "0 20px",
        }}
      >
        <div style={{ textAlign: "center" }} className="zoom-out-anim">
          <Image
            src={jobSearchBanner}
            alt="Job Search"
            width={500}
            height={300}
          />
        </div>
        <Link href="/job/apply" legacyBehavior>
          <a style={{ color: "white", textDecoration: "none" }}>
            Continue as guest?
          </a>
        </Link>
        {showErrorMessage && (
          <div style={{ color: "red", textAlign: "center" }}>
            Please Enter job title
          </div>
        )}
        <div style={{ position: "relative", width: "100%" }}>
          <CustomInput
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (showErrorMessage) setShowErrorMessage(false);
            }}
            type="text"
            placeholder="Enter Job title, Keyword..."
            // Here, you might want to add additional styles or remove any if necessary
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{
              position: "absolute",
              right: "15px", // Adjust based on your design
              top: "50%",
              transform: "translateY(-50%)",
              color: "#ffffff", // Adjust color to match your design
              pointerEvents: "none",
              fontSize: "23px",
            }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CustomButton
            onClick={handleSearch}
            style={{ background: "var(--focus-primary-color)", color: "white" }}
          >
            Search
          </CustomButton>
        </div>
        <Link href="/auth/login" legacyBehavior>
          <a style={{ color: "white", textDecoration: "none" }}>Log in</a>
        </Link>
      </div>
    </div>
  );
}
