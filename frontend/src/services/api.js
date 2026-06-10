import axios from "axios";

const API_URL =
  "http://localhost:5000/api";

export const getRecommendation = async (
  formData
) => {
  const response = await axios.post(
    `${API_URL}/recommend`,
    formData
  );

  return response.data;
};

export const getSubmissions = async () => {
  const response = await axios.get(
    `${API_URL}/submissions`
  );

  return response.data;
};