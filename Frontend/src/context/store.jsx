import { createContext, useState } from "react";
import { menuData } from "../data/menuData";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const backendUrl = "http://localhost:8000";
  const [isAuthVisible, setIsAuthVisible] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token") || "");


  const value = {
    backendUrl,
    menuData,
    isAuthVisible,
    setIsAuthVisible,
    token,
    setToken
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
