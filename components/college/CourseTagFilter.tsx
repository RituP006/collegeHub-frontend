import { useCollegeContext } from "@/context/CollegeContext";
import { College, Courses } from "@/lib/types";
import React from "react";

const CourseTagFilter = () => {
  const courses = Courses;
  const { college, setFilteredCollege } = useCollegeContext();
  function filterCollege(course: string) {
    const filteredData = college.filter((collg) =>
      (collg.courses as string[]).includes(course)
    );
    setFilteredCollege(filteredData);
  }

  return (
    <div>
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
        Engineering Branches
      </h3>
      <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {courses.map((course) => {
          return (
            <li
              key={course.name}
              className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600"
            >
              <div className="flex items-center ps-3">
                <input
                  id="list-radio-license"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  onClick={() => {
                    filterCollege(course.desc);
                  }}
                />
                <label
                  htmlFor="list-radio-license"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {course.desc}
                </label>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CourseTagFilter;
