import { apiClient } from "../api/api";

// create review

export const createInquiriesService = async (data) => {
  return apiClient.post("/inquiry/create", data);
};
