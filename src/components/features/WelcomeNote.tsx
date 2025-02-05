import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "../ui/Button";
import { useNavigate } from 'react-router-dom';
import Carousel from "./Carousel";
import './Carousel.css';


const WelcomeNote = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/summary');
    };
    return (
        <section className="rounded-lg p-5 h-[700px] w-[900px] d-flex flex-column align-items-center justify-content-start position-absolute top-50 start-50 translate-middle" aria-labelledby="listening-heading">
        <div className="text-white fs-1" style={{ marginBottom: '2px', fontFamily:'Poppins' }}>
            <span className="firstSpancolor">Welcome</span> to the
        </div>
        <div className="text-white fs-1" style={{ fontFamily:'Poppins', color: 'rgba(255, 255, 255, 1)'
 }}>future of Tourism</div>
        <div style={{ fontFamily:'Poppins', fontSize: '18px', color: 'rgba(255, 255, 255, 1)' }}>Powered by Lenovo & Centific</div>
        <div style={{ fontFamily:'Poppins', fontSize: '14px', color: '#e5e7eb', paddingTop: '5px' }}>In collaboration with Ministry of tourism Saudi Arabia</div>
       <Button className="btnGetStarted" style={{ fontFamily:'Poppins',
            width: '189px',
            lineHeight: '64px',
            height: '64px',
            fontSize: '22px',
            fontWeight: '400',
            marginTop: '20px'
        }} onClick={handleButtonClick} >Get Started</Button>
       <Carousel />
    </section>
    
    );
};

export default WelcomeNote;
