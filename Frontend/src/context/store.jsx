import { createContext } from "react";
import { menuData } from "../data/menuData";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {

  const value = {
    menuData,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
