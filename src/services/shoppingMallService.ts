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
  export const fetchShoppingMalls = (): Promise<Foods[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            name: "Pull & Bear",
            image: "src/assets/shoppingmall-1.png",
            price: 'Category: Handbags, Clothes, luxury watches',
            distance: '2',
            unit: 'nd Floor',
            description: 'It is part of Inditex, owner of Zara and Bershka brands. The brand focuses on casual streetwear and accessories for young people at an affordable price tag.',
            origin:'Fashion',
            originIcon:'src/assets/icons/origin.png',
            type:'Luxury',
            typeIcon:'src/assets/icons/ambience.png'
          },
          {
            name: "Ingie",
            image: "src/assets/shoppingmall-2.png",
            price: 'Category: Handbags, Clothes, luxury watches',
            distance: '1',
            unit: 'st Floor',
            description: 'It is part of Inditex, owner of Zara and Bershka brands. The brand focuses on casual streetwear and accessories for young people at an affordable price tag.',
            origin:'Fashion',
            originIcon:'src/assets/icons/origin.png',
            type:'Luxury',
            typeIcon:'src/assets/icons/ambience.png'
          },
        ]);
      }, 1500); // Simulate network delay
    });
  };