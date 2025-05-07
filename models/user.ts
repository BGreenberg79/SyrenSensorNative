export interface User {
    userId: number;
    name: {
      firstName: string;
      lastName: string;
    };
    age: number;
    gender: string;
    height: string;
    weight: string;
    phoneNumber: string;
    primaryAddress: {
      buildingNumber: string;
      street: string;
      aptUnitNumber: string;
      zipCode: string;
      city: string;
      state: string;
      country: string;
    };
  }