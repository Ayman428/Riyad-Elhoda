import { useQuery } from "@tanstack/react-query";
import apiClient from "../../src/utils/api-client";
import { useTranslation } from "react-i18next";

export interface AboutSchools {
  id: number;
  background: string;
  title: string;
  text: string;
  status: number;
  tags: string | null;
}

export const getAboutSchools = async (language: string) => {
  const res = await apiClient.get<{ data: AboutSchools[] }>(
    "/api/frontend/staticPages",
    {
      params: {
        lang: language,
      },
    }
  );
  console.log("AboutSchools =>", res.data.data);
  return res.data.data;
};

export const useFetchAboutSchools = () => {
  const { i18n } = useTranslation();

  return useQuery({
    queryKey: ["AboutSchools", i18n.language],
    queryFn: () => getAboutSchools(i18n.language), // Pass the current language
    staleTime: 0,
    retry: 3,
    refetchOnWindowFocus: false,
  });
};
