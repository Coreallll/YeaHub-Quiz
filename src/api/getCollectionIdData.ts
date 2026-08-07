import axios from "axios";
const BASE_URL = 'https://api.yeatwork.ru';

export async function getCollectionById(id:number, signal?: AbortSignal) {
  const response = await axios.get(`${BASE_URL}/collections/${id}/public`, {signal});

  return response.data;
}