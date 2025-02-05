import { useEffect, useState } from "react";
//import "./FashionCollection.css";
import { useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import ListeningSection from "../features/ListeningSection";
import { Mall, fetchMallData } from "../../services/mallService";
import flame from "../../assets/flame.svg";
import designerHandbag from "../../assets/images/handbag.png";
import jacket from "../../assets/images/jacket.png";
import gown from "../../assets/images/gown.png";
import sportjack from "../../assets/images/sportj.png";
import wallet from "../../assets/images/wallet.png";
import watch from "../../assets/images/watch.png";

const chipStyle =
  "inline-flex items-center justify-center px-3 py-2 text-xs white cardBorder   rounded-full border-gray-400 bg-opacity-40 bg-[#B969A2]";

const ShoppingItems = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<Mall[]>([]);

  const handleBackButtonClick = () => {
    navigate("/shoppingMallRecommendations");
  };

  // Fetch mall data on component mount
  useEffect(() => {
    fetchMallData().then((fetchedData) => {
      setData(fetchedData);
    });
  }, []);

  // Simplified image lookup for items
  const itemImages: Record<string, string> = {
    "Designer Handbag": designerHandbag,
    "Men’s Jacket": jacket,
    "Mens Jacket": jacket,
    "Sports Jacket": sportjack,
    "Luxury Watch": watch,
    Wallet: wallet,
    "Evening Gown": gown,
  };

  const getItemImage = (itemName: string) =>
    itemImages[itemName] || designerHandbag;

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
              className="flex items-center space-x-2 text-lg font-semibold cursor-pointer text-left font-poppins text-xl leading-7"
              onClick={handleBackButtonClick}
            >
              <img
                src="src/assets/icons/backArrow.png"
                alt="Back"
                className="w-4 h-4"
              />
              <span>Pulls and Bear Items</span>
            </h4>

            <div className=" p-3 cardBorder rounded-[28px]" >
              <div className="flex space-x-2 pb-2">
                <span className={chipStyle}>
                  <img src={flame} alt="flame" className="w-5 h-5 mr-2" />
                  Fashion
                </span>
                <span className={chipStyle}>
                  <img src={flame} alt="flame" className="w-5 h-5 mr-2 mt-1" />
                  Luxury
                </span>
              </div>

              <div className="items-grid mt-3 grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-2 ">
                {data.map((mall, mallIndex) =>
                  mall.shops
                    .filter((shop) => shop.category === "fashion")
                    .flatMap((shop) =>
                      shop.items.map((item, index) => (
                        <div className="fashion-item bg-opacity-10 cardBorder rounded-[28px] shadow-md p-4 flex items-center">
                          {/* Left Image */}
                          <img
                            src={getItemImage(item.name)}
                            alt={item.name}
                            className="w-1/3 h-auto rounded-md"
                          />
                          {/* Right Text */}
                          <div className="fashion-text ml-4 flex-1 text-left">
                            <p className="small-heading text-sm font-semibold text-white leading-none">
                              {item.name}
                            </p>
                            <p className="price text-xs text-white-400 ">
                              Price: ${item.price.toFixed(2)}
                            </p>
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
