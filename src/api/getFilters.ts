import axios from "axios";

const BASE_URL = 'https://api.yeatwork.ru';

export interface Filter {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageSrc: string;
}

interface ApiResponse<T> {
  data: T;
}

export async function getFiltersItems(endpoint:string): Promise<Filter[]> {

  const response = await axios.get<ApiResponse<Filter[]>>(`${BASE_URL}/${endpoint}`);
  return response.data.data;
}