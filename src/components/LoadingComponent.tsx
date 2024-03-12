import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function LoadingComponent(props: { style?: any }) {
  const additionalStyle = props.style ? { ...props.style } : {};
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        ...additionalStyle
      }}
    >
      <FontAwesomeIcon
        size="lg"
        style={{ marginBottom: "10px" }}
        icon={["fas", "spinner"]}
        spin
      />
      Loading...
    </div>
  );
}
