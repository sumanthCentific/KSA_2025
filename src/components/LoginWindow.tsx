import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "./ui/Button";
import { useNavigate } from "react-router-dom";

const LoginWindow = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/welcome");
  };

  return (
    <section
      className="bg-dark custom-login-rounded h-[400px] w-[450px] d-flex flex-column align-items-center justify-content-start position-absolute top-50 start-50 translate-middle p-4"
      aria-labelledby="listening-heading"
     
    >
      <div
        className="d-flex flex-column align-items-start mb-1"
        style={{ width: "100%" }}
      >
        <span className="text-white fw-bold fs-1 mb-1">Login</span>
        <span className="text-white fs-5 mb-4" style={{
            color: "#FFFFFF", // White text color
            fontSize: "16px", // Font size
            fontWeight: 200, // Font weight
            lineHeight: "24px", // Line height
            textAlign: "left", // Left-align text
          }}>Welcome to T.E.S.T</span>
      </div>
      <div className="mb-2" style={{ width: "100%" }}>
        <label htmlFor="userName" className="form-label text-white" style={{
            color: "#FFFFFF", // White text color
            fontSize: "16px", // Font size
            fontWeight: 200, // Font weight
            lineHeight: "24px", // Line height
            textAlign: "left", // Left-align text
          }}>
          Email
        </label>
        <input
          type="text"
          className="form-control form-control-custom"
          id="userName"
          name="userName"
          style={{
            backgroundColor: "#777777", // Light gray background
            color: "white", // White text
            border: "none",
          }}
          value={"demo@centific.com"}
        />
      </div>

      <div className="mb-1" style={{ width: "100%" }}>
        <label htmlFor="password" className="form-label text-white" style={{
            color: "#FFFFFF", // White text color
            fontSize: "16px", // Font size
            fontWeight: 200, // Font weight
            lineHeight: "24px", // Line height
            textAlign: "left", // Left-align text
          }}>
          Password
        </label>
        <input
          type="password"
          className="form-control form-control-custom"
          id="password"
          name="password"
          style={{
            backgroundColor: "#777777", // Light gray background
            color: "white", // White text
            border: "none",
          }}
          value={"1234567"}
        />
      </div>

      <div
        className="d-flex justify-content-end mb-1"
        style={{ width: "100%" }}
      >
        <label
          htmlFor="forgetpassword"
          className="form-label text-white"
          style={{
            color: "#FFFFFF", // White text color
            fontSize: "16px", // Font size
            fontWeight: 200, // Font weight
            lineHeight: "24px", // Line height
            textAlign: "left", // Left-align text
          }}
        >
          Forget Password?
        </label>
      </div>

      <Button className="btnGetStarted w-100" onClick={handleLoginClick}>
        Login
      </Button>
    </section>
  );
};

export default LoginWindow;
