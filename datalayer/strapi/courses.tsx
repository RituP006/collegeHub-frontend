import axios from "axios";
import qs from "qs";

const apiUrl = "http://localhost:1337/api";

export const getAllCourses = async () => {
  try {
    const response = await axios.get(`${apiUrl}/courses`);
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching Courses:", error);
    return [];
  }
};

export const getCourseByCollegeId = async ({ id }: { id: any }) => {
  const query = qs.stringify(
    {
      filters: {
        company: {
          id: {
            $eq: id,
          },
        },
      },
      populate: ["company", "company.logo", "company.coverImage", "skillsTags"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await axios.get(`http://localhost:1337/api/colleges?${query}`);
  return res.data.data;
};
