
import React, { useState } from "react";

import logo from "@/assets/cardLogo.jpg";
import {
  faDollarSign,
  faLocationCrosshairs,
  faTrain,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Assuming the Job interface is defined here.
// If it's defined globally or in another file, import it instead.
interface Job {
  companyName: string;
  position: string;
  location: string;
  salaryRangeStart: number;
  salaryRangeEnd: number;
}

interface JobCardProps {
  data: Job;
  onSelect: () => void;
}

// Helper component for rendering job tags
function JobTag({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "inline-block",
        padding: "0 10px",
        backgroundColor: "#7D4AEA",
        borderRadius: "10px",
        marginRight: "10px",
        color: "white",
      }}
    >
      {children}
    </div>
  );
}

const JobCard: React.FC<JobCardProps> = ({ data, onSelect }) => {
  const [premium, setPremium] = useState(false);

  // Style variables
  const normalColor = "var(--focus-primary-color)";
  const highlightColor = "#ffd233";
  const highlightTextColor = "#ec5675";

  return (
    <div
      style={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: "1fr",
        rowGap: "10px",
        fontWeight: "normal",
        color: normalColor,
        backgroundColor: "white",
        padding: 20,
        borderRadius: 35,
        border: premium
          ? `5px solid ${highlightColor}`
          : `5px solid ${normalColor}`,
      }}
      onClick={onSelect}
    >
      {premium && (
        <div
          style={{
            fontWeight: "bold",
            position: "absolute",
            right: 10,
            top: -15,
            borderRadius: 15,
            color: highlightTextColor,
            backgroundColor: highlightColor,
            padding: "2px 20px",
          }}
        >
          Premium
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "50px 1fr" }}>
        <img
          src={logo.src}
          alt="Company Logo"
          style={{ width: "50px", height: "50px", objectFit: "cover" }}
        />
        <div
          style={{
            display: "grid",
            gridTemplate: "1fr 1fr / 1fr",
            textAlign: "right",
            fontWeight: "bold",
          }}
        >
          <div>{data.companyName}</div>
          <div>{data.position}</div>
        </div>
      </div>

      <div style={{ border: "1px solid rgba(0,0,0,0.1)" }}></div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "20px 1fr",
          columnGap: "10px",
          rowGap: "5px",
          color: "#7D4AEA",
        }}
      >
        <FontAwesomeIcon icon={faLocationCrosshairs} />
        <div>{data.location}</div>
        <FontAwesomeIcon icon={faDollarSign} />
        <div>
          MYR {data.salaryRangeStart} - {data.salaryRangeEnd}
        </div>
        <FontAwesomeIcon icon={faTrain} />
        <div>Distance to LRT</div>
        <div style={{ gridColumn: "1 / 3" }}>
          {/* Example tags - replace with actual job tags as needed */}
          <JobTag>Allowance</JobTag>
          <JobTag>Health Insurance</JobTag>
          <JobTag>Remote Work</JobTag>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
