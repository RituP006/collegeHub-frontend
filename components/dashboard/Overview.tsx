import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarOverview } from "./BarOverview";
import IndiaFlag from "../../public/svg/India.svg";
import GermanyFlag from "../../public/svg/Germany.svg";
import CanadaFlag from "../../public/svg/Canada.svg";
import USAFlag from "../../public/svg/USA.svg";
import Image from "next/image";
import PieChartComponent from "./PieChartComponent";
import SummaryCard from "../ui/dashboard/SummaryCard";

const Overview = () => {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <SummaryCard title="India" />
        <SummaryCard title="USA" />
        <SummaryCard title="Germany" />
        <SummaryCard title="Canada" />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Top Engineering Branches</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <BarOverview />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Top Colleges</CardTitle>
            <CardDescription>
              Choose your future with top colleges
            </CardDescription>
          </CardHeader>
          <CardContent>
            <PieChartComponent />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Overview;
