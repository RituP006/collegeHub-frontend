import datasource from "@/datalayer/strapi";
import { College } from "@/lib/types";
import { mapCollege } from "@/lib/utils";
import React, { useEffect, useState } from "react";

const useGetCollege = () => {
  const [colleges, setColleges] = useState<College[]>([]);
  const [isFetchingData, setIsFetchingData] = useState(false);

  useEffect(() => {
    setIsFetchingData(true);
    const fetchData = async () => {
      const data = await datasource.getAllColleges();
      const collegeList = data.map((item: any) => mapCollege(item));
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
