import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import myNewJobImg from "../assets/logo2.png";
import CustomButton from "@/components/CustomButton";
import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        gridArea: "2 / 2 / 4 / 3",
        height: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center" }} className="zoom-out-anim">
        <Image
          src={myNewJobImg}
          alt="banner"
          width={500} // Adjust the width as needed
          height={400} // Adjust the height as needed
          style={{ paddingBottom: "65px" }}
        />
        <Link href="/job">
          <CustomButton style={{ 
              color: "#FFFFFF", // Set text color to white
              backgroundColor: "var(--focus-primary-color)", // Ensure there's a contrasting background color for visibility
            }}>
            Let's go
          </CustomButton>
        </Link>
      </div>
    </div>
  );
}
