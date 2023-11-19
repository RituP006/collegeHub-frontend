import axios, { AxiosResponse } from 'axios';

const apiUrl = process.env.STRAPI_API_BASE_URL;


export const getAllColleges = async () => {
    try {
      const response = await axios.get(`${apiUrl}/colleges`);
      return response.data;
    } catch (error) {
      console.error('Error fetching colleges:', error);
      return [];
    }
  };