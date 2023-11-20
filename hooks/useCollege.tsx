import datasource from "@/datalayer/strapi";
import { College } from "@/lib/types";
import React, { useEffect, useState } from "react";

const useGetCollege = () => {
  const [colleges, setColleges] = useState<College[]>([]);
  const [isFetchingData, setIsFetchingData] = useState(false);

  useEffect(() => {
    setIsFetchingData(true);
    const fetchData = async () => {
      const data = await datasource.getAllColleges();
      const collegeList = data.map((item: any) => {
        return {
          city: item.attributes.city,
          country: item.attributes.country,
          createdAt: item.attributes.createdAt,
          name: item.attributes.name,
          publishedAt: item.attributes.publishedAt,
          rate: item.attributes.rate,
          slug: item.attributes.slug,
          state: item.attributes.state,
          updatedAt: item.attributes.updatedAt,
          yearFounded: item.attributes.yearFounded,
          courses: item.attributes.courses.data.map(
            (item: any) => item.attributes.courseName
          ),
          students: item.attributes.students.data.map(
            (item: any) => item.attributes
          ),
        };
      });
      console.log(collegeList);
      setColleges(collegeList);
      setIsFetchingData(false);
    };

    fetchData();
  }, []);

  function getNumberOfCollegeInCountry(country: string) {
    return colleges.filter((college) => college.country === country).length;
  }

  return {
    isFetchingData: isFetchingData,
    colleges: colleges,
    getNumberOfCollegeInCountry: getNumberOfCollegeInCountry,
  };
};

export default useGetCollege;
