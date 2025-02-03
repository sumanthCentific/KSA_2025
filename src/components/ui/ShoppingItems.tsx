
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

const ShoppingItems = () => {

  const navigate = useNavigate();

  const style= {
    headerStyle: {
        display:"grid",
        gridTemplateColumns: '20px 1fr',
        fontFamily: 'Poppins, sans-serif',
    }
  }

  const handleBackButtonClick = () => {
      navigate('/shoppingMallRecommendations');
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
          <h4 style={{ ...style.headerStyle, cursor: 'pointer' }} onClick={handleBackButtonClick}>
          <span><img src="src/assets/icons/backArrow.png"  /></span>
          <span>Pulls and bear Items</span></h4>
    <div className="fashion-collection">
      <div className="fashion-header">
        <img src={fashionIcon} alt="Fashion Icon" className="fashion-icon" />
        <img src={luxury} alt="Luxury Icon" className="fashion-icon" />
      </div>
      
      <div className="items-grid">
        <div className="fashion-item">
          <img src={designerHandbag} alt="Designer Handbag" />
          <div className="fashion-text">
           <p className="small-heading">Designer Handbag</p>
            <p className="price">Price: $1377.71</p>
          </div>
        </div>
        <div className="fashion-item">
          <img src={jacket} alt="Mens Jacket" />
          <div className="fashion-text">
          <p className="small-heading">Mens Jacket</p>
            <p className="price">Price: $1368.71</p>
          </div>
        </div>
        <div className="fashion-item">
          <img src={sportjack} alt="Sports Jacket" />
          <div className="fashion-text">
          <p className="small-heading">Sports Jacket</p>
            <p className="price">Price: $1368.71</p>
          </div>
        </div>
        <div className="fashion-item">
          <img src={watch} alt="Luxury Watch" />
          <div className="fashion-text">
          <p className="small-heading">Luxury Watch</p>
            <p className="price">Price: $1368.71</p>
          </div>
        </div>
        <div className="fashion-item">
          <img src={wallet} alt="Wallet" />
          <div className="fashion-text">
          <p className="small-heading">Wallet</p>
            <p className="price">Price: $1368.71</p>
          </div>
        </div>
        <div className="fashion-item">
          <img src={gown} alt="Evening Gown" />
          <div className="fashion-text">
          <p className="small-heading">Evening Gown</p>
            <p className="price">Price: $1368.71</p>
          </div>
        </div>
      </div>
    </div>
    </section>
        </main>
      </div>
    </div>
  );
};

export default ShoppingItems;
