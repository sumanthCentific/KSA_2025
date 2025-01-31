import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import GetStarted from './components/GetStarted';
import Login from './components/Login';
import HotelRecommendation from './components/HotelRecomendation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/login" element={<Login />} />
        <Route path="/summary" element={<HotelRecommendation />} />
      </Routes>
    </Router>
  )
}

export default App;
