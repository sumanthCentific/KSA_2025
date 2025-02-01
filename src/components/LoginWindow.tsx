import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "./ui/Button";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';




const LoginWindow = () => {
    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate('/summary');
    };
    return (
        <section className="bg-dark rounded-lg h-[400px] w-[400px] d-flex flex-column align-items-center justify-content-start position-absolute top-50 start-50 translate-middle" aria-labelledby="listening-heading">
            <label style={{
                font: 'Poppins',
                fontWeight: '700',
                fontSize: '40px',
                marginRight: '250px'
            }}>Login</label>
            <label style={{
                font: 'Poppins',
                fontWeight: '400',
                fontSize: '20px',
                marginRight: '190px'
            }}> Welcome to T.E.S.T  </label><br />
            <div className="mb-3" style={{
                width: '350px'
            }}>
                <label htmlFor="userName" className="form-label">
                    User Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="userName"
                    name="userName"
                />
            </div>

            <div className="mb-3" style={{
                width: '350px'
            }}>
                <label htmlFor="password" className="form-label">
                    Password
                </label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                />
            </div>
            <br/>
            <Button className="btnGetStarted" style={{
                width: '350px'
            }} onClick={handleLoginClick}>Login</Button><br />
        </section>
    );
};

export default LoginWindow;

