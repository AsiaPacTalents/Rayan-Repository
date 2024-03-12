export default function CustomSelect(props: any) {
  const { onChange, choices, style } = props;
  return (
    <select
      onChange={onChange}
      style={{
        cursor: "pointer",
        textAlign: "center",
        color: "var(--focus-primary-color)",
        backgroundColor: "var(--primary-color)",
        outline: "none",
        borderRadius: "10px",
        padding: "10px",
        width: "100%",
        fontWeight: "bold",
        border: "0px solid white",
        ...style,
      }}
    >
      <option key="0">- Please select one -</option>
      {choices.map((choice: any) => (
        <option key={choice.key} value={choice.value}>
          {choice.value}
        </option>
      ))}
    </select>
  );
}
