import axios from "axios";
const BASE_URL = 'https://api.yeatwork.ru';

export async function getCollectionById(id:number) {
  const response = await axios.get(`${BASE_URL}/collections/${id}/public`);

  return response.data;
}