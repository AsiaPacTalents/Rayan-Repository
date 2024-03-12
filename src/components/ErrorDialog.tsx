import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
export default function ErrorDialog(props: { errMsg: any; setErrMsg: any }) {
  const { errMsg, setErrMsg } = props;
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
    setErrMsg("");
  };

  useEffect(() => {
    if (errMsg) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [errMsg]);
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Error</DialogTitle>
      <DialogContent style={{ whiteSpace: "pre-line" }}>{errMsg}</DialogContent>
      <DialogActions>
        <CustomButton
          style={{
            backgroundColor: "var(--focus-primary-color)",
            color: "white",
          }}
          onClick={() => onClose()}
        >
          Close
        </CustomButton>
      </DialogActions>
    </Dialog>
  );
}
