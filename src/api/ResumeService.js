import axios from "axios";

export const baseURLL = "http://localhost:8080";

export const axiosInstance = axios.create({
  baseURL: baseURLL,
});

export const generateResume = async (description) => {
  const response = await axiosInstance.post(
    "/analyze",
    { userDescription: description },
    { headers: { "Content-Type": "application/json" } }
  );

  if (typeof response.data === "string") {
    return JSON.parse(response.data);
  }
  return response.data;
};



