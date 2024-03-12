import { apiClient } from "@/apiConfig";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import FilterDialog, { JobFilter } from "@/components/FilterDialog";
import JobCard from "@/components/JobCard";
import JobCardListing from "@/components/JobCardListing";
import { Job } from "@/interface/entities/job.entity";
import { faClose, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useQuery } from "react-query";

function RenderFilterApplied(props: {
  filters: JobFilter;
  setFilters: React.Dispatch<React.SetStateAction<JobFilter>>;
}) {
  const { filters, setFilters } = props;
  const texts: { text: string; action: () => void }[] = [];
  if (filters.salaryRange.low !== 0 || filters.salaryRange.high !== 99999) {
    texts.push({
      text: `Salary Range: MYR ${filters.salaryRange.low * 500} - ${
        filters.salaryRange.high * 500
      }`,
      action: () => {
        setFilters((old) => ({
          ...old,
          salaryRange: { low: 0, high: 99999 },
        }));
      },
    });
  }
  if (filters.jobType.length !== 0) {
    filters.jobType.forEach((jt) =>
      texts.push({
        text: jt,
        action: () => {
          setFilters((old) => ({
            ...old,
            jobType: old.jobType.filter((x) => x !== jt),
          }));
        },
      })
    );
  }
  return (
    <>
      {texts.map((x, idx) => (
        <div
          key={`idx-${idx}`}
          style={{
            cursor: "pointer",
            padding: "0 10px",
            borderRadius: "10px",
            marginRight: "10px",
            border: "1px solid #d3adf7",
            color: "#531dab",
            backgroundColor: "#f9f0ff",
            fontSize: "small",
          }}
          onClick={x.action}
        >
          <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>&nbsp;
          {x.text}
        </div>
      ))}
    </>
  );
}

export default function List() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [filters, setFilters] = useState<JobFilter>({
    searchQuery: Boolean(router.query.search)
      ? String(router.query.search)
      : "",
    jobType: [],
    salaryRange: { low: 0, high: 99999 },
  });
  const { data, status } = useQuery({
    queryKey: ["data", filters],
    queryFn: async () => {
      // create fetch operations
      const findManyTsqJobs = apiClient
        .path("/tsq-jobs")
        .method("post")
        .create();
      const jobTypeFilter =
        filters.jobType.length <= 0 ? undefined : { in: filters.jobType };

      const positionQuery = filters.searchQuery
        ? {
            contains: filters.searchQuery,
            mode: "insensitive",
          }
        : undefined;
      // fetch
      const { status, data } = await findManyTsqJobs({
        pager: { limit: 10, page: 1 },
        where: {
          jobType: jobTypeFilter,
          position: positionQuery,
          salaryRangeEnd: {
            lte:
              filters.salaryRange.high === 100
                ? 10000000 // math.inf
                : filters.salaryRange.high * 500,
          },
          salaryRangeStart: {
            gte: filters.salaryRange.low * 500,
          },
        } as any,
      });
      return data;
    },
    select: (data) => {
      const jobs: Job[] = (data as any).data;
      return jobs;
    },
  });
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
          <div style={{ marginBottom: "10px" }}>Job Search</div>
          <div style={{ marginBottom: "10px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                columnGap: "10px",
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
                style={{
                  width: "auto",
                  color: "var(--focus-primary-color)",
                  border: "2px solid var(--focus-primary-color)",
                  outline: "none",
                  textAlign: "left",
                  fontWeight: "normal",
                }}
                placeholder="Enter Job title, Keyword..."
              ></CustomInput>
              <div>
                <CustomButton
                  onClick={() => setOpen(true)}
                  style={{
                    border: "2px solid var(--focus-primary-color)",
                    color: "var(--focus-primary-color)",
                  }}
                >
                  <FontAwesomeIcon icon={faFilter}></FontAwesomeIcon>
                </CustomButton>
              </div>
            </div>
          </div>
          {/* Filters applied data here:  */}

          <div style={{ display: "flex", flexDirection: "row" }}>
            <RenderFilterApplied
              filters={filters}
              setFilters={setFilters}
            ></RenderFilterApplied>
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
          {data ? <JobCardListing data={data}></JobCardListing> : "Loading..."}
        </div>
      </div>

      {/* Page actionables */}
      <div style={{ gridArea: "4 / 2 / 4 / 3" }}>
        <CustomButton
          onClick={() => router.push("apply")}
          style={{
            marginTop: "10px",
            marginBottom: "10px",
            color: "white",
            backgroundColor: "var(--focus-primary-color)",
          }}
        >
          Apply
        </CustomButton>
      </div>
    </>
  );
}
