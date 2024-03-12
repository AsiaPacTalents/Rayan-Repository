import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useState, useEffect } from "react";
import { useAuthStore } from "@/utils/zustand/store";
import me from "@/services/candidates/me";
import { useQuery } from "react-query";

function handleLoginOnClick() {
  window.location.href = "/auth/login";
}

function LoginHandle() {
  const [isLoading, setLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [openProfileModal, setOpenProfileModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const { accessToken, logOut } = useAuthStore((state) => ({
    accessToken: state.accessToken,
    logOut: state.logOut,
  }));
  const { data } = useQuery({
    queryKey: [accessToken],
    queryFn: () => {
      return me();
    },
    select: (x) => x.data,
  });
  const [logOutSnackBarOpen, setLogOutSnackBarOpen] = useState(false);

  function handleLogout() {
    logOut();
    setLogOutSnackBarOpen(true);
  }

  function handleProfileModalOpenOnClick(
    event: React.MouseEvent<HTMLButtonElement>
  ) {
    setOpenProfileModal(true);
    setAnchorEl(event.currentTarget);
  }

  function handleProfileModalOnClose() {
    setOpenProfileModal(false);
    setAnchorEl(null);
  }

  // Handles authentication
  useEffect(() => {
    if (accessToken) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [accessToken]);

  useEffect(() => {
    setLoading(false);
    if (accessToken) {
      setIsLogin(true);
    }
  }, []);
  return (
    <>
      {isLoading ? (
        <></>
      ) : isLogin ? (
        <>
          <Tooltip title={data?.email}>
            <IconButton
              onClick={handleProfileModalOpenOnClick}
              size="small"
              sx={{ ml: 2 }}
            >
              <Avatar
                // src={""}
                alt="profile_pic"
                sx={{
                  width: 32,
                  height: 32,
                  color: "grey",
                  backgroundColor: "white",
                }}
              >
                {}
              </Avatar>
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            open={openProfileModal}
            onClose={handleProfileModalOnClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleProfileModalOnClose}>
              {data?.email}
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </>
      ) : (
        <Button variant="contained" onClick={handleLoginOnClick}>
          Login
        </Button>
      )}
      <Snackbar
        open={logOutSnackBarOpen}
        autoHideDuration={6000}
        onClose={() => setLogOutSnackBarOpen(false)}
        message="Successfully logged out"
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={() => setLogOutSnackBarOpen(false)}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </>
  );
}

export default LoginHandle;
