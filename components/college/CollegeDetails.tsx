"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import CollegeBg from "../../public/images/college-bg.png";
import CollegeLogo from "../../public/images/college-logo1.png";
import { College } from "@/lib/types";
import datasource from "@/datalayer/strapi";
import LoadingSpinner from "../ui/LoadingSpinner";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import StudentCard from "../student/StudentCard";

const CollegeDetails = ({ slug }: { slug: string }) => {
  const [college, setCollege] = useState<College | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    console.log(slug);
    fetchData();
  }, []);

  const goBack = () => {
    router.back();
  };

  async function fetchData() {
    setIsLoading(true);
    const data = await datasource.getCollegeBySlug(slug);

    console.log(data.attributes);
    setCollege({
      city: data.attributes.city,
      country: data.attributes.country,
      createdAt: data.attributes.createdAt,
      name: data.attributes.name,
      publishedAt: data.attributes.publishedAt,
      rate: data.attributes.rate,
      slug: data.attributes.slug,
      state: data.attributes.state,
      updatedAt: data.attributes.updatedAt,
      yearFounded: data.attributes.yearFounded,
      courses: data.attributes.courses.data.map(
        (item: any) => item.attributes.courseName
      ),
      students: data.attributes.students.data.map(
        (item: any) => item.attributes
      ),
    });
    setIsLoading(false);
  }

  if (isLoading || !college)
    return <LoadingSpinner customMessage="Loading college data ..." />;
  return (
    <>
      <div className="flex justify-start p-5">
        <Button onClick={goBack}>
          <div className="flex flex-row align-middle">
            <svg
              className="w-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <p className="ml-2">Back</p>
          </div>
        </Button>
      </div>
      <main className="bg-white">
        <div className="h-20 md:56 bg-slate-200">
          <Image
            className="object-cover h-full w-full"
            src={CollegeBg}
            alt={"cover image"}
          />
        </div>

        {/* Header */}
        <header className="text-center bg-slate-50 pb-6 border-b border-slate-200">
          <div className="px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl mx-auto">
              {/* Avatar */}
              <div className="-mt-12 mb-2">
                <div className="inline-flex -ml-1 -mt-1 sm:mb-0">
                  <Image
                    className="rounded-full border-4 border-white"
                    src={CollegeLogo}
                    width={80}
                    height={80}
                    alt="Logo"
                  />
                </div>
              </div>

              <div className="mb-4">
                <h2 className="text-2xl text-slate-800 font-bold mb-2">
                  {college.name}
                </h2>
                <p>Get best education and shape your future!</p>
              </div>

              <div className="inline-flex flex-wrap justify-center sm:justify-start space-x-4">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 fill-current shrink-0 text-slate-400"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8.992a2 2 0 1 1-.002-3.998A2 2 0 0 1 8 8.992Zm-.7 6.694c-.1-.1-4.2-3.696-4.2-3.796C1.7 10.69 1 8.892 1 6.994 1 3.097 4.1 0 8 0s7 3.097 7 6.994c0 1.898-.7 3.697-2.1 4.996-.1.1-4.1 3.696-4.2 3.796-.4.3-1 .3-1.4-.1Zm-2.7-4.995L8 13.688l3.4-2.997c1-1 1.6-2.198 1.6-3.597 0-2.798-2.2-4.996-5-4.996S3 4.196 3 6.994c0 1.399.6 2.698 1.6 3.697 0-.1 0-.1 0 0Z" />
                  </svg>
                  <span className="text-sm font-medium whitespace-nowrap text-slate-500 ml-2">
                    {college.city}
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 fill-current shrink-0 text-slate-400"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0ZM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12Zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2Z" />
                  </svg>
                  <a
                    className="text-sm font-medium whitespace-nowrap text-indigo-500 hover:text-indigo-700 ml-2"
                    href="#"
                  >
                    {college.name}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full ">
          <div className="flex">
            <div className="flex-1 border-gray-400">
              <h3 className="text-xl leading-snug text-slate-800 font-bold mb-6">
                Vision
              </h3>
              <p className="text-sm text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                nulla suscipit quasi, iure velit quis voluptatum ab. Quidem
                laboriosam fuga saepe quos consectetur esse autem ullam dolores
                nesciunt voluptatem. Voluptatem!
              </p>
            </div>
            <div className="flex-1">
              <h3 className="text-xl leading-snug text-slate-800 font-bold mb-6">
                Courses Offered
              </h3>
              {college.courses.length > 0
                ? college.courses.map((course, index) => {
                    return (
                      <Badge
                        variant="outline"
                        key={index}
                        className="m-2 bg-slate-400 text-white p-2"
                      >
                        {course}
                      </Badge>
                    );
                  })
                : "No Courses Available"}
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-center text-xl leading-snug text-slate-800 font-bold mb-6">
            Our Top Performers
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {college.students.length > 0 ? (
              college.students.map((stud) => {
                return <StudentCard student={stud} />;
              })
            ) : (
              <h2>No Student found</h2>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default CollegeDetails;
