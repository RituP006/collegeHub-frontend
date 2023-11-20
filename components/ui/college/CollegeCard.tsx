import { College } from "@/lib/types";
import React from "react";
import Image from "next/image";
import CollegeLogo from "../../../public/images/college-logo.png";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const CollegeCard = ({ college }: { college: College }) => {
  const { name, yearFounded, city, country, rate, slug, createdAt } = college;
  console.log(college);

  return (
    <Link href={`/college/${slug}`} legacyBehavior>
      <div
        className={`shadow-lg rounded-sm border px-5 py-4 cursor-pointer hover:bg-slate-100 ${"bg-white border-slate-200"}`}
      >
        <div className="md:flex justify-between items-center space-y-4 md:space-y-0 space-x-2">
          <div className="flex items-start space-x-3 md:space-x-4">
            <div className="w-9 h-9 shrink-0 mt-1">
              <Image
                className="w-9 h-9 rounded-full"
                src={CollegeLogo}
                width="200"
                height="200"
                alt={name}
              />
            </div>
            <div>
              <a
                className="inline-flex font-semibold text-slate-800"
                href={`/college/${slug}`}
              >
                {name}
              </a>

              <div className="text-sm text-slate-500">
                {city} , {country} {`founded in ${yearFounded}`}
              </div>
            </div>
          </div>
          {/* Right side */}
          <div className="flex flex-col space-y-1 items-end">
            <div className="flex text-sm text-slate-900">
              <FaStar name="star" size={15} style={{ color: "#ecc33c" }} />
              {rate} / 5.0
            </div>
            <div className="flex items-center space-x-4 pl-10 md:pl-0">
              <div className="text-sm text-slate-500 italic whitespace-nowrap">
                {createdAt}
              </div>
              {/* {job.featuredJob && (
              <div
                className={`text-xs inline-flex font-medium rounded-full text-center px-2.5 py-1 bg-amber-100 text-amber-600`}
              >
                Featured
              </div>
            )} */}
              <button className="text-slate-300 hover:text-slate-400">
                <span className="sr-only">Bookmark</span>
                <svg
                  className="w-3 h-4 fill-current"
                  width="12"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 0C.9 0 0 .9 0 2v14l6-3 6 3V2c0-1.1-.9-2-2-2H2Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CollegeCard;
