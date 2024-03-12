import Error from "next/error";
export default function Custom404() {
  return (
    <div style={{ gridArea: "2 / 2 / 3 / 3" }}>
      <Error statusCode={404}></Error>
    </div>
  );
}
