import axios from "axios";
export default function apiHandler(token = null) {
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    ...(token
      ? {
          headers: {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
          },
        }
      : {}),
  });

  return axiosInstance;
}