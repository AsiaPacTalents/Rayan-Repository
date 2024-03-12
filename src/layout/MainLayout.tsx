import React, { useEffect, useState, useMemo } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton } from "@mui/material";
import banner from "../assets/banner.png";
import Image from "next/image";
// import { getUID, logOff } from "../utils/authUtils";
import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";
import { useRouter } from "next/router";
import Link from "next/link";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import backgroundImg from "../assets/background.png";
import CustomButton from "@/components/CustomButton";
import ProfileComponent from "@/components/ProfileComponent";
const MenuList: { text: string; faIcon: IconDefinition; link: string }[] = [
  {
    text: "Job Listing",
    faIcon: faQuestion,
    link: "/job/list",
  },
  // {
  //     text: "Get Started",
  //     faIcon: ["fas", "fa-flag-checkered"],
  //     link: "/checkin",
  // },
  // {
  //     text: "Your Consultant",
  //     faIcon: ["fas", "question"],
  //     link: "/consultant",
  // },
  // {
  //     text: "Join Google Meet",
  //     faIcon: ["fas", "handshake"],
  //     link: "/joinsoon",
  // },
  // // { text: "Join GMeet", faIcon: ["fas", "house"], link: "/gmeet" },
  // {
  //     text: "Complete Interview",
  //     faIcon: ["fas", "list"],
  //     link: "/interviewCompletedPrompt",
  // },
  // // { text: "Complete Interview", faIcon: ["fas", "house"], link: "/interviewerInput" },
  // {
  //     text: "Rate your interview",
  //     faIcon: ["fas", "star"],
  //     link: "/interviewCompleted",
  // },
  // // { text: "Feedback", faIcon: ["fas", "house"], link: "/feedback" },
  // // { text: "End of Interview", faIcon: ["fas", "house"], link: "/endOfInterview" },
];

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = (open: boolean) => {
    setOpenDrawer(open);
  };

  return (
    <div
      style={{
        color: "white",
        display: "grid",
        gridTemplateColumns: "20px 1fr 20px",
        gridTemplateRows: "auto auto 1fr auto",
        height: "100%",
        // backgroundColor: "var(--primary-color)",
        backgroundImage: `url(${backgroundImg.src})`,
        paddingTop: "20px",
        fontWeight: "bold",
      }}
    >
      <div></div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "40px 1fr auto",
          alignItems: "center",
        }}
      >
        <div>
          <IconButton onClick={() => toggleDrawer(true)}>
            <FontAwesomeIcon
              style={{ color: "white" }}
              icon={faBars}
            ></FontAwesomeIcon>
          </IconButton>
          <Drawer
            anchor={"left"}
            open={openDrawer}
            onClose={() => toggleDrawer(false)}
          >
            <Box
              sx={{ width: 250 }}
              onClick={() => toggleDrawer(false)}
              onKeyDown={() => toggleDrawer(false)}
            >
              <div
                style={{
                  padding: "20px",
                  color: "white",
                  // backgroundColor: "var(--primary-color)",
                  backgroundImage: `url(${backgroundImg.src})`,
                }}
              >
                <div
                  onClick={() => {
                    toggleDrawer(false);
                    setTimeout(() => router.push("/"), 500);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <Image width={"210"} src={banner} alt="side-banner"></Image>
                </div>
                <div>Welcome!</div>
                {/* Something was here... */}
              </div>
              <Divider></Divider>
              <List>
                {MenuList.map(({ text, faIcon, link }) => (
                  <ListItem key={`menu-list-${text}`} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        toggleDrawer(false);
                        setTimeout(() => router.push(link), 500);
                      }}
                    >
                      <ListItemIcon>
                        <FontAwesomeIcon size="xl" icon={faIcon} />
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image src={banner} alt="decorTop" height={60} />
        </div>
        <IconButton
          onClick={() => alert("Help clicked")} // Replace with your own action
          sx={{
            color: "white",
            backgroundColor: "transparent", // No fill color, transparent background
            border: "2px solid white", // White border 2px thick
            borderRadius: "50%", // Makes the background circle
            padding: "5px", // Adjust padding to size the circle as needed
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.2)", // Optional: slight white tint on hover
              border: "2px solid white", // Keep border color on hover
            },
          }}
        >
          <FontAwesomeIcon icon={faQuestion} />
        </IconButton>
      </div>
      <div></div>
      {children}
    </div>
  );
}
