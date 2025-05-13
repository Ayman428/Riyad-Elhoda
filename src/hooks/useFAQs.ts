import { useQuery } from "@tanstack/react-query";
import apiClient from "../utils/api-client";
import { AxiosError } from "axios";
import { useTranslation } from "react-i18next";

interface FAQ {
    question: string;
    answer: string;
}

interface FaqsResponse {
    data: FAQ[];
    status: string;
    error?: string;
    code: number;
}

const useFaqs = () => {
    const { i18n } = useTranslation();

    return useQuery<FaqsResponse, AxiosError>({
        queryKey: ["faqs", i18n.language],
        queryFn: async () => {
            const response = await apiClient.get("/api/frontend/faqs", {
                headers: { "Accept-Language": i18n.language },
            });
            return response.data;
        },
        staleTime: 1000 * 60 * 5,
    });
};

export default useFaqs;