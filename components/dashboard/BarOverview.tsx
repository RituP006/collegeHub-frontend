"use client";

import useGetCollege from "@/hooks/useCollege";
import { Courses } from "@/lib/types";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import LoadingSpinner from "../ui/LoadingSpinner";

export function BarOverview() {
  const { isFetchingData, colleges } = useGetCollege();
  const [barGraphData, setBarGraphData] =
    useState<{ name: string; total: number }[]>();
  const uniqueCourses = Courses;

  useEffect(() => {
    const data = uniqueCourses.map((course) => ({
      name: course.name,
      displayName: course.desc,
      total: colleges.filter((college) =>
        (college.courses as string[]).includes(course.desc)
      ).length,
    }));
    setBarGraphData(data);
  }, [colleges]);

  if (isFetchingData) return <LoadingSpinner customMessage="fetching data.." />;

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={barGraphData}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          color="#2563eb"
          tickFormatter={(value) => value}
        />
        <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
