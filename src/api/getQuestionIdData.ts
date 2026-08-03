import axios from "axios";
const BASE_URL = 'https://api.yeatwork.ru';

export async function getQuestionById(questionId: number) {
  const response = await axios.get(`${BASE_URL}/questions/public-questions/${questionId}`);

  return response.data;
}