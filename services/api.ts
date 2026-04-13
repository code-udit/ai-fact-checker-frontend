import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export const analyzeContent = async (payload: {
  text?: string;
  url?: string;
}) => {
  try {
    const res = await axios.post(API_URL, payload);
    return res.data;
  } catch (error: unknown) {
    console.error(error);

    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.detail ||
        error.response?.data?.message ||
        "Something went wrong";

      throw new Error(message);
    }

    throw new Error("Server error. Please try again.");
  }
};