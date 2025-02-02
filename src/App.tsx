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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hotel-recommendations" element={<HotelRecommendation />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/cab-recommendations" element={<CabRecommendation />} />
        <Route path="/flight-recommendations" element={<FlightRecommendation />} />
        <Route path="/restaurant-recommendations" element={<RestaurantRecommendation />} />
      </Routes>
    </Router>
  )
}

export default App;
