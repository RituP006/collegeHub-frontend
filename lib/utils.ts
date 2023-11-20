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

export const mapCollege = (data: any) => {
  const college = {
    city: data.attributes.city,
    country: data.attributes.country,
    createdAt: data.attributes.createdAt,
    name: data.attributes.name,
    publishedAt: data.attributes.publishedAt,
    rate: data.attributes.rate,
    slug: data.attributes.slug,
    state: data.attributes.state,
    updatedAt: data.attributes.updatedAt,
    yearFounded: data.attributes.yearFounded,
    courses: data.attributes.courses.data.map(
      (data: any) => data.attributes.courseName
    ),
    students: data.attributes.students.data.map((data: any) => data.attributes),
  };

  return college;
};
