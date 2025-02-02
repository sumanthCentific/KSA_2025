import { useState, useEffect } from "react";
import Header from "./layout/Header";
import ListeningSection from "./features/ListeningSection";
import ShoppingMallCard from "./features/shoppingmall/shoppingMallCard";
import {fetchShoppingMalls} from "../services/shoppingMallService"
import { useNavigate } from 'react-router-dom';

export interface ShoppingMallRecommendation {
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

const ShoppingMallRecommendation = () => {
  const [restaurantRec, setRestaurantRec] = useState<ShoppingMallRecommendation[]>([]);

  useEffect(() => {
   const loadRestaurents = async () => {
     const data = await fetchShoppingMalls();
     setRestaurantRec(data);
   };

   loadRestaurents();
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
                  I might visit Via Riyadh Shopping mall, can you show me a list of shops i can visit?
                </p>
              </section>
            </aside>
   
            {/* Right Section */}
            <section
              className="lg:col-span-2 space-y-6"
              aria-labelledby="foods-recommendations-heading"
            >
              <h4 style={style.headerStyle}>
                <span><img src="src/assets/icons/backArrow.png" style={{cursor:'pointer'}} onClick={handleBackButtonClick}/></span>
                <span>Via Riyadh Shopping Mall Details</span></h4>
              {restaurantRec.length === 0 ? (
                <p
                  className="text-center text-gray-400"
                  role="status"
                  aria-live="polite"
                >
                  Loading Shopping Malls...
                </p>
              ) : (
                restaurantRec.map((foods, index) => (
                  <ShoppingMallCard key={index} foods={foods} />
                ))
              )}
            </section>
          </main>
        </div>
      </div>
  );
};

export default ShoppingMallRecommendation;
