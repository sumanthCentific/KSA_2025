import React, { useEffect } from "react";
import { FaRegCalendarAlt, FaClock } from "react-icons/fa";
import Header from "./layout/Header";
import ListeningSection from "./features/ListeningSection";
import flightIcon from "../assets/icons/flight icon.svg";
import flightIconWhite from "../assets/icons/flight icon white.svg";
export interface FlightBookingDetails {
  image: string;
  title: string;
  location: string;
  price: number;
  distance: number;
  availability: number;
  features: string[];
}

const FlightBookingDetails = () => {
  useEffect(() => {
    // Data fetching or any side effects can go here
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 ">
      <div className="max-w-screen-xl mx-auto p-4 space-y-8">
        <Header />
        <main className="grid lg:grid-cols-3 gap-8 items-start">
          <aside className="space-y-6">
            <ListeningSection />
          </aside>

          {/* Flight Booking Details Section */}
          <section className="lg:col-span-2">
            <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
              {/* Booking ID */}
              <p
                className="text-sm text-gray-500 font-semibold text-left"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "14.13px",
                  fontWeight: 500,
                  lineHeight: "16.96px",
                  textDecorationSkipInk: "none",
                }}
              >
                Booking ID:{" "}
                <span className="font-mono">eJzTd9f3DzMN8PEGAAtgAMc%3D</span>
              </p>

              {/* Status */}
              <div className="flex items-center mt-2">
                <span
                  className="text-white text-xs px-3 py-1 rounded-full"
                  style={{ background: "#336749" }}
                >
                  Upcoming
                </span>
                <span className="ml-2 custom-text-lable-style">
                  24 Jan 2025
                </span>
              </div>
              <div className="flex justify-between space-x-4 mt-2">
                {/* Left side: Traveller Information */}
                <div className="w-1/2 text-sm">
                  <p className="custom-text-lable-style">
                    <span className="font-semibold">Traveller Name: </span>
                    <span>Anthony L</span>
                    <br />
                    <span className="font-semibold">Creation Date: </span>
                    <span>2025-01-28T18:11:00.000</span>
                    <br />
                    <span className="font-semibold">Email Address: </span>
                    <span>Anthony@example.com</span>
                  </p>
                </div>

                {/* Right side: Terminal Information */}
                <div className="w-1/2 text-right text-xs  custom-text-lable-style">
                  <span>Departure Terminal - I</span>
                  <br />
                  <span>Arrival Terminal - 3</span>
                </div>
              </div>

              <div className="flex justify-between space-x-4 mt-2">
                <div className="w-1/2 text-sm">
                  <p className="text-sm font-poppins text-left text-gray-500 font-normal leading-none">
                    Airlines
                  </p>
                  <h3 className="font-poppins text-left text-lg font-semibold leading-none">
                    Fly Emirates
                  </h3>
                </div>
                <div className="w-1/2 text-sm text-right">
                  <p className="text-sm font-poppins text-gray-500 font-normal leading-none">
                    Class
                  </p>
                  <h3 className="font-poppins text-lg font-semibold leading-none">
                    Business
                  </h3>
                </div>
              </div>

              {/* Flight Route */}
              {/* <div className="mt-2 flex justify-between items-center ">
                <div className="flex-1 text-left">
                  <h3 className="text-lg font-semibold ">San Jose, CA</h3>
                  <p className="text-sm text-gray-500">09:30 AM</p>
                </div>
                <div className="flex flex-col items-center">
                  <FaPlaneDeparture className="text-purple-600 text-xl" />
                  <p className="text-xs text-gray-500">Jan 28, 2025</p>
                </div>
               
                <div className="flex-1 text-right">
                  <h3 className="text-lg font-semibold">Riyadh, RUH</h3>
                  <p className="text-sm text-gray-500">11:45 PM</p>
                </div>
              </div> */}
              <div className="w-full mt-2">
                <FlightLine
                  from="San Hose"
                  fromState="CA"
                  to="Riyadh"
                  toState="Ruh"
                  isWhiteIcon={false}
                  travelDate="Jan, 28, 2025"
                />
              </div>

              {/* Flight Duration */}
              <div className="mt-4 flex items-center ">
                <div
                  className="text-sm  text-white p-1  flex items-center rounded-2xl"
                  style={{ background: "#78006E" }}
                >
                  <FaRegCalendarAlt className="text-white-200 mr-2 " />
                  <span className="text-sm text-white-200">Jan 28, 2025</span>
                </div>
                <div
                  className="text-sm text-white p-1 ml-2 flex items-center rounded-2xl"
                  style={{ background: "#78006E" }}
                >
                  <FaClock className="text-white-200  mr-2" />
                  <span className="text-sm  text-white-200">2h 30m</span>
                </div>
              </div>

              {/* Boarding Info */}
              <div className="mt-2 flex justify-between text-sm custom-text-lable-style">
                <div>
                  <p className="text-gray-500 leading-none">Boarding Time</p>
                  <p className="font-semibold leading-none">8:00 AM</p>
                </div>
                <div>
                  <p className="text-gray-500 leading-none">Seat</p>
                  <p className="font-semibold leading-none">34A</p>
                </div>
                <div>
                  <p className="text-gray-500 leading-none">Class</p>
                  <p className="font-semibold leading-none">Business</p>
                </div>
              </div>

              {/* Barcode */}
              <div className="mt-2 flex justify-center items-center">
                {/* Barcode Image */}
                <div className="mx-4">
                  <img
                    src="src/assets/barcode.png"
                    alt="Barcode"
                    className="w-64 h-14"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

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
    <div className="flex items-center justify-between">
  {/* From Section */}
  <div className="w-1/5">
    <h3 className="text-lg font-semibold">{props.from}</h3>
    <div className="text-sm text-gray-400">
      <div>{props.fromState}</div>
      <div>{props.departureTime}</div>
    </div>
  </div>

  {/* Flight Icon Section */}
  <div className="w-3/5 flex justify-center relative">
    {props.travelDate && (
      <div className="absolute bottom-[-36px] flex flex-col items-center">
        <img
          src={props.isWhiteIcon ? flightIconWhite : flightIcon}
          alt="Flight Icon"
          className="mx-auto"
        />
        <div className="text-xs text-gray-400 mt-1">{props.travelDate}</div>
      </div>
    )}
    <div className="border-t border-dashed border-gray-300 w-full mt-6"></div>
  </div>

  {/* To Section */}
  <div className="w-1/5 text-right">
    <h3 className="text-lg font-semibold">{props.to}</h3>
    <div className="text-sm text-gray-400">
      <div>{props.toState}</div>
      <div>{props.arrivalTime}</div>
    </div>
  </div>
</div>

  );
};

export default FlightBookingDetails;
