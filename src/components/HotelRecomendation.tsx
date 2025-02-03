import { useState, useEffect } from "react";
import Header from "./layout/Header";
import ListeningSection from "./features/ListeningSection";
import HotelCard from "./features/hotel/HotelCard";
import { fetchHotels, Hotel } from "../services/hotelService";

const HotelRecommendation = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);

  useEffect(() => {
    const loadHotels = async () => {
      const data = await fetchHotels();
      setHotels(data);
    };

    loadHotels();
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
              <p className="text-lg">
                Please find me some{" "}
                <span className="font-bold">hotel stays</span> in Riyadh...
              </p>
            </section>
          </aside>

          {/* Right Section */}
          <section
            className="lg:col-span-2 space-y-6"
            aria-labelledby="recommendations-heading"
          >
            {hotels.length === 0 ? (
              <p
                className="text-center text-gray-400"
                role="status"
                aria-live="polite"
              >
                Loading hotels...
              </p>
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
