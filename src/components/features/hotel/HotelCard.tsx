import React from "react";
import { Card } from "../../ui/Card";
import { Hotel } from "../../../services/hotelService";
import flame from "../../../assets/flame.svg";
interface HotelCardProps {
  hotel: Hotel;
}
const chipStyle: React.CSSProperties = {
  border: "1.46px solid rgba(185, 101, 162, 0.6)",
  backgroundColor: "rgba(185, 101, 162, 0.34)",
  backgroundBlendMode: "overlay",
  fontSize: "10px", // Reduced font size for smaller text
  borderRadius: "35px",
  padding: "4px 12px", // Adjusted padding for better fit
  margin: "0 6px",
  display: "inline-flex", // This ensures it adjusts to the text content's width
  alignItems: "center", // Center the text and icon vertically
  justifyContent: "center", // Ensure the content is centered horizontally
  width: "auto", // Let the width adjust automatically based on the content
};

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  return (
    <Card className="bg-gray-800 p-3 rounded-lg">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          {/* Hotel Image */}
          <img
            src={hotel.image}
            alt={hotel.title}
            className="h-32 w-full rounded-md object-cover"
          />
        </div>
        <div className="w-full md:w-1/2  md:mt-0">
          <h3
            className="text-lg font-semibold leading-7 text-left  px-3 py-1 rounded-md"
            style={{ fontFamily: "Poppins", color: "#6EAF89" }}
          >
            Top Recommendation
          </h3>
          <div style={{ paddingLeft: "10px"}}>
            <span style={chipStyle}>
              <img
                style={{ float: "left", marginRight: "3px" }}
                src={flame}
                alt="flame"
              />
              Popular
            </span>
            <span style={chipStyle}>
              <img
                style={{ float: "left", marginRight: "3px", marginTop: "3px" }}
                src={flame}
              />
              Luxury
            </span>
          </div>
        </div>
      </div>
      <div className="mt-1 flex flex-col">
        <span
          className="text-lg font-normal leading-[36.32px] tracking-[-0.67px] text-left font-poppins mb-0"
          style={{
            fontFamily: "Poppins",
            fontSize: "14px",
            fontWeight: "200",
            lineHeight: "36.32px",
            letterSpacing: "-0.6735748052597046px",
            textAlign: "left",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            color: "#FFFFFF",
          }}
        >
          {hotel.title}
        </span>

        <div className="flex space-x-4">
          <div className="text-gray-400 pr-4 flex-1 border-r-[1.65px] border-r-[#FFFFFF1A]">
            <span
              className="font-poppins text-lg font-normal text-left"
              style={{
                fontSize: "14px",
                lineHeight: "36.32px",
                letterSpacing: "-0.67px",
                textAlign: "left",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
                color: "background: #FFFFFF99",
              }}
            >
              COST
            </span>

            <br />
            <span
              className="font-poppins text-lg font-normal"
              style={{
                fontFamily: "Poppins",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "29.72px",
                letterSpacing: "-0.6603674292564392px",
                textAlign: "left",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
                color: "#FFFFFF"
              }}
            >
              ${hotel.price} CAD/night
            </span>
          </div>

          <div className="text-gray-400 pr-4 flex-1 border-r-[1.65px] border-r-[#FFFFFF1A] ">
            <span
              className="font-poppins text-lg font-normal leading-[18px] tracking-[-0.67px] text-left"
              style={{
                fontSize: "14px",
                lineHeight: "36.32px",
                letterSpacing: "-0.67px",
                textAlign: "left",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
                color: "background: #FFFFFF99",
              }}
            >
              MAPS
            </span>
            <br />
            <span className="font-poppins text-lg font-normal leading-[18px] tracking-[-0.66px] text-left"  style={{
                fontFamily: "Poppins",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "29.72px",
                letterSpacing: "-0.6603674292564392px",
                textAlign: "left",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
                color: "#FFFFFF"
              }}>
              {hotel.distance} km away
            </span>
          </div>

          <div className="text-gray-400 pr-4 flex-1">
            <span
              className="font-poppins text-lg font-normal leading-[18px] tracking-[-0.67px] text-left"
              style={{
                fontSize: "14px",
                lineHeight: "36.32px",
                letterSpacing: "-0.67px",
                textAlign: "left",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
                color: "background: #FFFFFF99",
              }}
            >
              AVAILABLE
            </span>
            <br />
            <span className="font-poppins text-lg font-normal leading-[18px] tracking-[-0.66px] text-left"  style={{
                fontFamily: "Poppins",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "29.72px",
                letterSpacing: "-0.6603674292564392px",
                textAlign: "left",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
                color: "#FFFFFF"
              }}>
              {hotel.availability} left
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default HotelCard;
