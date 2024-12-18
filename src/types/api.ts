export interface HotelSearchParams {
  searchQuery: {
    checkinDate: string;
    checkoutDate: string;
    cityName: string;
    roomInfo: Array<{
      numberOfAdults: number;
      numberOfChild: number;
    }>;
    numberOfRooms: number;
  };
}

export interface ApiError {
  status: number;
  message: string;
  code?: string;
}

export interface HotelSearchResponse {
  status: number;
  searchId?: string;
  results?: Array<{
    hotelId: string;
    name: string;
    // Add other hotel properties as needed
  }>;
}