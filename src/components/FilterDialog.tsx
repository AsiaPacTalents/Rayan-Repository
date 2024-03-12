import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Slide,
  Slider,
  SxProps,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React, { useEffect, useState } from "react";

const stickToTopSx: SxProps = {
  "& .MuiDialog-container": {
    alignItems: "flex-start",
  },
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const CustomHeader = (props: { children: React.ReactNode }) => (
  <div style={{ fontWeight: "bold", marginBottom: "10px" }}>
    {props.children}
  </div>
);

export interface JobFilter {
  searchQuery: string;
  jobType: ("FULL_TIME" | "PART_TIME" | "CONTRACT")[];
  salaryRange: { low: number; high: number };
}

export default function FilterDialog(props: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  filters: JobFilter;
  onSave: (filters: JobFilter) => void;
  // setFilters: React.Dispatch<React.SetStateAction<JobFilter>>;
}) {
  const { open, setOpen } = props;
  const { filters, onSave } = props;
  const [internalFilter, setInternalFilter] = useState<JobFilter>(
    JSON.parse(JSON.stringify(filters))
  );
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const jobTypeOnChange = (
    event: SelectChangeEvent<typeof filters.jobType>
  ) => {
    setInternalFilter((old) => {
      old.jobType = event.target.value as typeof filters.jobType;
      return { ...old };
    });
  };

  const clearFilter = () => {
    setInternalFilter((old) => ({
      ...old,
      jobType: [],
      salaryRange: { low: 0, high: 99999 },
    }));
  };

  useEffect(() => {
    setInternalFilter(filters)
  }, [filters]);
  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        sx={stickToTopSx}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Filters"}</DialogTitle>
        <DialogContent sx={{ minWidth: "300px" }}>
          <div style={{ padding: "10px 0" }}>
            <CustomHeader>Job Type</CustomHeader>
            <FormControl fullWidth style={{ marginBottom: "10px" }}>
              <InputLabel size="small" id="type-select">
                Job Type
              </InputLabel>
              <Select
                labelId="type-select"
                label="Job Type"
                size="small"
                value={internalFilter.jobType}
                renderValue={(selected) => (
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    {selected.map((x) => (
                      <div
                        key={x}
                        style={{
                          padding: "0 10px",
                          backgroundColor: "rgba(66, 135, 245, 0.5)",
                          borderRadius: "10px",
                          marginRight: "10px",
                        }}
                      >
                        {x}
                      </div>
                    ))}
                  </div>
                )}
                onChange={jobTypeOnChange}
                sx={{ width: "100%" }}
                multiple
              >
                <MenuItem value={"FULL_TIME"}>
                  <Checkbox
                    checked={internalFilter.jobType.indexOf("FULL_TIME") > -1}
                  />
                  Fulltime
                </MenuItem>
                <MenuItem value={"PART_TIME"}>
                  <Checkbox
                    checked={internalFilter.jobType.indexOf("PART_TIME") > -1}
                  />
                  <ListItemText primary={"Part Time"} />
                </MenuItem>
                <MenuItem value={"CONTRACT"}>
                  <Checkbox
                    checked={internalFilter.jobType.indexOf("CONTRACT") > -1}
                  />
                  <ListItemText primary={"Contract"} />
                </MenuItem>
              </Select>
            </FormControl>
            <Box>
              <CustomHeader>Salary Range (MYR)</CustomHeader>
              <Slider
                onChange={(event: Event, newValue: number | number[]) => {
                  setInternalFilter((old) => {
                    return {
                      ...old,
                      salaryRange: {
                        low: (newValue as any)[0],
                        high: (newValue as any)[1],
                      },
                    };
                  });
                }}
                valueLabelFormat={(x) => {
                  if (x >= 100) {
                    return "50000+";
                  }
                  return 500 * x;
                }}
                value={[
                  internalFilter.salaryRange.low,
                  internalFilter.salaryRange.high,
                ]}
                valueLabelDisplay="auto"
              />
            </Box>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              clearFilter();
            }}
          >
            Clear Filter
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              handleClose();
              onSave(internalFilter);
            }}
          >
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
