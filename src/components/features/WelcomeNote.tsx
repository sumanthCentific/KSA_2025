import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "../ui/Button";

const WelcomeNote = () => {
    return (
        <section className="rounded-lg p-5 h-[500px] w-[800px] d-flex flex-column align-items-center justify-content-start position-absolute top-50 start-50 translate-middle" aria-labelledby="listening-heading">
        <div className="text-white fs-3" style={{ marginBottom: '2px', fontFamily:'Poppins' }}>
            <span className="firstSpancolor">Welcome</span> to the
        </div>
        <div className="text-white fs-3" style={{ fontFamily:'Poppins' }}>future of Tourism</div>
        <div style={{ fontFamily:'Poppins' }}>Powered bt Lenovo & Centific</div><br/>
       <Button className="btnGetStarted">Get Started</Button>
    </section>
    
    );
};

export default WelcomeNote;
