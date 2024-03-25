import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface AvailableSlotsModalProps {
  open: boolean;
  selectedDate: Dayjs | null;
  handleDateChange: (newValue: Dayjs | null) => void;
  handleClose: () => void;
}

const AvailableSlotsModal: React.FC<AvailableSlotsModalProps> = ({
  open,
  selectedDate,
  handleDateChange,
  handleClose,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      PaperProps={{
        style: {
          borderTopLeftRadius: "40px",
          borderTopRightRadius: "40px",
          maxHeight: "75%", // Adjust this to change how much of the screen the bottom sheet covers
          position: "absolute",
          bottom: 0, // Pins the dialog to the bottom
        },
      }}
      fullScreen // Use the fullScreen prop for smaller screens
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle
        style={{
          textAlign: "center",
          color: "#7D4AEA",
          fontSize: "25px",
          fontWeight: "bold",
          marginTop: "15px",
        }}
      >
        Select Available Slots
      </DialogTitle>
      <DialogContent>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker
            orientation="portrait"
            openTo="day"
            value={selectedDate}
            shouldDisableDate={(date) =>
              dayjs(date).day() === 0 || dayjs(date).day() === 6
            } // Disable weekends as an example
            onChange={handleDateChange}
          />
        </LocalizationProvider>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Confirm</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AvailableSlotsModal;
