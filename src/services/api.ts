import { HotelSearchParams, HotelSearchResponse, ApiError } from '../types/api';
import { API_CONFIG } from '../config/api';

class ApiService {
  private headers: HeadersInit = {
    'Content-Type': 'application/json',
    'ApiKey': API_CONFIG.API_KEY
  };

  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const error: ApiError = {
        status: response.status,
        message: errorData.message || 'An error occurred while processing your request',
        code: errorData.code
      };
      throw error;
    }

    return response.json();
  }

  private async fetchWithError<T>(
    endpoint: string,
    options: RequestInit
  ): Promise<T> {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}${endpoint}`, {
        ...options,
        headers: this.headers
      });
      return this.handleResponse<T>(response);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`API request failed: ${error.message}`);
      }
      throw new Error('An unexpected error occurred');
    }
  }

  async searchHotels(params: HotelSearchParams): Promise<HotelSearchResponse> {
    return this.fetchWithError<HotelSearchResponse>(
      API_CONFIG.ENDPOINTS.HOTEL_SEARCH_LIST,
      {
        method: 'POST',
        body: JSON.stringify(params)
      }
    );
  }

  async getHotelDetails(hotelId: string) {
    return this.fetchWithError(
      API_CONFIG.ENDPOINTS.HOTEL_DETAILS,
      {
        method: 'POST',
        body: JSON.stringify({ hotelId })
      }
    );
  }
}

export const apiService = new ApiService();