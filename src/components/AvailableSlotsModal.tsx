import React, { useState } from "react";
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
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ArrowDropDownIcon } from "@mui/x-date-pickers";

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
  const [timeSlotDialogOpen, setTimeSlotDialogOpen] = useState(false);
  const timeSlots = ["1pm-3pm", "3pm-5pm", "5pm-7pm"];

  const handleConfirmDateAndOpenTimeSlotSelection = () => {
    // Close the date selection dialog
    handleClose();
    // Open the time slot selection dialog
    setTimeSlotDialogOpen(true);
  };

  const handleCloseTimeSlotDialog = () => {
    setTimeSlotDialogOpen(false);
  };

  const handleTimeSlotSelection = (timeSlot: string) => {
    console.log(`Date: ${selectedDate}, Time Slot: ${timeSlot}`);
    // Here you would handle the time slot selection, e.g., update a state or send to a backend
    // Close the time slot selection dialog
    handleCloseTimeSlotDialog();
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        PaperProps={{
          style: {
            borderTopLeftRadius: "40px",
            borderTopRightRadius: "40px",
            maxHeight: "75%",
            position: "absolute",
            bottom: 0,
          },
        }}
        fullScreen
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
              }
              onChange={handleDateChange}
            />
          </LocalizationProvider>
        </DialogContent>
        <DialogActions
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "20px",
          }}
        >
        <Button
          onClick={handleClose}
          style={{
            marginBottom: "10px", // Add space between buttons
            width: "80%", // Match the width of the 'Confirm' button
            backgroundColor: "#7D4AEA",
            color: "white",
            borderRadius: "10px",
          }}
          endIcon={
            <ArrowDropDownIcon
              style={{ marginLeft: "20px", fontSize: "1.8rem" }}
            />
          }
        >
          Select Available slots
        </Button>
          <Button
            onClick={handleConfirmDateAndOpenTimeSlotSelection}
            style={{
              width: "80%",
              backgroundColor: "#7D4AEA",
              color: "white",
              borderRadius: "10px",
            }}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      {/* Time Slot Selection Dialog */}
      <Dialog
        open={timeSlotDialogOpen}
        onClose={handleCloseTimeSlotDialog}
        TransitionComponent={Transition}
        PaperProps={{
          style: {
            borderRadius: "20px",
          },
        }}
      >
        <DialogTitle style={{ textAlign: "center" }}>Select a Time Slot</DialogTitle>
        <List>
          {timeSlots.map((slot) => (
            <ListItem key={slot} disablePadding>
              <ListItemButton onClick={() => handleTimeSlotSelection(slot)}>
                <ListItemText primary={slot} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Dialog>
    </>
  );
};

export default AvailableSlotsModal;
