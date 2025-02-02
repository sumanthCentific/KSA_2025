// Define the types for a Restaurants
export interface Foods {
    name: string;
    image: string;
    unit: string;
    price: string;
    distance: string;
    description: string;
    origin: string;
    originIcon: string;
    type: string;
    typeIcon: string;
  }
  
  // Mock the fetchRestaurants function
  export const fetchRestaurants = (): Promise<Foods[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            name: "MR Chow Riyadh",
            image: "src/assets/food-image.jpg",
            price: '$1232 Per Person',
            distance: '2',
            unit: 'Miles',
            description: 'It is part of Inditex, owner of Zara and Bershka brands. The brand focuses on casual streetwear and accessories for young people at an affordable price tag.',
            origin:'Asian',
            originIcon:'src/assets/icons/origin.png',
            type:'Ambience',
            typeIcon:'src/assets/icons/ambience.png'
          },
          {
            name: "MR Chow Riyadh",
            image: "src/assets/food-image.jpg",
            price: '$2000 Per Person',
            distance: '2',
            unit: 'Miles',
            description: 'It is part of Inditex, owner of Zara and Bershka brands. The brand focuses on casual streetwear and accessories for young people at an affordable price tag.',
            origin:'Asian',
            originIcon:'src/assets/icons/origin.png',
            type:'Ambience',
            typeIcon:'src/assets/icons/ambience.png'
          },
        ]);
      }, 1500); // Simulate network delay
    });
  };