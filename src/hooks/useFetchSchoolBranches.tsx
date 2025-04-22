import { useQuery } from "@tanstack/react-query";
import apiClient from "../utils/api-client";
import { useTranslation } from "react-i18next";

interface PhoneNumbers {
  phones?: (string | null)[];
  mobiles?: (string | null)[];
}

interface SocialMediaLinks {
  facebook?: string;
  x?: string; // Twitter
  tiktok?: string;
  linkedin?: string;
  instagram?: string;
}

interface schoolData {
  id: number;
  title: string;
  notes: string;
  address: string;
  phones: PhoneNumbers;
  social_media: SocialMediaLinks;
  long: string;
  lat: string;
  email: string;
  video_url: string | null;
  video_uploaded_url: string;
}

export const getSchoolBranches = async () => {
  const res = await apiClient.get<{ data: schoolData[] }>(
    "/api/frontend/settings/list"
  );
  console.log("schoolBranches =>", res.data.data);
  return res.data.data; // Access the 'data' array from the API response
};

export const useFetchSchoolBranches = () => {
  const { i18n } = useTranslation();
  return useQuery({
    queryKey: ["schoolBranches", i18n.language],
    queryFn: getSchoolBranches,
    staleTime: 0, // Data will be considered fresh for 5 minutes
    retry: 3, // Retry the request up to 3 times on failure
    refetchOnWindowFocus: false, // Disable refetch when the window regains focus
  });
};
