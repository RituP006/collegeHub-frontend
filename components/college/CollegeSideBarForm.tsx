import React, { useContext } from "react";
import CourseTagFilter from "./CourseTagFilter";
import { useCollegeContext } from "@/context/CollegeContext";

const CollegeSideBarForm = () => {
  return (
    <div className="w-1/3">
      <div className="bg-white shadow-lg rounded-sm border border-slate-200 p-5">
        <div className="grid md:grid-cols-2 xl:grid-cols-1 gap-6">
          <CourseTagFilter />
        </div>
      </div>
    </div>
  );
};

export default CollegeSideBarForm;
