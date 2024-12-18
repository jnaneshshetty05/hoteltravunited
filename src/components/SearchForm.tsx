import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import Input from './ui/Input';
import Button from './ui/Button';
import Select from './ui/Select';
import { useHotelSearch } from '../hooks/useHotelSearch';
import { HotelSearchParams } from '../types/api';

const guestOptions = [
  { value: '1-2', label: '1 Room, 2 Adults' },
  { value: '1-1', label: '1 Room, 1 Adult' },
  { value: '2-4', label: '2 Rooms, 4 Adults' }
];

const SearchForm = () => {
  const { loading, error, results, searchHotels } = useHotelSearch();
  const [formData, setFormData] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: '1-2'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const [rooms, adults] = formData.guests.split('-').map(Number);
    
    const searchParams: HotelSearchParams = {
      searchQuery: {
        checkinDate: formData.checkIn,
        checkoutDate: formData.checkOut,
        cityName: formData.destination,
        roomInfo: [{
          numberOfAdults: adults,
          numberOfChild: 0
        }],
        numberOfRooms: rooms
      }
    };

    await searchHotels(searchParams);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 -mt-10 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Input
          icon={<MapPin />}
          label="Destination"
          placeholder="Where are you going?"
          type="text"
          name="destination"
          value={formData.destination}
          onChange={handleInputChange}
          required
        />

        <Input
          icon={<Calendar />}
          label="Check In"
          type="date"
          name="checkIn"
          value={formData.checkIn}
          onChange={handleInputChange}
          required
        />

        <Input
          icon={<Calendar />}
          label="Check Out"
          type="date"
          name="checkOut"
          value={formData.checkOut}
          onChange={handleInputChange}
          required
        />

        <Select
          icon={<Users />}
          label="Guests"
          name="guests"
          value={formData.guests}
          onChange={handleInputChange}
          options={guestOptions}
        />
      </div>

      <Button 
        type="submit" 
        className="w-full mt-4 py-3 flex items-center justify-center space-x-2"
        disabled={loading}
      >
        <Search className="h-5 w-5" />
        <span>{loading ? 'Searching...' : 'Search Hotels'}</span>
      </Button>

      {error && (
        <p className="mt-2 text-red-600 text-sm">{error}</p>
      )}

      {results && results.length > 0 && (
        <div className="mt-4">
          <p className="text-green-600">Found {results.length} hotels</p>
        </div>
      )}
    </form>
  );
};

export default SearchForm;