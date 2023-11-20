import * as strapiStudentAPI from "./student";
import * as strapiCollegeAPI from "./college";
import * as strapiCoursesAPI from "./courses";

let datasource = {
  ...strapiStudentAPI,
  ...strapiCollegeAPI,
  ...strapiCoursesAPI,
};

export default datasource;
