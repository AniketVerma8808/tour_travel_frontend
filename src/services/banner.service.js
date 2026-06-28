import { apiClient } from "../api/api";


export const getAllBannersService = async () => {
  return await apiClient.get("/banners");
};
