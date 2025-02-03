import  { useEffect, useState } from 'react';
import './FashionCollection.css';
import designerHandbag from '../../assets/images/handbag.png';
import jacket from '../../assets/images/jacket.png';
import gown from '../../assets/images/gown.png';
import sportjack from '../../assets/images/sportj.png';
import wallet from '../../assets/images/wallet.png';
import watch from '../../assets/images/watch.png';
import fashionIcon from '../../assets/images/fashionicon.png';
import luxury from '../../assets/images/luxury.png';
import Header from '../layout/Header';
import ListeningSection from '../features/ListeningSection';
import { useNavigate } from 'react-router-dom';

import { Mall, fetchMallData } from '../../services/mallService';

const ShoppingItems = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<Mall[]>([]);

  const style = {
    headerStyle: {
      display: "grid",
      gridTemplateColumns: '20px 1fr',
      fontFamily: 'Poppins, sans-serif',
    }
  };

  const handleBackButtonClick = () => {
    navigate('/shoppingMallRecommendations');
  };

  // Fetch mall data on component mount
  useEffect(() => {
    fetchMallData().then((fetchedData) => {
      setData(fetchedData);
    });
  }, []);

  const getItemImage = (itemName: string) => {
    if (itemName === "Designer Handbag") return designerHandbag;
    if (itemName === "Men’s Jacket" || itemName === "Mens Jacket") return jacket;
    if (itemName === "Sports Jacket") return sportjack;
    if (itemName === "Luxury Watch") return watch;
    if (itemName === "Wallet") return wallet;
    if (itemName === "Evening Gown") return gown;
    // Default image if none match
    return designerHandbag;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="mx-auto p-4 space-y-8">
        <Header />
        <main className="grid lg:grid-cols-3 gap-8 items-start">
          <aside className="space-y-6">
            <ListeningSection />
          </aside>
          <section
            className="lg:col-span-2 space-y-6"
            aria-labelledby="recommendations-heading"
          >
            <h4
              style={{ ...style.headerStyle, cursor: 'pointer' }}
              onClick={handleBackButtonClick}
            >
              <span>
                <img src="src/assets/icons/backArrow.png" alt="Back" />
              </span>
              <span>Pulls and bear Items</span>
            </h4>
            <div className="fashion-collection">
              <div className="fashion-header">
                <img src={fashionIcon} alt="Fashion Icon" className="fashion-icon" />
                <img src={luxury} alt="Luxury Icon" className="fashion-icon" />
              </div>

              <div className="items-grid">
                {data.map((mall, mallIndex) =>
                  mall.shops
                    .filter((shop) => shop.category === "fashion")
                    .flatMap((shop) =>
                      shop.items.map((item, index) => (
                        <div className="fashion-item" key={`${mallIndex}-${index}`}>
                          <img
                            src={getItemImage(item.name)}
                            alt={item.name}
                          />
                          <div className="fashion-text">
                            <p className="small-heading">{item.name}</p>
                            <p className="price">Price: ${item.price.toFixed(2)}</p>
                          </div>
                        </div>
                      ))
                    )
                )}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ShoppingItems;
