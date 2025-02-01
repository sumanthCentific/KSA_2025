import React from "react";
import { Card } from "../../ui/Card";
import { Button } from "../../ui/Button";
import { Hotel } from "../../../services/hotelService";

interface HotelCardProps {
  hotel: Hotel;
}
const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  return (
    <Card className="bg-gray-800 p-6 rounded-lg">
      <div className="flex">
        {/* Hotel Image */}
        <img
          src={hotel.image}
          alt={hotel.title}
          className="h-32 w-40 rounded-md object-cover"
        />

        {/* Hotel Details */}
        <div className="ml-4 flex flex-col justify-between w-full">
          <div>
            <h3 className="text-lg font-semibold">{hotel.title}</h3>
            <p className="text-sm text-gray-400">{hotel.location}</p>
          </div>
          <div className="mt-4">
            <p className="text-gray-400">Cost: ${hotel.price} CAD/night</p>
            <p className="text-gray-400">Distance: {hotel.distance} km away</p>
            <p className="text-gray-400">
              Availability: {hotel.availability} left
            </p>
          </div>
          {/* Features */}
          <div className="mt-4 flex flex-wrap items-center space-x-2">
            {hotel.features.map((feature, index) => (
              <span
                key={index}
                className="bg-purple-500 text-xs text-white px-2 py-1 rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Button Section */}
      <div className="mt-4 flex justify-end">
        <Button variant="ghost" className="text-pink-500 hover:text-pink-300">
          Add to Wishlist ❤️
        </Button>
      </div>
    </Card>
  );
};

export default HotelCard;
