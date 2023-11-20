import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { College } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sortCollegesByNameAscending(colleges: College[]): College[] {
  return colleges.slice().sort((a, b) => a.name.localeCompare(b.name));
}

export function sortCollegesByYearFoundedAsc(colleges: College[]): College[] {
  return colleges.slice().sort((a, b) => a.yearFounded - b.yearFounded);
}

export function sortCollegesByYearFoundedDesc(colleges: College[]): College[] {
  return colleges.slice().sort((a, b) => b.yearFounded - a.yearFounded);
}

export const sortByPopularity = (colleges: College[]): College[] => {
  return colleges.slice().sort((a, b) => b.students.length - a.students.length);
};
