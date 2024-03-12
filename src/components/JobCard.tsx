import { Job } from "@/interface/entities/job.entity";
import {
  faDollarSign,
  faLocationCrosshairs,
  faTrain,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface JobCardProps {
  data: Job;
}

const normalColor = "var(--focus-primary-color)";
const highlightColor = "#ffd233";
const highlightTextColor = "#ec5675";

function JobTag({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "inline-block",
        padding: "0 10px",
        backgroundColor: "rgb(220,220,220)",
        borderRadius: "10px",
        marginRight: "10px",
      }}
    >
      {children}
    </div>
  );
}

export default function JobCard(props: JobCardProps) {
  const [premium, setPremium] = useState(false);
  return (
    <div
      style={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: "1fr",
        rowGap: "10px",
        fontWeight: "normal",
        color: "var(--focus-primary-color)",
        backgroundColor: "white",
        padding: 20,
        borderRadius: 15,
        // border: `2px solid ${normalColor}`,
        border: premium
          ? `3px solid ${highlightColor}`
          : `2px solid ${normalColor}`,
      }}
    >
      {premium ? (
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
      ) : (
        <></>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "50px 1fr" }}>
        <div style={{ gridRow: "1 / 3" }}>Logo</div>
        <div
          style={{
            display: "grid",
            gridTemplate: "1fr 1fr / 1fr",
            textAlign: "right",
            fontWeight: "bold",
          }}
        >
          <div>{props.data.companyName}</div>
          <div>{props.data.position}</div>
        </div>
      </div>

      {/* Seperator */}
      <div style={{ border: "1px solid rgba(0,0,0,0.1)" }}></div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "20px 1fr",
          columnGap: 10,
          rowGap: 5,
          color: "grey",
        }}
      >
        <div>
          <FontAwesomeIcon icon={faLocationCrosshairs}></FontAwesomeIcon>
        </div>
        <div>{props.data.location}</div>
        <div>
          <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>
        </div>
        <div>
          MYR {props.data.salaryRangeStart} - {props.data.salaryRangeEnd}
        </div>
        <div>
          <FontAwesomeIcon icon={faTrain}></FontAwesomeIcon>
        </div>
        <div>Distance to LRT</div>
        {/* Tags */}
        <div style={{ gridColumn: "1 / 3" }}>
          <JobTag>Allowance</JobTag>
          <JobTag>Allowance</JobTag>
          <JobTag>Allowance</JobTag>
          <JobTag>Allowance</JobTag>
          <JobTag>Allowance</JobTag>
          <JobTag>Allowance</JobTag>
          <JobTag>Allowance</JobTag>
          <JobTag>Allowance</JobTag>
          <JobTag>Allowance</JobTag>
          <JobTag>Allowance</JobTag>
          <JobTag>Allowance</JobTag>
        </div>
      </div>
    </div>
  );
}
