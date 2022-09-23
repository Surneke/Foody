import { createContext, useState } from "react";

export const MenuContext = createContext();
export const MenuProvider = ({ children }) => {
  const [addIngredients, setAddIngredients] = useState([])
  const [addFood, setAddFood] = useState([])
  return (
    <MenuContext.Provider 
      value={{
        addIngredients,
        setAddIngredients,
        addFood,
        setAddFood
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
