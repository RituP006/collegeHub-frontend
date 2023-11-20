"use client";
import React, { useContext, useEffect, useState } from "react";
import datasource from "@/datalayer/strapi";
import CollegeCard from "../ui/college/CollegeCard";
import { College } from "@/lib/types";
import CollegeSideBarForm from "./CollegeSideBarForm";
import SearchCollege from "./SearchCollege";
import CollegeSortForm from "./CollegeSortForm";
import LoadingSpinner from "../ui/LoadingSpinner";
import { useCollegeContext } from "@/context/CollegeContext";

const CollegeMainPage = () => {
  const {
    college,
    setCollege,
    isLoading,
    filteredCollege,
    setFilteredCollege,
  } = useCollegeContext();
  useEffect(() => {}, []);

  const handleSkillTagDelete = (e: any, skillTag: any) => {
    e.preventDefault();
    // setSideBarFormState((prevState) => {
    //   return {
    //     ...prevState,
    //     selectedTags: prevState.selectedTags.filter((tag) => skillTag != tag),
    //   };
    // });
  };

  return (
    <div className="flex flex-col space-y-10 sm:flex-row sm:space-x-6 sm:space-y-0 md:flex-col md:space-x-0 md:space-y-10 xl:flex-row xl:space-x-6 xl:space-y-0 mt-9">
      <CollegeSideBarForm />
      <div className="w-full">
        <SearchCollege
          searchFormState={""}
          setSearchFormState={""}
          setDisplayedJobs={""}
        />
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm text-slate-500 italic">
            {filteredCollege.length} Colleges found
          </div>
          <CollegeSortForm
            college={college}
            setDisplayCollege={setFilteredCollege}
          />
        </div>
        <div>
          <h1>Colleges</h1>
          <div>
            {isLoading ? (
              <LoadingSpinner
                customMessage={"Wait up champ loading your future college!"}
              />
            ) : (
              filteredCollege.map((collg) => (
                <CollegeCard college={collg} key={collg.slug} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeMainPage;
