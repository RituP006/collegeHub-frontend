import { useState } from "react";
import {
  sortCollegesByNameAscending,
  sortByPopularity,
  sortCollegesByYearFoundedAsc,
  sortCollegesByYearFoundedDesc,
} from "../../lib/utils";
import { College } from "@/lib/types";

const CollegeSortForm = ({
  college,
  setDisplayCollege,
}: {
  college: College[];
  setDisplayCollege: any;
}) => {
  const [sortby, setSortby] = useState("name");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();

    const newSortby = e.target.value;
    console.log(newSortby);

    let sortedCollege: College[] = [];

    switch (newSortby) {
      case "name":
        sortedCollege = sortCollegesByNameAscending(college);
        break;
      case "yearFounded-des":
        sortedCollege = sortCollegesByYearFoundedDesc(college);
        break;
      case "yearFounded-asc":
        sortedCollege = sortCollegesByYearFoundedAsc(college);
        break;
      case "popular":
        sortedCollege = sortByPopularity(college);
        break;
      default:
        sortedCollege = college;
    }

    setDisplayCollege(sortedCollege);
    setSortby(newSortby);
  };

  const options = [
    { value: "name", display: "Name" },
    { value: "yearFounded-asc", display: "Year-Asc" },
    { value: "yearFounded-des", display: "Year-Desc" },
    { value: "popular", display: "Popular" },
  ];

  return (
    <div>
      {/* Sort */}
      <div className="flex items-center space-x-2">
        <label
          htmlFor="sorting"
          className="block text-sm font-sm text-gray-500 italic w-full"
        >
          Sort By
        </label>
        <select
          id="sorting"
          name="sorting"
          onChange={handleChange}
          className="mt-1 block  pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-sm"
          defaultValue={sortby}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.display}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CollegeSortForm;
