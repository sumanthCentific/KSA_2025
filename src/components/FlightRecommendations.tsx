import { useState, useEffect } from "react";
import Header from "./layout/Header";
import ListeningSection from "./features/ListeningSection";
import flightIcon from '../assets/icons/flight icon.svg';
import flightIconWhite from '../assets/icons/flight icon white.svg';
import { useNavigate } from 'react-router-dom';

export interface FlightRecommendation {
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
  }
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

const labelStyle: React.CSSProperties = {
  background: "rgba(238, 238, 238, 1)",
  fontSize: "14px",
  float: "left",
  borderRadius: "35px",
  padding: "2px 12px",
  margin: "0 6px",
  color: "black"
}


const FlightRecommendation = () => {
//   const [cabRec, setCabRec] = useStat`e<CabRecommendation[]>([]);
const [hotels, setHotels] = useState<FlightRecommendation[]>([]);
const navigate = useNavigate();

const handleBackButtonClick = () => {
  navigate('/summary');
};

  useEffect(() => {
   

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
          >
            <h4 style={{ ...style.headerStyle, cursor: 'pointer', verticalAlign: 'middle', alignItems: "center" }}  onClick={handleBackButtonClick}>
            <span><img src="src/assets/icons/backArrow.png"  /></span>
            <span>Flight Recommendations</span></h4>
            <FlightLine from="San Hose" fromState="CA" to="Riyadh" toState="Ruh" isWhiteIcon={true} travelDate="Jan, 28, 2025"/>

          { /* repeat this section for each flight recommendation  */ }
            <FlightResult chips={["Cheapest", "Popular"]}  labels={["Jan, 28, 2025", "2h30m"]} 
              from="San Hose" fromState="CA" to="Riyadh" travelDate="Jan, 28, 2025"
              toState="Ruh" arrivalTime="09:30 AM" departureTime="11;45 AM"/>
          </section>
        </main>
      </div>
    </div>
  );
};

const flightResultStyle: React.CSSProperties = {
  borderRadius: '16px',
  background: "#000",
  boxShadow: '2px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  margin: '10px'
}

const FlightResult = (props: {
  chips: string[];
  labels: string[];
  from: string;
  fromState: string;
  to: string;
  toState: string;
  arrivalTime?: string;
  departureTime?: string;
  travelDate?: string;
}) => {
  return (
    <div className="container" style={flightResultStyle}>
        <div >
          {props.chips.map((chip) => <span style={chipStyle}>{chip}</span>)}
        </div>
        <Airlines airLineCompany="Emirates" class="Economy" />
        <FlightLine 
        from={props.from} fromState={props.fromState} to={props.to} travelDate={props.travelDate}
        toState={props.toState} arrivalTime={props.arrivalTime} departureTime={props.departureTime} />
        <div style={{
          height: "1px",
          backgroundImage: "linear-gradient(90deg, #fff, #fff 75%, transparent 75%, transparent 100%)",
          backgroundSize: "20px 1px",
          border: "none",
          margin: '0px 10px 0px 10px'
          }}></div>
            <div >
              {props.labels.map((chip) => <span style={labelStyle}>{chip}</span>)}
            </div>
      </div>
  );
}


interface AirLinesProps {
  airLineCompany: string;
  class: string;
}

const Airlines = (props: AirLinesProps) => {
  return (
    <div className="row" style={{ gap: '0px' , padding: '0px 10px 0px 10px' }}>
      <div className="col-sm-2">
        <div className="text-sm text-gray-400">
          <div>Airlines</div>
        </div>
        <h4 className="text-lg font-semibold">{props.airLineCompany}</h4>
      </div>
      <div className="col-sm-7"></div>
      <div className="col-sm-2" style={{ textAlign: 'right' }}>
        <div className="text-sm text-gray-400">
          <div>Class</div>
        </div>
        <h4 className="text-sm">{props.class}</h4>
      </div>
      </div>
  )
}


interface FlightLineProps {
  from: string;
  fromState: string;
  to: string;
  toState: string;
  arrivalTime?: string;
  departureTime?: string;
  travelDate?: string;
  isWhiteIcon?: boolean;
}

const FlightLine = (props: FlightLineProps) => {
  return (
    <div className="row" style={{gap: '0px', padding: '0px 10px 0px 10px'}}>
      <div className="col-sm-2">
        <h3 className="text-lg font-semibold">{props.from}</h3>
        <div className="text-sm text-gray-400">
          <div>{props.fromState}</div>
          <div>{props.departureTime}</div>
        </div>
      </div>
      <div className="col-sm-8" style={{borderTop: "1px dashed rgba(184, 184, 184, 1)", height: "10px", marginTop: "28px"}}>
        { props.travelDate &&<div style={{margin: "auto", width: "100px", textAlign: "center", position: "relative", bottom: "26px"}} >
          <img src={props.isWhiteIcon ? flightIconWhite : flightIcon}  style={{margin: "auto"}}/>
          <div className="text-sm text-gray-400" style={{fontSize: '12px'}}>{props.travelDate}</div>
        </div> }
      </div>
      <div className="col-sm-2" style={{textAlign: 'right'}} >
      <h3 className="text-lg font-semibold">{props.to}</h3>
        <div className="text-sm text-gray-400">
          <div>{props.toState}</div>
          <div>{props.arrivalTime}</div>
        </div>
      </div>
      </div>
  )
}

export default FlightRecommendation;
