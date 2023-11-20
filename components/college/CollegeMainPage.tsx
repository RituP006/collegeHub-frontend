"use client";
import React, { useContext, useEffect, useState } from "react";
import CollegeCard from "../ui/college/CollegeCard";
import CollegeSideBarForm from "./CollegeSideBarForm";
import CollegeSortForm from "./CollegeSortForm";
import LoadingSpinner from "../ui/LoadingSpinner";
import { useCollegeContext } from "@/context/CollegeContext";
import { searchCollegeByKeys } from "@/datalayer/strapi/college";
import { Input } from "../ui/input";
import useDebounce from "@/hooks/useDebounce";
import { College } from "@/lib/types";

const CollegeMainPage = () => {
  const {
    college,
    setCollege,
    isLoading,
    filteredCollege,
    setFilteredCollege,
  } = useCollegeContext();

  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<College[]>([]);

  const debouncedSearch = useDebounce(searchValue, 500);

  useEffect(() => {
    searchCollegeByKeys(debouncedSearch).then((value: any) => {
      if (value !== undefined) {
        setSearchResults(value);
      }
    });
  }, [debouncedSearch]);

  return (
    <div className="flex flex-col space-y-10 sm:flex-row sm:space-x-6 sm:space-y-0 md:flex-col md:space-x-0 md:space-y-10 xl:flex-row xl:space-x-6 xl:space-y-0 mt-9">
      <CollegeSideBarForm />
      <div className="w-full">
        <div className="mb-5">
          <Input
            type="text"
            placeholder="Search"
            className="explore-search"
            value={searchValue}
            onChange={(e) => {
              const { value } = e.target;
              setSearchValue(value);
            }}
          />
        </div>
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
            ) : filteredCollege.length == 0 ? (
              <h4>No College Found</h4>
            ) : searchResults.length > 0 && searchValue ? (
              searchResults.map((collg) => (
                <CollegeCard college={collg} key={collg.slug} />
              ))
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
