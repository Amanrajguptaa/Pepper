import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";
import ProductPage from "./pages/ProductPage";
import { ShopContext } from "./context/store";
import Auth from "./pages/Auth";

const App = () => {
  const { token, isAuthVisible, setIsAuthVisible } = useContext(ShopContext);

  return (
    <div>
      <Auth isAuthVisible={isAuthVisible} setIsAuthVisible={setIsAuthVisible} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
