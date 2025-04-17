import { useQuery } from "@tanstack/react-query";
import apiClient from "../utils/api-client";
import { useTranslation } from "react-i18next";

interface Phones {
    phones: string[];
    mobiles: string[];
}

interface SocialMedia {
    linkedin?: string;
    facebook?: string;
    twitter?: string;
    tiktok?: string;
    instagram?: string;
}

interface SettingsData {
    id: number;
    title: string;
    address: string;
    phones: Phones;
    social_media: SocialMedia;
    long: string;
    lat: string;
    email: string;
}

const fetchSettings = async (): Promise<SettingsData> => {
    const response = await apiClient.get("/api/frontend/settings/list");
    return response.data.data;
};

export const useSettings = () => {
    const { i18n } = useTranslation();
    return useQuery<SettingsData, Error>({
        queryKey: ["settings", i18n.language],
        queryFn: fetchSettings,
    });
};
