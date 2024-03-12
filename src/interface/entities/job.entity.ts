export interface Job {
  id: string;
  companyName: string;
  jobType: "FULL_TIME" | "PART_TIME" | "CONTRACT";
  position: string;
  location: string;
  description: string;
  shiftType: string;
  shiftHoursStart: number;
  shiftHoursEnd: number;
  salaryRangeStart: number;
  salaryRangeEnd: number;
  workingDays: number;
  available: Boolean;
  reqNationality: string;
  reqAgeMin: number;
  reqAgeMax: number;
  reqQual: string;
  reqLang: any;
  reqExpectedStartDate: string;
  remarks: string;
}
