import { useState } from "react";
import axios from "axios";

export const useApi = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const request = async (method: string, url: string, data?: any) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios({
                method,
                url: `/api/proxy${url}`,
                data,
                headers: {
                    "Content-Type": "application/json",
                    // JWT Authentication would go here if available
                    // Authorization: `Bearer ${localStorage.getItem('token')}`
                },
            });
            return response.data;
        } catch (err: any) {
            const message = err.response?.data?.message || err.message || "An error occurred";
            setError(message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const get = (url: string) => request("GET", url);
    const post = (url: string, data: any) => request("POST", url, data);
    const put = (url: string, data: any) => request("PUT", url, data);
    const del = (url: string) => request("DELETE", url);

    return { get, post, put, del, loading, error };
};
