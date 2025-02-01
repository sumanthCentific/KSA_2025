
import Header from "./layout/Header";
import redirect1 from '../assets/summaryRedirect1.png';
import redirect2 from '../assets/maps.png';
import redirect3 from '../assets/location.png';
import redirect4 from '../assets/flight.png';
import redirect5 from '../assets/hotels.png';
import redirect6 from '../assets/cabs.png';
import { useNavigate } from "react-router-dom";

const SummaryRedirection = () => {

    const navigate = useNavigate();
    const handleredirect1 = () => {
        navigate('/summaryredirection');
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Main container with width constraints */}
            <div className="max-w-6xl mx-auto p-4 space-y-8">
                {/* Header */}
                <Header />

                {/* Main Content */}
                <main className="grid lg:grid-cols-3 gap-8 items-start">
                    {/* Left Section */}
                    <aside className="space-y-6">
                    </aside>
                    {/* Right Section */}
                    {/* <section
                        className="lg:col-span-2 space-y-6" style={{
                            width: '300px', height: '150px'
                        }}
                        aria-labelledby="recommendations-heading"
                    >
                        <section
                            className="bg-gray-800 rounded-lg p-6 h-[150px] flex flex-col items-center space-y-4"
                            aria-labelledby="listening-heading"
                        >
                            <img style={{
                                width: '40px',
                                marginTop:'30px'
                            }} src={redirect1} onClick={handleredirect1} className="header-icon" />
                        </section>
                        <section
                            className="bg-gray-800 rounded-lg p-6 h-[150px] flex flex-col items-center space-y-4"
                            aria-labelledby="listening-heading"
                        >
                            <img style={{
                                width: '40px',
                                marginTop:'30px'
                            }} src={redirect2} onClick={handleredirect1} className="header-icon" />
                        </section>
                        <section
                            className="bg-gray-800 rounded-lg p-6 h-[150px] flex flex-col items-center space-y-4"
                            aria-labelledby="listening-heading"
                        >
                            <img style={{
                                width: '40px',
                                marginTop:'30px'
                            }} src={redirect3} onClick={handleredirect1} className="header-icon" />
                        </section>
                    </section> */}

                    <div className="container" style={{
                        width:'734px'
                    }}>
                        <div className="row">
                            <div className="section">
                            <img style={{
                                width: "50px",
                                marginTop: "25px",
                                marginLeft: "120px"
                            }} src={redirect1} onClick={handleredirect1} className="header-icon" />
                            </div>
                            <div className="section">
                            <img style={{
                                width: "50px",
                                marginTop: "25px",
                                marginLeft: "120px"
                            }} src={redirect4} onClick={handleredirect1} className="header-icon" />
                            </div>
                        </div>
                        <div className="row">
                        <div className="section">
                            <img style={{
                                width: "50px",
                                marginTop: "25px",
                                marginLeft: "120px"
                            }} src={redirect2} onClick={handleredirect1} className="header-icon" />
                            </div>
                            <div className="section">
                            <img style={{
                                width: "50px",
                                marginTop: "25px",
                                marginLeft: "120px"
                            }} src={redirect5} onClick={handleredirect1} className="header-icon" />
                            </div>
                        </div>
                        <div className="row">
                        <div className="section">
                            <img style={{
                                width: "50px",
                                marginTop: "25px",
                                marginLeft: "120px"
                            }} src={redirect3} onClick={handleredirect1} className="header-icon" />
                            </div>
                            <div className="section">
                            <img style={{
                                width: "50px",
                                marginTop: "25px",
                                marginLeft: "120px"
                            }} src={redirect6} onClick={handleredirect1} className="header-icon" />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default SummaryRedirection;
