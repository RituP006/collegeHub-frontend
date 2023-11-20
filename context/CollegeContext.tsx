"use client";

import useCollege from "@/hooks/useCollege";
import { College } from "@/lib/types";
import { createContext, useState, useEffect, useContext } from "react";

const INITIAL_STATE = {
  college: [],
  isLoading: false,
  filteredCollege: [],
  setCollege: () => {},
  setFilteredCollege: () => {},
};

type CollegeContextType = {
  college: College[];
  filteredCollege: College[];
  isLoading: boolean;
  setCollege: React.Dispatch<React.SetStateAction<College[]>>;
  setFilteredCollege: React.Dispatch<React.SetStateAction<College[]>>;
};
const CollegeContext = createContext<CollegeContextType>(INITIAL_STATE);

export function CollegeProvider({ children }: { children: React.ReactNode }) {
  const [college, setCollege] = useState<College[]>(INITIAL_STATE.college);
  const [filteredCollege, setFilteredCollege] = useState<College[]>(
    INITIAL_STATE.college
  );

  const [isLoading, setIsLoading] = useState(false);

  const { colleges, isFetchingData } = useCollege();

  useEffect(() => {
    setCollege(colleges);
    setFilteredCollege(colleges);
    setIsLoading(isFetchingData);
  }, [colleges]);

  const value = {
    college,
    setCollege,
    isLoading,
    filteredCollege,
    setFilteredCollege,
  };

  return (
    <CollegeContext.Provider value={value}>{children}</CollegeContext.Provider>
  );
}

export const useCollegeContext = () => useContext(CollegeContext);
