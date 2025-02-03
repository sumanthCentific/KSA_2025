import { useState, useEffect } from "react";
import Header from "./layout/Header";
import ListeningSection from "./features/ListeningSection";
import { useNavigate } from 'react-router-dom';
import YourBookingCard from "./features/yourBookings/yourBookingCard";
import { fetchYourBookingsList } from "../services/yourBookingService";

export interface YourBookingsRecommendation {
  name: string;
    image: string;
    unit: string;
    price: string;
    distance: string;
    description: string;
    origin: string;
    originIcon: string;
    type: string;
    typeIcon: string;
}

const style= {
  headerStyle: {
      display:"grid",
      gridTemplateColumns: '20px 1fr',
      fontFamily: 'Poppins, sans-serif',
  }
}

const YourBookingsRecommendation = () => {
  const [yourBookingsRec, setYourBookingsRec] = useState<YourBookingsRecommendation[]>([]);

  useEffect(() => {
    
    const loadYourBookingList = async () => {
      const data = await fetchYourBookingsList();
      setYourBookingsRec(data);
    };
 
    loadYourBookingList();
  }, []);

  const navigate = useNavigate();

  const handleBackButtonClick = () => {
      navigate('/summary');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto p-4 space-y-8">
        <Header />
        <main className="grid lg:grid-cols-3 gap-8 items-start">
          <aside className="space-y-6">
            <ListeningSection />
          </aside>
          <section
              className="lg:col-span-2 space-y-6"
              aria-labelledby="foods-recommendations-heading"
            >
              <h4 style={style.headerStyle}>
                <span><img src="src/assets/icons/backArrow.png" style={{cursor:'pointer'}} onClick={handleBackButtonClick}/></span>
                <span>Your Bookings</span></h4>
              {yourBookingsRec.length === 0 ? (
                <p
                  className="text-center text-gray-400"
                  role="status"
                  aria-live="polite"
                >
                  Loading Your Bookings...
                </p>
              ) : (
                yourBookingsRec.map((bookings, index) => (
                  <YourBookingCard key={index} bookingsList={bookings} />
                ))
              )}
            </section>
        </main>
      </div>
    </div>
  );
};

export default YourBookingsRecommendation;
