import React from 'react';
import JobCard from "./JobCard";

// Keep the Job interface as you've defined it.
interface Job {
  id: string;
  companyName: string;
  position: string;
  location: string;
  salaryRangeStart: number;
  salaryRangeEnd: number;
}

// Define a new interface for JobCardListing props.
interface JobCardListingProps {
  data: Job[];
  onSelect: (jobId: string) => void; // Add onSelect prop
}

const JobCardListing: React.FC<JobCardListingProps> = ({ data, onSelect }) => {
  return (
    <>
      {data.map((job) => (
        <JobCard data={job} key={job.id} onSelect={() => onSelect(job.id)} />
      ))}
    </>
  );
};

export default JobCardListing;
