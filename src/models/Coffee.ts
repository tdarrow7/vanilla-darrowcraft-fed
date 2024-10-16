export interface CoffeeModel {
    id: number;
    name: string;
    isGround: boolean;
    dateadded: Date;
    roastType: number;
    description?: string;
    imageurl: string;
  }
  
  export interface CoffeeListModel {
    coffeeList: CoffeeModel[];
  }