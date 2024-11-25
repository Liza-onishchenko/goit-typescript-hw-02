import axios from "axios";
import { Image } from "../App/App.types";

const API_URL = "https://api.unsplash.com/search/photos";
const API_KEY = "p-KneI8TdaSm99apI5aZDGW318R-sIwwT9UPKvsHlwM";

interface ApiResponse {
  results: Image[];
  total_pages: number;
}

export const fetchImages = async (
  query: string,
  page: number
): Promise<ApiResponse> => {
  const response = await axios.get(API_URL, {
    params: {
      query, //пошуковий термін
      page, //номер стр
      per_page: 12, //кіль-сть еле-тів на стр
      client_id: API_KEY,
    },
  });
  return response.data;
};
