// Define the types for a hotel
export interface Hotel {
  title: string;
  image: string;
  location: string;
  price: number;
  distance: number;
  availability: number;
  features: string[];
}

// Mock the fetchHotels function
export const fetchHotels = (): Promise<Hotel[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          title: "Top Recommendation",
          image: "/jaudyan-hotel.jpg",
          location: "Jaudyan Hotel, Olaya St.",
          price: 300,
          distance: 257,
          availability: 5,
          features: [
            "Business Centre",
            "Spa",
            "Gym",
            "Swimming Pool",
            "5-Star",
            "Asian Food",
          ],
        },
        {
          title: "Another Recommendation",
          image: "/hilton-hotel.jpg",
          location: "Hilton Riyadh, Olaya St.",
          price: 300,
          distance: 257,
          availability: 5,
          features: [
            "Business Centre",
            "Spa",
            "Gym",
            "Swimming Pool",
            "5-Star",
          ],
        },
      ]);
    }, 1500); // Simulate network delay
  });
};
