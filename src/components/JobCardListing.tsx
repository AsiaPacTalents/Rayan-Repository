import { Job } from "@/interface/entities/job.entity";
import JobCard from "./JobCard";

export default function JobCardListing(props: { data: Job[] }) {
  return (
    <>
      {...props.data.map((x) => <JobCard data={x} key={x.id}></JobCard>)}
    </>
  );
}
