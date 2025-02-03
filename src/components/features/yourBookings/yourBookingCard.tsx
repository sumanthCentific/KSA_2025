import React from "react";
import { BookingList } from "../../../services/yourBookingService";

interface YourBookingCardProps {
  bookingsList: BookingList;
}

const style = {
  gridStyle: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    fontFamily: "Poppins, sans-serif",
  },
  cardTitleStyle: {
    paddingBottom: "10px",
  },
  cardGridStyle: {
    padding: "20px",
    borderRadius: "10px",
    margin: "10px",
    background: "#000000",
  },
  cardInnerGridStyle: {
    padding: "15px",
    background: "#363638",
    borderRadius: "10px",
  },
  cardInnerImageGridStyle: {
    display: "grid",
    gridTemplateColumns: "90% auto",
    alignItems: "center",
  },
  cardInnerNumberStyle: {
    paddingBottom: "10px",
    color: "#259292",
    fontSize: "30px",
    fontWeight: "500",
  },
  cardLocationStyle: {
    display: "inline-flex",
    fontSize: "12px",
    fontWeight: "100",
    color: "#A0A0A0",
    padding: "5px 0px",
  },
  flightTicketStyle: {
    backgroundColor: "#ffffff",
    color: "#000000",
    borderRadius: "10px",
    padding: "20px",
    fontSize: "12px",
  },
  flightTickeStatus: {
    background: "#336749",
    padding: "10px",
    borderRadius: "25px",
    color: "white",
    marginRight: "10px",
    display: 'inline-block',
    lineHeight: '10px',
    height: '30px'
  },
  flightTicketDate: {
    color: "#666666",
  },
  flightTicketRoute: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "15px 0",
  },
  flightTicketDeparture: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: 'relative'
  },
  flightTicketBookingDetails: {
    display: "grid",
    gridTemplateColumns: "108px 100px 50px",
    paddingBottom: '15px'
  },
  hotelGridStyle: {
    fontSize: "12px",
  },
  hotelReservationImageStyle: {
    borderRadius: "10px",
    fontSize: "14px ",
  },
  hotelNameGridStyle: {
    display: "grid",
    gridTemplateColumns: "180px 70px",
    paddingTop: "8px",
    fontSize: "14px",
  },
  hotelBookingTimingGridStyle: {
    display: "grid",
    gridTemplateColumns: "165px 10px 115px 30px",
    color: "#A0A0A0",
    paddingTop: "8px",
  },
  hotelNameStatusGridStyle: {
    background: "#336749",
    padding: "10px",
    borderRadius: "10px",
    height: "25px",
    lineHeight: "5px",
    textAlign: "center",
    fontSize: "12px",
  },
  foodBookingTimingGridStyle: {
    display: "grid",
    gridTemplateColumns: "80px 10px 200px 30px",
    color: "#A0A0A0",
    paddingTop: "8px",
  },
  airlineOriginIcon: {
    display: 'inline-block',
    position: 'absolute',
    top: '0px',
    left: '40px'
  },
  airlineDestinationIcon: {
    display: 'inline-block',
    position: 'absolute',
    top: '0px',
    right: '40px'
  }
};

const YourBookingCard: React.FC<YourBookingCardProps> = ({ bookingsList }) => {
  return (
    <div style={style.gridStyle}>
      <div style={style.cardGridStyle}>
        <h4 style={style.cardTitleStyle}>Airport Pick Up</h4>
        <div style={style.cardInnerGridStyle}>
          <h6>Airport Cab Pickup</h6>
          <span style={style.cardLocationStyle}>
            <img src="src/assets/icons/locationPin.png" /> King Khalid
            International Airport
          </span>
          <div style={style.cardInnerNumberStyle}>RY-76689</div>
          <div style={style.cardInnerImageGridStyle}>
            <img src="src/assets/icons/car.png" />
            <img src="src/assets/icons/call.png" />
          </div>
        </div>
      </div>
      <div style={style.cardGridStyle}>
        <div style={style.hotelGridStyle}>
          <h4 style={style.cardTitleStyle}>Hotel Reservation</h4>
          <div>
            <img
              src="src/assets/images/hotel-reservations.png"
              alt="Hotel Room"
              style={style.hotelReservationImageStyle}
            />
            <div style={style.hotelNameGridStyle}>
              <div>Jaudyan Hotel, Riyadh</div>
              <div style={style.hotelNameStatusGridStyle}>Booked</div>
            </div>
            <div style={style.hotelBookingTimingGridStyle}>
              <div>24 Jan 2025 - 25 Jan 2025</div>
              <div> | </div>
              <div>8:00 am</div>
              <div>
                {" "}
                <img src="src/assets/icons/call.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={style.cardGridStyle}>
        <h4 style={style.cardTitleStyle}>Flight Booking</h4>
        <div style={style.flightTicketStyle}>
          <div>
            <span style={style.flightTickeStatus}>Upcoming</span>
            <span style={style.flightTicketDate}>24 Jan 2025</span>
          </div>
          <div style={style.flightTicketRoute}>
            <div style={style.flightTicketDeparture}>
              <span>San</span>
              <img src="src/assets/icons/airline-origin.png"  style={style.airlineOriginIcon}/>
              <span>09:30</span>
            </div>
            <div style={style.flightTicketDeparture}>
                <img src="src/assets/icons/airline-arrow.png" />
              <span>1h 30m</span>
            </div>
            <div style={style.flightTicketDeparture}>
              <span>Riy </span>
              <img src="src/assets/icons/airline-destination.png"  style={style.airlineDestinationIcon} />
              <span>12:30</span>
            </div>
          </div>
          <div style={style.flightTicketBookingDetails}>
            <div>
              <div style={{paddingBottom:'5px'}}>Boarding time</div> 8:00 am
            </div>
            <div>
              <div style={{paddingBottom:'5px'}}>Seat</div> 34A
            </div>
            <div>
              <div style={{paddingBottom:'5px'}}>Class</div> Business
            </div>
          </div>
          <div>
            <img src="src/assets/images/barcode.png" alt="Barcode" />
          </div>
        </div>
      </div>
      <div style={style.cardGridStyle}>
        <div style={style.hotelGridStyle}>
          <h4 style={style.cardTitleStyle}>F & B Reservation</h4>
          <div>
            <img
              src="src/assets/food-image.jpg"
              alt="Hotel Room"
              style={style.hotelReservationImageStyle}
            />
            <div style={style.hotelNameGridStyle}>
              <div>MR Chow Riyadh</div>
            </div>
            <div style={style.foodBookingTimingGridStyle}>
              <div>24 Jan 2025</div>
              <div> | </div>
              <div>8:00 am</div>
              <div>
                {" "}
                <img src="src/assets/icons/call.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourBookingCard;
