import { apiRequest } from "../apiRequest";

export const getIPData = async (ipAddress: string) => {
  return apiRequest(
    "get",
    `country,city?apiKey=${import.meta.env.VITE_API_KEY}&ipAddress=${ipAddress}`
  );
};
