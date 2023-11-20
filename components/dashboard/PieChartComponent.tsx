"use client";

import useGetCollege from "@/hooks/useCollege";
import React, { useEffect, useState } from "react";
import { PieChart, Pie, ResponsiveContainer, Tooltip } from "recharts";
import LoadingSpinner from "../ui/LoadingSpinner";

const PieChartComponent = () => {
  const data01 = [
    {
      name: "Group A",
      value: 400,
    },
    {
      name: "Group B",
      value: 300,
    },
    {
      name: "Group C",
      value: 300,
    },
    {
      name: "Group D",
      value: 200,
    },
    {
      name: "Group E",
      value: 278,
    },
    {
      name: "Group F",
      value: 189,
    },
  ];
  const { isFetchingData, colleges } = useGetCollege();
  const [pieChartData, setPieChartData] =
    useState<{ name: string; value: number }[]>();

  useEffect(() => {
    const data = colleges.map((college) => ({
      name: college.name,
      value: college.students.length,
    }));
    setPieChartData(data);
  }, [colleges]);

  if (isFetchingData) return <LoadingSpinner customMessage="fetching data.." />;

  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart width={730} height={300}>
        <Pie
          data={pieChartData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
