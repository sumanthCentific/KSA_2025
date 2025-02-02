import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "../ui/Button";
import { useNavigate } from 'react-router-dom';
import Carousel from "./Carousel";
import './Carousel.css'




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
        <div className="text-white fs-1" style={{ fontFamily:'Poppins' }}>future of Tourism</div>
        <div style={{ fontFamily:'Poppins' }}>Powered bt Lenovo & Centific</div><br/>
       <Button className="btnGetStarted" style={{ fontFamily:'Poppins',
            width: '189px',
            lineHeight: '64px',
            height: '64px',
            fontSize: '22px',
            fontWeight: '400',
        }} onClick={handleButtonClick} >Get Started</Button>
       <Carousel />
    </section>
    
    );
};

export default WelcomeNote;
