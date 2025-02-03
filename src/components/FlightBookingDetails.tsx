import { useState, useEffect } from "react";
import Header from "./layout/Header";
import ListeningSection from "./features/ListeningSection";

export interface FlightBookingDetails {
  image: string;
  title: string;
  location: string;
  price: number;
  distance: number;
  availability: number;
  features: string[];
}

const FlightBookingDetails = () => {
//   const [cabRec, setCabRec] = useStat`e<CabRecommendation[]>([]);

  useEffect(() => {
    // Directly get the data from the imported JSON
    // if (hotelsData?.hotels?.selection) {
    //   // Map the JSON data to the structure expected by HotelCard
    //   const mappedHotels: Hotel[] = hotelsData.hotels.selection.map((hotel: any) => ({
    //     // Provide a default image (replace with actual image URL if available)
    //     image: "https://via.placeholder.com/150",
    //     // Use the JSON "name" as the "title"
    //     title: hotel.name,
    //     // Provide a default location (update if your JSON includes location)
    //     location: "Riyadh, Saudi Arabia",
    //     // Map the price field (renaming price_per_night to price)
    //     price: hotel.price_per_night,
    //     // Default values for additional fields expected by HotelCard:
    //     distance: 2, // Example: distance in km
    //     availability: 5, // Example: number of rooms available
    //     features: ["Luxury", "Central location"] // Example: list of features
    //   }));

    //   setHotels(mappedHotels);
    // }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="mx-auto p-4 space-y-8">
        <Header />
        <main className="grid lg:grid-cols-3 gap-8 items-start">
          <aside className="space-y-6">
            <ListeningSection />
          </aside>
        </main>
      </div>
    </div>
  );
};

export default FlightBookingDetails;
