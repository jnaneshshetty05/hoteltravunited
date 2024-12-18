import { useState } from 'react';
import { apiService } from '../services/api';
import { HotelSearchParams, HotelSearchResponse, ApiError } from '../types/api';

export const useHotelSearch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<HotelSearchResponse['results']>([]);
  const [searchId, setSearchId] = useState<string | null>(null);

  const searchHotels = async (params: HotelSearchParams) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await apiService.searchHotels(params);
      
      if (response.searchId) {
        setSearchId(response.searchId);
      }
      
      setResults(response.results || []);
    } catch (err) {
      let errorMessage = 'An error occurred while searching hotels';
      
      if (err instanceof Error) {
        errorMessage = err.message;
      } else if ((err as ApiError).message) {
        errorMessage = (err as ApiError).message;
      }
      
      setError(errorMessage);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    results,
    searchId,
    searchHotels
  };
};