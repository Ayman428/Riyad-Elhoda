import { useQuery } from "@tanstack/react-query";
import apiClient from "../utils/api-client";
import { AxiosError } from "axios";

interface Sponsor {
    id: number;
    logo: string;
}

interface SponsorsResponse {
    data: Sponsor[];
    status: string;
    error?: string;
    code: number;
}

const useSponsors = () => {
    return useQuery<SponsorsResponse, AxiosError>({
        queryKey: ["sponosrs"],
        queryFn: async () => {
            const response = await apiClient.get("/api/frontend/clients");
            return response.data;
        },
        staleTime: 1000 * 60 * 5,
    });
};

export default useSponsors;
