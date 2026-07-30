import axios from "axios";
const BASE_URL = 'https://api.yeatwork.ru';

export async function getQuestionById(id: number) {
  const response = await axios.get(`${BASE_URL}/questions/public-questions/${id}`);

  return response.data;
}