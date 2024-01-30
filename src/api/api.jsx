import axios from 'axios';

const baseURL = 'http://www.omdbapi.com/?apikey=3b54b69a&type=movie&s=';


export const fetchData = async (query) => {
  try {
    const response = await axios.get(baseURL + query);
    return response.data;
  } catch (error) {
    throw error;
  }
};
