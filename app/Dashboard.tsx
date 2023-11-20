import TopBar from "@/components/dashboard/TopBar";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Overview from "@/components/dashboard/Overview";
import CollegeMainPage from "@/components/college/CollegeMainPage";
import AllCourses from "@/components/course/AllCourses";

const Dashboard = () => {
  return (
    <div className="p-5">
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Dashboard</TabsTrigger>
          <TabsTrigger value="colleges">Colleges</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="notifications" disabled>
            Explore
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Overview />
        </TabsContent>
        <TabsContent value="colleges">
          <CollegeMainPage />
        </TabsContent>
        <TabsContent value="courses">
          <AllCourses />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
