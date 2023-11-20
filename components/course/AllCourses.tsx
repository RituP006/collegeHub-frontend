"use client";

import datasource from "@/datalayer/strapi";
import React, { useEffect, useState } from "react";
import LoadingSpinner from "../ui/LoadingSpinner";
import CourseCard from "./CourseCard";
import { Course } from "@/lib/types";

const AllCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const data = await datasource.getAllCourses();
      const coursesList: Course[] = data.map((item: any) => ({
        id: item.id,
        attributes: {
          courseName: item.attributes.courseName,
          createdAt: item.attributes.createdAt,
          updatedAt: item.attributes.updatedAt,
          publishedAt: item.attributes.publishedAt,
        },
      }));
      setCourses(coursesList);
      setIsLoading(false);
    };

    fetchData();
  }, []);
  return (
    <div className="container mt-4 mx-auto">
      {isLoading ? (
        <LoadingSpinner customMessage="Loading Courses" />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {courses.map((course) => (
            <CourseCard course={course.attributes.courseName} key={course.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllCourses;
