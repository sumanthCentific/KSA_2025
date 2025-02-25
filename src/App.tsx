import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import GetStarted from './components/GetStarted';
import Login from './components/Login';
import HotelRecommendation from './components/HotelRecomendation';
import 'bootstrap/dist/css/bootstrap.min.css';
import SummaryRedirection from './components/SummaryRedirection';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/login" element={<Login />} />
        <Route path="/summary" element={<HotelRecommendation />} />
        <Route path="/summaryredirection" element={<SummaryRedirection />} />
      </Routes>
    </Router>
  )
}

export default App;
