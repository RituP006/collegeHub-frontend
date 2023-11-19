import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarOverview } from "./BarOverview";

const Overview = () => {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">India</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 16"
              fill="#000080"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-muted-foreground"
            >
              <rect width="24" height="5.33" fill="#FF9933" />

              <rect y="5.33" width="24" height="5.33" fill="#FFFFFF" />

              <rect y="10.66" width="24" height="5.33" fill="#138808" />

              <circle cx="12" cy="8" r="2.66" fill="#000080" />

              <g fill="#FFFFFF">
                <rect x="11.33" y="1.07" width="0.53" height="2.66" />
                <rect x="11.33" y="10.26" width="0.53" height="2.66" />
                <rect
                  x="9.57"
                  y="2.19"
                  width="0.53"
                  height="2.66"
                  transform="rotate(15 12 8)"
                />
                <rect
                  x="14.42"
                  y="6.71"
                  width="0.53"
                  height="2.66"
                  transform="rotate(15 12 8)"
                />
              </g>
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
            Top Colleges in India 
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">USA</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 16"
              fill="#B22234"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-muted-foreground"
            >
              <rect width="24" height="1.07" fill="#B22234" />
              <rect y="1.07" width="24" height="1.07" fill="#FFFFFF" />
              <rect y="2.14" width="24" height="1.07" fill="#B22234" />
              <rect y="3.21" width="24" height="1.07" fill="#FFFFFF" />
              <rect y="4.28" width="24" height="1.07" fill="#B22234" />
              <rect y="5.35" width="24" height="1.07" fill="#FFFFFF" />
              <rect y="6.42" width="24" height="1.07" fill="#B22234" />
              <rect y="7.49" width="24" height="1.07" fill="#FFFFFF" />
              <rect y="8.56" width="24" height="1.07" fill="#B22234" />
              <rect y="9.63" width="24" height="1.07" fill="#FFFFFF" />
              <rect y="10.7" width="24" height="1.07" fill="#B22234" />
              <rect y="11.77" width="24" height="1.07" fill="#FFFFFF" />
              <rect y="12.84" width="24" height="1.07" fill="#B22234" />

              <rect x="0" y="0" width="8" height="7.5" fill="#3C3B6E" />

              <circle cx="1.5" cy="1.5" r="0.25" fill="#FFFFFF" />
              <circle cx="3" cy="1.5" r="0.25" fill="#FFFFFF" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">
            Top Colleges in USA 
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Canada</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 16"
              fill="#FF0000"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-muted-foreground"
            >
              <rect width="4" height="16" fill="#FF0000" />

              <rect x="4" width="4" height="16" fill="#FFFFFF" />

              <rect x="8" width="4" height="16" fill="#FF0000" />

              <rect x="12" width="4" height="16" fill="#FFFFFF" />

              <rect x="16" width="4" height="16" fill="#FF0000" />

              <rect x="20" width="4" height="16" fill="#FFFFFF" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
            <p className="text-xs text-muted-foreground">
              Top Colleges in Canada 
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Germany</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 16"
              fill="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-muted-foreground"
            >
              <rect width="24" height="5.33" fill="#000000" />

              <rect y="5.33" width="24" height="5.33" fill="#FF0000" />

              <rect y="10.66" width="24" height="5.33" fill="#FFD100" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">
            Top Colleges in Germany 
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2"><BarOverview/></CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>{/* <RecentSales /> */}</CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Overview;
