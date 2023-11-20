import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CourseCard = ({ course }: { course: string }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-bold">{course}</CardTitle>
        <span className="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">
          Tag
        </span>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-muted-foreground">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae in
          earum omnis quis quo! Ut fugit fuga id vero minima. Laudantium
          pariatur quis assumenda velit asperiores fuga corporis est commodi!
        </p>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
