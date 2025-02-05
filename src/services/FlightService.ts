// src/services/FlightService.ts

// Define an interface for a flight
export interface Flight {
    flightId: string;
    airline: string;
    origin: string;
    destination: string;
    departure: string;
    arrival: string;
    duration: string;
    aircraft: string;
    numberOfBookableSeats: number;
    currency: string;
    price: number;
    cabinClass: string;
  }
  
  // JSON data (your sample data)
  const flightData: Flight[] = [
    {
      flightId: "1",
      airline: "QR",
      origin: "ATL",
      destination: "AHB",
      departure: "19:45",
      arrival: "17:05",
      duration: "PT21H20M",
      aircraft: "351",
      numberOfBookableSeats: 9,
      currency: "EUR",
      price: 768.43,
      cabinClass: "ECONOMY"
    },
    {
      flightId: "1",
      airline: "QR",
      origin: "ATL",
      destination: "AHB",
      departure: "18:05",
      arrival: "20:45",
      duration: "PT21H20M",
      aircraft: "359",
      numberOfBookableSeats: 9,
      currency: "EUR",
      price: 768.43,
      cabinClass: "ECONOMY"
    },
    {
      flightId: "1",
      airline: "QR",
      origin: "ATL",
      destination: "AHB",
      departure: "23:45",
      arrival: "01:05",
      duration: "PT21H20M",
      aircraft: "320",
      numberOfBookableSeats: 9,
      currency: "EUR",
      price: 768.43,
      cabinClass: "ECONOMY"
    }
  ];
  
  export const fetchFlights = (): Promise<Flight[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(flightData);
      }, 1500); 
    });
  };
  