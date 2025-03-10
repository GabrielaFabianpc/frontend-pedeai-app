export interface IProduct {
    id: string,
    name: string,
    price: string,
    img: string,
    description: string,
  }
  
  export interface ProductInCart extends IProduct {
    quantity: number
  }
  
  export interface ProductResponse { 
    data: {
      Product: IProduct
    }
  }