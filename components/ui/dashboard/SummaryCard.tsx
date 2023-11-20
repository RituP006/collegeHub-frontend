"use client";

import React, { useEffect, useState } from "react";
import IndiaFlag from "../../../public/svg/India.svg";
import GermanyFlag from "../../../public/svg/Germany.svg";
import CanadaFlag from "../../../public/svg/Canada.svg";
import USAFlag from "../../../public/svg/USA.svg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import useCollege from "@/hooks/useCollege";
import LoadingSpinner from "../LoadingSpinner";

const SummaryCard = ({ title }: { title: string }) => {
  const { getNumberOfCollegeInCountry, colleges, isFetchingData } =
    useCollege();
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const num = getNumberOfCollegeInCountry(title);
    setNumber(num);
  }, [colleges]);

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          {title === "Germany" ? (
            <Image priority src={GermanyFlag} alt={title} />
          ) : title === "India" ? (
            <Image priority src={IndiaFlag} alt={title} />
          ) : title === "Canada" ? (
            <Image priority src={CanadaFlag} alt={title} />
          ) : (
            <Image priority src={USAFlag} alt={title} />
          )}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {isFetchingData ? <LoadingSpinner customMessage="" /> : number}
          </div>
          <p className="text-xs text-muted-foreground">
            Top Colleges in {title}
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default SummaryCard;
