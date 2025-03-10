import { createContext, ReactNode, useState } from "react";
import { IProduct } from "../interfaces/Product";

interface ICartContext {
  count: { id: string; value: number };
  setCount: React.Dispatch<React.SetStateAction<{ id: string; value: number }>>;
  Calculate: {};
  Count: {};
  handleAddToCart: (id: string, product: IProduct) => void;
  removeItem: (index: string) => void;
}

interface ICartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<ICartContext>({
  count: { id: "", value: 0 },
  setCount: () => {},
  Calculate: {},
  Count: {},
  handleAddToCart: () => {},
  removeItem: () => {},
});

export const CartContextProvider = ({ children }: ICartProviderProps) => {
  const [count, setCount] = useState({ id: "", value: 1 });
  const taxService = 0.1

  let cartItem = localStorage.getItem("cart-item");
  let cartItemParse = JSON.parse(cartItem!);

  const [productItems, setProductItems] = useState(cartItemParse || []);

  const Count = {
    decreaseCount: (id: string) => {
      setCount({ id: id, value: count.value - 1 });

      let existProductIndex = cartItemParse.findIndex(
        (item: { id: string }) => item.id == id
      );
      existProductIndex != -1 &&
        ((cartItemParse[existProductIndex].quantity =
          cartItemParse[existProductIndex].quantity - 1),
        cartItemParse[existProductIndex].quantity == 0 && removeItem(id));
      localStorage.setItem("cart-items", JSON.stringify(cartItemParse));
    },

    increaseCount: (id: any) => {
      setCount({ id: id, value: count.value + 1 });

      let existProductIndex = cartItemParse.findIndex(
        (item: { id: string }) => item.id == id
      );
      existProductIndex != -1 &&
        (cartItemParse[existProductIndex].quantity += 1);
      localStorage.setItem("cart-items", JSON.stringify(cartItemParse));
    },
  };

  const handleAddToCart = (id: string, product: IProduct) => {
    let cartItems = localStorage.getItem('cart-items');
    
    if(cartItems) {
      let cartItemsArray = JSON.parse(cartItems);
      let existingProductIndex = cartItemsArray.findIndex((item: { id: string; }) => item.id === id);
      
      existingProductIndex != -1 ? cartItemsArray[existingProductIndex].quantity += 1
      : cartItemsArray.push({ ...product, quantity: 1, id: id })
      
      localStorage.setItem('cart-items', JSON.stringify(cartItemsArray));
    } else {
      let newCart = [{ ...product, quantity: 1, id: id }]
      localStorage.setItem('cart-items', JSON.stringify(newCart));
    }
  }

  const removeItem = (productId: string) => {
    setProductItems((prevItems: any[]) =>
      prevItems.filter((item) => item.id !== productId)
    );
    localStorage.setItem("product-items", productItems);

    const updatedCartItem = cartItemParse.filter(
      (item: any) => item.id !== productId
    );

    localStorage.setItem("cart-items", JSON.stringify(updatedCartItem));
  };

  const Calculate = {
    totalItems: () => {
      let totalItems = 0;
      cartItem && (totalItems = cartItemParse.reduce((acc: number, item: { quantity: number; }) => acc + item.quantity, 0))
  
      return totalItems;
    },
    subtotalPrice: () => {
      let subtotal = 0;
      
      cartItem && (subtotal = cartItemParse.reduce((acc: number, item: {quantity: number, price: number}) => 
        acc + (item.quantity * item.price)), 0)

      return subtotal.toFixed(2);
    },
    subTotalTax: () => {
        const subtotal = Number(Calculate.subtotalPrice())
        const total = subtotal * taxService  
        return  total.toFixed(2)
    },
    totalPrice: () => {
      const totalPrice = Number(Calculate.subtotalPrice()) * taxService 
      return totalPrice.toFixed(2)
    }
  }

  return <CartContext.Provider value={{count, setCount, Calculate, Count, handleAddToCart, removeItem}}>
    { children }
  </CartContext.Provider>;
};