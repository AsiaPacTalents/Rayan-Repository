export default function CustomButton(props: {
  onClick?: any;
  style?: React.CSSProperties;
  children?: any;
}) {
  const extraStyles = props.style ? props.style : {};
  return (
    <button
      onClick={props.onClick}
      style={{
        cursor: "pointer",
        textAlign: "center",
        color: "white",
        backgroundColor: "#5539CC",
        borderRadius: "15px",
        padding: "10px",
        width: "75%",
        fontWeight: "bold", // Make the text bolder
        fontSize: "16px", // Adjust the text size as needed
        border: "2px solid white",
        ...extraStyles,
      }}
    >
      {props.children}
    </button>
  );
}
