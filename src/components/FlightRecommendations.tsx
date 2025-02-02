import { useState, useEffect } from "react";
import Header from "./layout/Header";
import ListeningSection from "./features/ListeningSection";
import flightIcon from '../assets/icons/flight icon.svg';
import flightIconWhite from '../assets/icons/flight icon white.svg';

export interface FlightRecommendation {
  image: string;
  title: string;
  location: string;
  price: number;
  distance: number;
  availability: number;
  features: string[];
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
      <div className="max-w-6xl mx-auto p-4 space-y-8">
        <Header />
        <main className="grid lg:grid-cols-3 gap-8 items-start">
          <aside className="space-y-6">
            <ListeningSection />
          </aside>
          <section
            className="lg:col-span-2 space-y-6"
            aria-labelledby="recommendations-heading"
          >
            <p>Flight Recommendations </p>

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
  boxShadow: "2px 3px 4px 0px rgba(0, 0, 0, 0.15)",
  background: "rgba(31, 27, 32, 1)"
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
          border: "none"
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
    <div className="row">
      <div className="col-sm-2">
        <div className="text-sm text-gray-400">
          <div>Airlines</div>
        </div>
        <h4 className="text-lg font-semibold">{props.airLineCompany}</h4>
      </div>
      <div className="col-sm-7"></div>
      <div className="col-sm-2" >
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
    <div className="row">
      <div className="col-sm-2">
        <h3 className="text-lg font-semibold">{props.from}</h3>
        <div className="text-sm text-gray-400">
          <div>{props.fromState}</div>
          <div>{props.departureTime}</div>
        </div>
      </div>
      <div className="col-sm-7" style={{borderTop: "1px dashed rgba(184, 184, 184, 1)", height: "10px", marginTop: "28px"}}>
        { props.travelDate &&<div style={{margin: "auto", width: "100px", textAlign: "center", position: "relative", bottom: "26px"}} >
          <img src={props.isWhiteIcon ? flightIconWhite : flightIcon}  style={{margin: "auto"}}/>
          <div className="text-sm text-gray-400" style={{fontSize: '12px'}}>{props.travelDate}</div>
        </div> }
      </div>
      <div className="col-sm-2" >
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
