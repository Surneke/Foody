import { createContext, useState } from "react";
import { data } from "../data";

export const OrderContext = createContext();
export const OrderProvider = ({ children }) => {
    const [order,setOrder] = useState([]);
    const [packing,setPacking] = useState([]);
    const [delivery,setDelivery] = useState([]);
    
  return (
    <OrderContext.Provider value={{data}}>
      {children}
    </OrderContext.Provider>
  );
};
