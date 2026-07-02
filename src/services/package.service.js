import { apiClient } from "../api/api";

/* Get all packages */
export const getAllPackagesService = (params = {}) =>
  apiClient.get("/packages", { params });


/* Get Package Details By Slug */
export const getPackageBySlugService = (slug) =>
  apiClient.get(`/packages/${slug}`);