import * as strapiStudentAPI from './student';
import * as strapiCollegeAPI from './college';

let datasource = { ...strapiStudentAPI, ...strapiCollegeAPI };

export default datasource;




