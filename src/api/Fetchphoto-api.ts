import axios, { AxiosRequestHeaders } from "axios";
import { ApiResponse } from '../types';

const ACCESS_KEY = "Z_Up2mg88R0ZPYkYxp_-rtaj90toor0Vz0Ss24xcspk";

const headers: AxiosRequestHeaders = {
  Authorization: `Client-ID ${ACCESS_KEY}`,
  "Accept-Version": "v1",
};

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers = headers;

const fetchPhotos = async (
  query: string,
  page: number,
  perPage: number = 9,
  orientation: "landscape" | "portrait" | "squarish" = "landscape"
): Promise<ApiResponse> => {
  try {
    const response = await axios.get("/search/photos", {
      params: {
        query,
        page,
        per_page: perPage,
        orientation,
      },
    });

    return response.data; 
  } catch (error) {
    console.error("Error fetching photos:", error.response || error.message);
    throw error;
  }
};

export default fetchPhotos;
