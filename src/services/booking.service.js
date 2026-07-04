
import { apiClient } from "../api/api";

export const createBookingService = (data) =>
  apiClient.post("/booking/create", data);