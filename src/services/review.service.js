import { apiClient } from "../api/api";

// create review

export const createReviewService = async (data) => {
  return apiClient.post("/review/create", data);
};

export const getApprovedReviewsService = async () => {
  return apiClient.get("/review/approved");
};
