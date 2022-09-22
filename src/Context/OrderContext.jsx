import { createContext, useState } from "react";
import { data } from "../data";

export const OrderContext = createContext();
export const OrderProvider = ({ children }) => {
  const [order,setOrder] = useState([]);
  const [packing, setPacking ]= useState([]);
  const[ delivery,setDelivery] = useState([]);
  const [mistaken,setMistaken] = useState([]);
  
  return (
    <OrderContext.Provider
      value={{
        data,
        setOrder,
        order,
        packing,
        setPacking,
        delivery,
        setDelivery,
        mistaken,
        setMistaken
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
