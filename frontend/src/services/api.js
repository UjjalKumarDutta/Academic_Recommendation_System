import axios from "axios";

const API_URL =
  "https://academic-recommendation-system-bqdj.onrender.com/api";

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