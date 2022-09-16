import { createContext, useContext, useState } from "react";
import { data } from "../data";

export const MenuContext = createContext();
export const MenuProvider = ({ children }) => {
  return (
    <MenuContext.Provider value={{data}}>
      {children}
    </MenuContext.Provider>
  );
};
