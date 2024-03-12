import React from "react";
import layoutHeaderImg from "../assets/layout-header.png";
import Image from "next/image";

export default function SimpleIphonePromptLayout(props: {
  children?: React.ReactNode;
  cardStyle?: React.CSSProperties;
}) {
  const extraCardStyles = props.cardStyle ? props.cardStyle : {};
  return (
    <>
      <div
        style={{
          gridColumn: "1 / 4",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            margin: "20px 0",
            maxWidth: "100%",
            maxHeight: "300px",
          }}
          alt="layout-header"
          src={layoutHeaderImg}
        ></Image>
      </div>
      {/* Popup */}
      <div
        className="prompt-box"
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
          alignItems: "center",
          textAlign: "center",
          gridColumn: "1 / 4",
          color: "black",
          backgroundColor: "white",
          borderRadius: "50px 50px 0 0",
          padding: "20px 30px",
          ...extraCardStyles,
        }}
      >
        {props.children}
      </div>
    </>
  );
}
