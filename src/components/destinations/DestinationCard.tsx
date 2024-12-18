import React from 'react';

interface DestinationCardProps {
  city: string;
  country: string;
  image: string;
  properties: string;
}

const DestinationCard = ({ city, country, image, properties }: DestinationCardProps) => {
  return (
    <div className="relative rounded-lg overflow-hidden group">
      <img
        src={image}
        alt={city}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold">{city}</h3>
          <p className="text-sm">{country}</p>
          <p className="text-sm mt-1">{properties} properties</p>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;