import { useMediaQuery } from "@mui/material";
import React, { ChangeEventHandler } from "react";

interface CustomInputForPersonal_InfoProps {
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  type: string;
  defaultValue?: string;
  name: string;
  style?: React.CSSProperties; // Add this line
}
// snake case
export default function CustomInputForPersonal_Info({
  placeholder,
  onChange,
  type,
  defaultValue,
  name,
}: CustomInputForPersonal_InfoProps) {
  const inputWrapperStyle: React.CSSProperties = {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    // width: "calc(100% - 40px)", // Reducing the width by 20px on each side
    padding: "0 10px", // Adding padding on the sides
    margin: "10px 0", // Adjust spacing as needed
  };

  const labelStyle: React.CSSProperties = {
    color: "#FFFFFF", // Or use the specific color code based on your design
    fontSize: "16px", // Adjust the font size as needed
    marginBottom: "5px", // Space between the label and the input line
    display: "block", // Ensures that the label is on top of the input
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", // The input will fill its wrapper, which has padding
    padding: "10px 0", // Padding top and bottom for the input
    backgroundColor: "transparent",
    border: "none", // Removes border
    borderBottom: "2px solid white", // Bottom border
    outline: "none", // Removes the outline on focus
    color: "#FFFFFF", // Text color for input
    fontSize: "18px", // Adjust the font size as needed
  };

  return (
    <div style={inputWrapperStyle}>
      <label htmlFor={name} style={labelStyle}></label>
      <input
        id={name}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        style={inputStyle}
      />
    </div>
  );
}
