import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import apiClient from "../utils/api-client";

interface UseContactForm {
  name: string;
  email: string;
  phone: string;
  student_name: string;
  last_name: string;
  class: string;
  level: string;
  message: string;
}

interface ErrorResponse {
  message?: string;
}

const useContactForm = () => {
  return useMutation<UseContactForm, AxiosError<ErrorResponse>, UseContactForm>(
    {
      mutationFn: async (formData: UseContactForm) => {
        const response = await apiClient.post(
          "/api/contactUs/sendMail",
          formData
        );
        return response.data;
      },

      onError: (error) => {
        console.error(
          "Error sending contact form:",
          error.response?.data?.message || error.message
        );
      },
    }
  );
};

export default useContactForm;
