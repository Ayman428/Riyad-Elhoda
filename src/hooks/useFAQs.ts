import { useQuery } from "@tanstack/react-query";
import apiClient from "../utils/api-client";
import { AxiosError } from "axios";

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

const useFaqs = (language: string) => {
    return useQuery<FaqsResponse, AxiosError>({
        queryKey: ["faqs", language],
        queryFn: async () => {
            const response = await apiClient.get("/api/frontend/faqs", {
                headers: { "Accept-Language": language },
            });
            return response.data;
        },
    });
};

export default useFaqs;
