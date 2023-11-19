import TopBar from '@/components/dashboard/TopBar';
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Overview from '@/components/dashboard/Overview';
import College from '@/components/college/College';


const Index = () => {
  return (
    <div className='p-5'>
      <TopBar/>
      <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Dashboard</TabsTrigger>
              <TabsTrigger value="colleges">
                Colleges
              </TabsTrigger>
              <TabsTrigger value="reports" disabled>
                Courses
              </TabsTrigger>
              <TabsTrigger value="notifications" disabled>
                Explore
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <Overview/>
            </TabsContent>
            <TabsContent value='colleges'><College/></TabsContent>
          </Tabs>
    </div>
  )
}

export default Index;