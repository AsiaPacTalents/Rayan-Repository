import React, { useState } from "react";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import FilterDialog, { JobFilter } from "@/components/FilterDialog";
import JobCard from "@/components/JobCard";
import JobCardListing from "@/components/JobCardListing";
// Assuming Job type is defined somewhere globally
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import AvailableSlotsModal from "@/components/AvailableSlotsModal";
import dayjs, { Dayjs } from "dayjs";

// Dummy job data to replace fetched data
const dummyJobs = [
  {
    id: "1",
    companyName: "Tech Innovations Inc",
    position: "Frontend Developer",
    location: "San Francisco, CA",
    salaryRangeStart: 70000,
    salaryRangeEnd: 90000,
  },
  {
    id: "2",
    companyName: "Global Solutions",
    position: "Backend Developer",
    location: "New York, NY",
    salaryRangeStart: 80000,
    salaryRangeEnd: 100000,
  },
  {
    id: "3",
    companyName: "Global Solutions",
    position: "Backend Developer",
    location: "New York, NY",
    salaryRangeStart: 80000,
    salaryRangeEnd: 100000,
  },
  {
    id: "4",
    companyName: "Tech Innovations Inc",
    position: "Frontend Developer",
    location: "San Francisco, CA",
    salaryRangeStart: 70000,
    salaryRangeEnd: 90000,
  },
  {
    id: "5",
    companyName: "Global Solutions",
    position: "Backend Developer",
    location: "New York, NY",
    salaryRangeStart: 80000,
    salaryRangeEnd: 100000,
  },
  // Add more dummy jobs as needed
];

export default function List() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [filters, setFilters] = useState<JobFilter>({
    searchQuery: router.query.search ? String(router.query.search) : "",
    jobType: [],
    salaryRange: { low: 0, high: 99999 },
  });
  const [openSlots, setOpenSlots] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());


  const handleJobSelect = () => {
    setOpenSlots(true); // Open the slots modal
  };

  const handleDateChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
  };

  // Function to close the modal
  const handleCloseSlots = () => {
    setOpenSlots(false);
  };
  return (
    <>
      <FilterDialog
        open={open}
        setOpen={setOpen}
        filters={filters}
        onSave={(filters: JobFilter) => {
          setFilters(filters);
        }}
      ></FilterDialog>
      <div
        style={{
          gridArea: "2 / 2 / 3 / 3",
          display: "grid",
          gridTemplateRows: "auto 1fr",
          rowGap: "10px",
          overflow: "hidden",
        }}
      >
        <div>
          <div
            style={{
              marginBottom: "10px",
              fontSize: "25px",
              display: "flex", // Added to make the div a flex container
              justifyContent: "center", // Horizontally center the content
              alignItems: "center", // Vertically center the content (if the div has a specific height)
              height: "50px",
            }}
          >
            JOB SEARCH
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                columnGap: "10px",
                width: "85%",
              }}
            >
              <CustomInput
                defaultValue={filters.searchQuery}
                type="text"
                onChange={(e) => {
                  setFilters((old) => ({
                    ...old,
                    searchQuery: e.target.value,
                  }));
                }}
                placeholder="Enter Job title, Keyword..."
              ></CustomInput>
              <CustomButton
                onClick={() => setOpen(true)}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  boxShadow: "none",
                }}
              >
                <FontAwesomeIcon
                  icon={faSlidersH}
                  style={{ color: "#ffffff", fontSize: "25px" }}
                />
              </CustomButton>
            </div>
          </div>

          {/* Filters applied data here: */}
          <div style={{ display: "flex", flexDirection: "row" }}>
            {/* Render filters applied, if any */}
          </div>
        </div>
        <div
          style={{
            padding: "20px 0",
            overflow: "auto",
            display: "grid",
            rowGap: "20px",
          }}
        >
          {/* Using JobCardListing with dummy data */}
          <JobCardListing data={dummyJobs} onSelect={handleJobSelect} />
          <AvailableSlotsModal
            open={openSlots}
            selectedDate={selectedDate}
            handleDateChange={handleDateChange}
            handleClose={handleCloseSlots}
          />
        </div>
      </div>

      {/* Page actionables */}
      <div
        style={{
          gridArea: "4 / 2 / 4 / 3",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <CustomButton
          onClick={() => router.push("/apply")}
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "20px",
            backgroundColor: "#7D4AEA", // Use your primary color here
            color: "white",
            cursor: "pointer",
            minWidth: "120px", // Adjust width as needed
          }}
        >
          Search Job
        </CustomButton>
        <CustomButton
          onClick={() => console.log("Handle modify action")} // Replace with your actual modify handler
          style={{
            padding: "10px 20px",

            border: "none",
            borderRadius: "20px",
            backgroundColor: "#7D4AEA", // Use your secondary color here
            color: "white",
            cursor: "pointer",
            minWidth: "120px", // Adjust width as needed
          }}
        >
          Modify
        </CustomButton>
      </div>
    </>
  );
}
