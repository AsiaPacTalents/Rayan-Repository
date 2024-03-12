import { ChangeEventHandler } from "react";
// Removed FontAwesomeIcon import

export default function CustomInput(props: {
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  type: string;
  defaultValue?: string;
  style?: any;
}) {
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <input
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
        onChange={props.onChange}
        type={props.type}
        style={{
          width: "100%",
          textAlign: "center",
          padding: "10px 20px", // Adjusted padding, removed paddingRight
          borderRadius: "25px",
          border: "2px solid white",
          outline: "none",
          boxShadow: "0 0 10px 0 rgba(0,0,0,0)",
          backgroundColor: "transparent",
          color: "black",
          fontSize: "16px",
          ...props.style,
        }}
      />
      {/* Removed FontAwesomeIcon component */}
    </div>
  );
}
