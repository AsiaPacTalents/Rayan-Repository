import Error from "next/error";
export default function Custom500() {
  return (
    <div style={{ gridArea: "2 / 2 / 3 / 3" }}>
      <Error statusCode={500}></Error>
    </div>
  );
}
