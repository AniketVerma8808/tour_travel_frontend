import { apiClient } from "../api/api";

/* Get all packages */
export const getAllPackagesService = (filters = {}) =>
  apiClient.get("/packages", {
    params: filters,
  });

/* Get Package Details By Slug */
export const getPackageBySlugService = (slug) =>
  apiClient.get(`/packages/${slug}`);

export const getPackageFiltersService = () =>
    apiClient.get("/packages/filters");