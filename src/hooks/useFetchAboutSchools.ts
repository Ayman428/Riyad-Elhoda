import { useQuery } from "@tanstack/react-query";
import apiClient from "../utils/api-client";
import { useTranslation } from "react-i18next";

export interface AboutSchool {
  name: string;
  title: string;
  text: string;
  image: string;
}

export const getAboutSchool = async () => {
  const res = await apiClient.get<{ data: AboutSchool[] }>(
    "/api/frontend/staticPages"
  );
  console.log("SchoolVision =>", res.data);
  return res.data.data; // Access the 'data' array from the API response
};

export const useFetchAboutSchools = () => {
  const { i18n } = useTranslation();
  return useQuery({
    queryKey: ["SchoolVision", i18n.language],
    queryFn: getAboutSchool,
    staleTime: 0, // Data will be considered fresh for 5 minutes
    retry: 3, // Retry the request up to 3 times on failure
    refetchOnWindowFocus: false, // Disable refetch when the window regains focus
  });
};
