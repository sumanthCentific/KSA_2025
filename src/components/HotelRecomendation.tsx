import { useState, useEffect } from "react";
import Header from "./layout/Header";
import ListeningSection from "./features/ListeningSection";
import HotelCard from "./features/hotel/HotelCard";
// Import the JSON data directly
import hotelsData from "./features/hotel/hotels.json"
import { useNavigate } from 'react-router-dom';
// Define the interface for our hotel data expected by HotelCard
export interface Hotel {
  image: string;
  title: string;
  location: string;
  price: number;
  distance: number;
  availability: number;
  features: string[];
}
const style= {
  headerStyle: {
      display:"grid",
      gridTemplateColumns: '20px 1fr',
      fontFamily: 'Poppins, sans-serif',
  }
}

const HotelRecommendation = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate('/summary');
};
  useEffect(() => {
    // Directly get the data from the imported JSON
    if (hotelsData?.hotels?.selection) {
      // Map the JSON data to the structure expected by HotelCard
      const mappedHotels: Hotel[] = hotelsData.hotels.selection.map((hotel: any) => ({
        // Provide a default image (replace with actual image URL if available)
        image: "src/assets/Hotel-1.png",
        // Use the JSON "name" as the "title"
        title: hotel.name,
        // Provide a default location (update if your JSON includes location)
        location: "Riyadh, Saudi Arabia",
        // Map the price field (renaming price_per_night to price)
        price: hotel.price_per_night,
        // Default values for additional fields expected by HotelCard:
        distance: 2, // Example: distance in km
        availability: 5, // Example: number of rooms available
        features: ["Luxury", "Central location"] // Example: list of features
      }));

      setHotels(mappedHotels);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Main container with width constraints */}
      <div className="mx-auto p-4 space-y-8">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Section */}
          <aside className="space-y-6">
            <ListeningSection />
            <section
              className="bg-gradient-to-b from-purple-500 to-gray-800 p-6 rounded-lg text-center shadow-lg"
              aria-labelledby="profile-heading"
            >
              <h2
                id="profile-heading"
                className="text-sm font-medium text-gray-300 mb-4"
              >
                Profile
              </h2>
              <div className="text-lg">
                Please find me some{" "}
                <span className="font-bold">hotel stays</span> in Riyadh...
              </div>
            </section>
          </aside>

          {/* Right Section */}
          <section
            className="lg:col-span-2 space-y-6"
            aria-labelledby="recommendations-heading"
          >
            <h4 style={{ ...style.headerStyle, cursor: 'pointer', verticalAlign: 'middle', alignItems: "center" }}  onClick={handleBackButtonClick}>
                <span><img src="src/assets/icons/backArrow.png"  /></span>
                <span>Hotel Recommendations</span></h4>
            {hotels.length === 0 ? (
              <div
                className="text-center text-gray-400"
                role="status"
                aria-live="polite"
              >
                Loading hotels...
              </div>
            ) : (
              hotels.map((hotel, index) => (
                <HotelCard key={index} hotel={hotel} />
              ))
            )}
          </section>
        </main>
      </div>
    </div>
  );
};

export default HotelRecommendation;
