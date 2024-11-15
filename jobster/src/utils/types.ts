export type StatusValuesType = "interview" | "declined" | "pending" | "";
export const StatusValues: Array<StatusValuesType> = [
  "interview",
  "declined",
  "pending",
  "",
];

export type JobOptionsTypeType =
  | "full-time"
  | "part-time"
  | "remote"
  | "internship"
  | "all";

export const JobOptionsType: Array<JobOptionsTypeType> = [
  "full-time",
  "part-time",
  "remote",
  "internship",
  "all",
];

export type SortOptionsType = "latest" | "oldest" | "a-z" | "z-a";

export const SortOptions: Array<SortOptionsType> = [
  "latest",
  "oldest",
  "a-z",
  "z-a",
];
