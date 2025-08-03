import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from "axios";

// Define response and error types
export interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, unknown>;
}

export interface ApiError {
  message: string;
  status?: number;
  data?: unknown;
}

class HttpClient {
  private static instance: HttpClient;
  private axiosInstance: AxiosInstance;

  private constructor() {
    // Create axios instance with default config
    this.axiosInstance = axios.create({
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 10000, // 10 second timeout
    });

    // Add basic response interceptor for error handling
    this.axiosInstance.interceptors.response.use(
      response => response,
      error => {
        // Transform axios error to our ApiError format
        const apiError: ApiError = {
          message: error.message || "An error occurred",
          status: error.response?.status,
          data: error.response?.data,
        };

        return Promise.reject(apiError);
      }
    );
  }

  public static getInstance(): HttpClient {
    if (!HttpClient.instance) {
      HttpClient.instance = new HttpClient();
    }
    return HttpClient.instance;
  }

  // Generic request method
  public async request<T = unknown>(config: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response: AxiosResponse<T> = await this.axiosInstance.request(config);
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    };
  }

  // Helper methods for common HTTP methods
  public async get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>({ ...config, method: "GET", url });
  }

  public async post<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>({ ...config, method: "POST", url, data });
  }

  public async put<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>({ ...config, method: "PUT", url, data });
  }

  public async delete<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>({ ...config, method: "DELETE", url });
  }

  public async patch<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>({ ...config, method: "PATCH", url, data });
  }
}

// Export a singleton instance
export const httpClient = HttpClient.getInstance();
