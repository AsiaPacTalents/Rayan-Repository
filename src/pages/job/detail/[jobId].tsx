import { useRouter } from "next/router";

export default function JobDetailsPage() {
  const router = useRouter();
  const jobId = router.query.jobId;
  return <div>{jobId}</div>;
}
