import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "../ui/Button";
import { useNavigate } from 'react-router-dom';
import Carousel from "./Carousel";

import beachImage from '../../assets/beach image.jpg';
import foodImage from '../../assets/beach image.jpg';
import leapImage from '../../assets/beach image.jpg';
const images: string[] = [beachImage,foodImage,leapImage];


const WelcomeNote = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/login');
    };
    return (
        <section className="bg-dark rounded-lg h-[600px] w-[800px] d-flex flex-column align-items-center justify-content-start position-absolute top-50 start-50 translate-middle" aria-labelledby="listening-heading">
            <div className="text-white fs-3">
                <span className="firstSpancolor">Welcome</span> to the
            </div>
            <div className="text-white fs-3" style={{ fontFamily: 'Poppins' }}>future of Tourism</div>
            <div style={{ fontFamily: 'Poppins' }}>Powered by Lenovo & Centific</div><br />
            <Button className="btnGetStarted" onClick={handleButtonClick}>Get Started</Button><br />
            <Carousel images={images} />
        </section>

    );
};

export default WelcomeNote;
