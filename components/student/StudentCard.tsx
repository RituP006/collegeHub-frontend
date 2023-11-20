import React from "react";
import User from "../../public/images/user.png";
import Image from "next/image";

const StudentCard = ({ student }: { student: any }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10">
        <Image
          className="w-24 h-24 mb-3 rounded-full shadow-lg bg-cover"
          src={User}
          alt={student.name}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {student.name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {`With us from ${student.batchYear}`}
        </span>
        <div className="flex mt-4 md:mt-6 mx-5">
          {student.skills !== null && student.skills.length > 0 ? (
            student.skills
              .split(",")

              .map((skill: string) => {
                return (
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400">
                    {skill}
                  </span>
                );
              })
          ) : (
            <h1>Skills not listed</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
