import React, { useState, useEffect } from "react";
import Header from "./layout/Header";
import ListeningSection from "./features/ListeningSection";
import car from '../assets/car.svg';
import flame from '../assets/flame.svg';
import cabTop from '../assets/cab-top.svg';
import mapPin from '../assets/map-pin.svg';
import recenter from '../assets/current-loc-icon.svg';
import { useNavigate } from "react-router";

export interface CabRecommendation {
  image: string;
  title: string;
  location: string;
  price: number;
  distance: number;
  availability: number;
  features: string[];
}

const style= {
  headerStyle: {
      display:"grid",
      gridTemplateColumns: '20px 1fr',
      fontFamily: 'Poppins, sans-serif',
      cursor:'pointer'
  }
}

const locationStyle: React.CSSProperties = {
  alignItems: "center",
  cursor: "pointer",
  backdropFilter: "blur(20.600000381469727px)",
  boxShadow: "0px 0px 2px 0px rgba(0, 0, 0, 0.16)",
  background: "rgba(255, 255, 255, 0.08)",
  height: "auto",
  lineHeight: "52px",
  padding: "0px 15px",
  borderRadius: "15px"
}

const cabStyle: React.CSSProperties = {
  border: "1px solid rgba(69, 69, 69, 1)",
  height: "auto",
  borderRadius: "28px",
  padding: "16px 20px"
}

const chipStyle: React.CSSProperties = {
  border: "1.46px solid rgba(185, 101, 162, 0.6)",
  backgroundColor: " rgba(185, 101, 162, 0.34)",
  backgroundBlendMode: "overlay",
  fontSize: "16px",
  float: "left",
  borderRadius: "35px",
  padding: "8px 16px",
  margin: "0 6px"
}

const cabImgStyle: React.CSSProperties = {
  float: "left",
  marginTop: "36px"
}

const priceStyle: React.CSSProperties = {
  fontSize: "32px"
}

const cabTopContainer: React.CSSProperties = {
  background: "rgba(247, 247, 247, 0.9)",
  borderRadius: "38px",
 margin: "0 10px",
  padding: "27px 7px", 
  border: "3px solid rgba(123, 16, 80, 1)"
}

const CabRecommendation = () => {
  const navigate = useNavigate();
  const handleBackButtonClick = () => {
    navigate('/summary');
};
//   const [cabRec, setCabRec] = useStat`e<CabRecommendation[]>([]);

  useEffect(() => {
    // Directly get the data from the imported JSON
    // if (hotelsData?.hotels?.selection) {
    //   // Map the JSON data to the structure expected by HotelCard
    //   const mappedHotels: Hotel[] = hotelsData.hotels.selection.map((hotel: any) => ({
    //     // Provide a default image (replace with actual image URL if available)
    //     image: "https://via.placeholder.com/150",
    //     // Use the JSON "name" as the "title"
    //     title: hotel.name,
    //     // Provide a default location (update if your JSON includes location)
    //     location: "Riyadh, Saudi Arabia",
    //     // Map the price field (renaming price_per_night to price)
    //     price: hotel.price_per_night,
    //     // Default values for additional fields expected by HotelCard:
    //     distance: 2, // Example: distance in km
    //     availability: 5, // Example: number of rooms available
    //     features: ["Luxury", "Central location"] // Example: list of features
    //   }));

    //   setHotels(mappedHotels);
    // }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="mx-auto p-4 space-y-8">
        <Header />
        <main className="grid lg:grid-cols-3 gap-8 items-start">
          <aside className="space-y-6">
            <ListeningSection />
          </aside>
          <section
            className="lg:col-span-2 space-y-6"
            aria-labelledby="recommendations-heading"
            style={{
             fontFamily: 'Poppins'
            }}
          >
            <h4 style={style.headerStyle} onClick={handleBackButtonClick}>
                <span><img src="src/assets/icons/backArrow.png"/></span>
                <span>Cab Recommendations</span></h4>
            <div style={locationStyle}>
              {/* <img src={recenter} /> */}
              King Khalid Internation Airport - Airport Rd, Riyadh, Saudi Arabia</div>
            <div style={locationStyle}
            >
              {/* <img src={mapPin} /> */}
              Riyadh Front Exhibition & Conference Center (RFECC)</div>
            {/* map below container for each result */}
            <div style={cabStyle}> 
              <div >
              <span style={chipStyle}><img style={{float: "left", marginRight: "3px", marginTop: "3px"}} src={flame}/>Popular</span>
              <span style={chipStyle}><img style={{float: "left", marginRight: "3px", marginTop: "3px"}} src={flame}/>Luxury</span>
              </div>
              <div className="container" style={{padding: "16px 0", marginTop: "8px"}}>
                <div className="row">
                  <div className="col-md-3">
                    <img style={cabImgStyle} src={car} alt="cab"/>
                  </div>
                  <div className="col-md-2">
                    <h3 className="text-lg font-semibold">Car Details</h3>
                    <div className="text-sm text-gray-400">
                      <div>Tesla</div>
                      <div> RY 01 AN 2435</div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <h2 style={priceStyle}>$169</h2>
                  </div>
                  <div className="col-md-3" >
                    <div style={cabTopContainer}>
                      <img src={cabTop} style={{float: 'left'}}></img>
                      <p className="text-sm text-gray-400 text-center" style={{marginTop: "16px "}}>
                        <div>Luxury</div>
                        <div>4 Seater</div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={cabStyle}> 
              <div >
              <span style={chipStyle}><img style={{float: "left", marginRight: "3px", marginTop: "3px"}} src={flame}/>Popular</span>
              <span style={chipStyle}><img style={{float: "left", marginRight: "3px", marginTop: "3px"}} src={flame}/>Luxury</span>
              </div>
              <div className="container" style={{padding: "16px 0", marginTop: "8px"}}>
                <div className="row">
                  <div className="col-md-3">
                    <img style={cabImgStyle} src={car} alt="cab"/>
                  </div>
                  <div className="col-md-2">
                    <h3 className="text-lg font-semibold">Car Details</h3>
                    <p className="text-sm text-gray-400">
                      <div>Tesla</div>
                      <div> RY 01 AN 2435</div>
                    </p>
                  </div>
                  <div className="col-md-3">
                    <h2 style={priceStyle}>$169</h2>
                  </div>
                  <div className="col-md-3" >
                    <div style={cabTopContainer}>
                      <img src={cabTop} style={{float: 'left'}}></img>
                      <p className="text-sm text-gray-400 text-center" style={{marginTop: "16px "}}>
                        <div>Luxury</div>
                        <div>4 Seater</div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={cabStyle}> 
              <div >
              <span style={chipStyle}><img style={{float: "left", marginRight: "3px", marginTop: "3px"}} src={flame}/>Popular</span>
              <span style={chipStyle}><img style={{float: "left", marginRight: "3px", marginTop: "3px"}} src={flame}/>Luxury</span>
              </div>
              <div className="container" style={{padding: "16px 0", marginTop: "8px"}}>
                <div className="row">
                  <div className="col-md-3">
                    <img style={cabImgStyle} src={car} alt="cab"/>
                  </div>
                  <div className="col-md-2">
                    <h3 className="text-lg font-semibold">Car Details</h3>
                    <p className="text-sm text-gray-400">
                      <div>Tesla</div>
                      <div> RY 01 AN 2435</div>
                    </p>
                  </div>
                  <div className="col-md-3">
                    <h2 style={priceStyle}>$169</h2>
                  </div>
                  <div className="col-md-3" >
                    <div style={cabTopContainer}>
                      <img src={cabTop} style={{float: 'left'}}></img>
                      <p className="text-sm text-gray-400 text-center" style={{marginTop: "16px "}}>
                        <div>Luxury</div>
                        <div>4 Seater</div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </section>
        </main>
      </div>
    </div>
  );
};

export default CabRecommendation;
