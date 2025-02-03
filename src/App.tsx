import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import GetStarted from './components/GetStarted';
import Login from './components/Login';
import HotelRecommendation from './components/HotelRecomendation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Summary from './components/Summary';
import CabRecommendation from './components/CabRecommendations';
import FlightRecommendation from './components/FlightRecommendations';
import RestaurantRecommendation from './components/RestaurantRecommendation';
import ShoppingMallRecommendation from './components/ShoppingMallRecommendation';
import ShoppingItems from './components/ui/ShoppingItems';
import YourBookingsRecommendation from './components/YourBookingRecommendations';
import FlightBookingDetails from './components/FlightBookingDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/welcome" element={<GetStarted />} />
        <Route path="/hotelRecommendations" element={<HotelRecommendation />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/shoppingItems" element={<ShoppingItems />} />
        <Route path="/cabRecommendations" element={<CabRecommendation />} />
        <Route path="/flightRecommendations" element={<FlightRecommendation />} />
        <Route path="/flightBookingDetails" element={<FlightBookingDetails />} />
        <Route path="/restaurantRecommendations" element={<RestaurantRecommendation />} />
        <Route path="/shoppingMallRecommendations" element={<ShoppingMallRecommendation />} />
        <Route path="/yourBookingsRecommendations" element={<YourBookingsRecommendation />} />
      </Routes>
    </Router>
  )
}

export default App;
