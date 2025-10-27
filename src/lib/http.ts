import axios, { AxiosError } from 'axios';

/**
 * Custom HTTP Error class
 */
export class HttpError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'HttpError';
  }
}

/**
 * Create an axios instance with default configuration
 */
const apiClient = axios.create({
  timeout: 10000,
  baseURL: 'https://api.useyodopay.com/v1',
});

/**
 * Handle axios errors and convert to HttpError
 */
const handleError = (error: unknown): never => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<{ message: string }>;
    if (axiosError.response) {
      throw new HttpError(
        axiosError.response.status,
        axiosError.response.data?.message as string || axiosError.message as string || 'Request failed'
      );
    }
    throw new HttpError(0, axiosError.message || 'Network error');
  }
  throw new HttpError(500, error instanceof Error ? error.message : 'Unknown error');
};

/**
 * HTTP utility methods
 */
export const http = {
  /**
   * GET request
   */
  get: async <T = any>(url: string, config?: any): Promise<T | undefined> => {
    try {
      const response = await apiClient.get<T>(url, config);
      return response.data;
    } catch (error) {
      handleError(error);
      return undefined;
    }
  },

  /**
   * POST request
   */
  post: async <T = any>(url: string, data?: any, config?: any): Promise<T | undefined> => {
    try {
      const response = await apiClient.post<T>(url, data, {
        ...config,
        headers: {
          'Content-Type': 'application/json',
          ...config?.headers,
        },
      });
      return response.data;
    } catch (error) {
      handleError(error);
      return undefined;
    }
  },

  /**
   * PUT request
   */
  put: async <T = any>(url: string, data?: any, config?: any): Promise<T | undefined> => {
    try {
      const response = await apiClient.put<T>(url, data, config);
      return response.data;
    } catch (error) {
      handleError(error);
      return undefined;
    }
  },

  /**
   * DELETE request
   */
  delete: async <T = any>(url: string, config?: any): Promise<T | undefined> => {
    try {
      const response = await apiClient.delete<T>(url, config);
      return response.data;
    } catch (error) {
      handleError(error);
      return undefined;
    }
  },

  /**
   * PATCH request
   */
  patch: async <T = any>(url: string, data?: any, config?: any): Promise<T | undefined> => {
    try {
      const response = await apiClient.patch<T>(url, data, config);
      return response.data;
    } catch (error) {
      handleError(error);
      return undefined;
    }
  },
};
