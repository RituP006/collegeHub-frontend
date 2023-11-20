import axios from "axios";
import qs from "qs";

// const apiUrl = process.env.STRAPI_API_BASE_URL;
const apiUrl = "http://localhost:1337/api";

export const getAllColleges = async () => {
  const query = qs.stringify(
    {
      populate: ["courses", "students"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  try {
    const response = await axios.get(`${apiUrl}/colleges?${query}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching colleges:", error);
    return [];
  }
};

export const getCollegesSlugs = async () => {
  const query = qs.stringify(
    {
      fields: ["slug"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await axios.get(`${apiUrl}/colleges?${query}`);
  const rawSlugs = res.data.data;

  const slugs = rawSlugs.map((rawSlug: any) => {
    return rawSlug.attributes.slug;
  });
  return slugs;
};

export const getCollegeBySlug = async (slug: string) => {
  const query = qs.stringify(
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: ["courses", "students"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await axios.get(`${apiUrl}/colleges?${query}`);
  const rawCollege = res.data.data[0];
  return rawCollege;
};
