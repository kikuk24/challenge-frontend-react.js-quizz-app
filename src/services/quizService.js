import axios from 'axios';

export const fetchQuestions = async (amount = 10, type = 'multiple') => {
  const response = await axios.get(`https://opentdb.com/api.php?amount=${amount}&type=${type}`);
  return response.data.results;
};
