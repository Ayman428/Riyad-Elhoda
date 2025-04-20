import { useQuery } from "@tanstack/react-query";
import apiClient from "../utils/api-client";
import { AxiosError } from "axios";
import { useTranslation } from "react-i18next";

interface Review {
    id: number;
    text: string;
    image: string;
}

interface ReviewResponse {
    data: Review[];
    status: string;
    error?: string;
    code: number;
}

const useReviews = () => {
    const { i18n } = useTranslation();
    return useQuery<ReviewResponse, AxiosError>({
        queryKey: ["reviews", i18n.language],
        queryFn: async () => {
            const response = await apiClient.get("/api/frontend/reviews");
            return response.data;
        },
        staleTime: 1000 * 60 * 5,
    });
};

export default useReviews;
