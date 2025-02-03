
export interface Item {
    name: string;
    price: number;
  }
  
  export interface Shop {
    name: string;
    category: string;
    items: Item[];
  }
  
  export interface Mall {
    name: string;
    location: string;
    shops: Shop[];
  }
  
  const mallData: Mall[] = [
    {
      name: "Via Riyadh",
      location: "Riyadh",
      shops: [
        {
          name: "Shop 1",
          category: "fashion",
          items: [
            { name: "Designer Handbag", price: 1377.71 },
            { name: "Luxury Watch", price: 1392.69 },
            { name: "Men’s Jacket", price: 796.3 },
            { name: "Evening Gown", price: 1088.1 },
            { name: "Sports Jacket", price: 1337.34 },
            { name: "Wallet", price: 1428.32 },
          ],
        },
      ],
    },
  ];
  
  export const fetchMallData = (): Promise<Mall[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mallData);
      }, 1500); 
    });
  };
  