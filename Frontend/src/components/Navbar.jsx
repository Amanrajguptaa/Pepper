import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { ShopContext } from "../context/store";
import { Menu } from "lucide-react";


const Navbar = () => {
  const { token, logOut, setIsAuthVisible } = useContext(ShopContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/menu", label: "Menu" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div>
      <nav className="flex justify-between items-center px-6 md:px-0 py-4 border-b border-gray-200  shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center w-full">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link onClick={() => scrollTo(0, 0)} to="/">
            <span className="text-pink-red">Pepper</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button onClick={toggleMenu} className="md:hidden">
          <Menu className="w-7 h-7" />
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map(({ path, label, icon }) => (
            <NavLink
              key={label}
              to={path}
              className={({ isActive }) =>
                isActive ? "text-primary flex items-center gap-1" : "hover:text-primary flex items-center gap-1"
              }
            >
              
              <p className="text-lg font-semibold">{label}</p>
            </NavLink>
          ))}
        </div>

        {/* Desktop Account / Shop Button */}
        <div className="hidden md:block">
          {token ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <img
                  className="rounded-full h-10 w-10"
                  src="https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_items_boosted&w=740"
                  alt="Profile"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white mt-5">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link to="/profile">
                  <DropdownMenuItem className="flex items-center gap-2">
                    <User size={16} /> Profile
                  </DropdownMenuItem>
                </Link>

                <DropdownMenuItem
                  onClick={logOut}
                  className="flex items-center gap-2"
                >
                  <LogOut size={16} /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <button
              onClick={() => setIsAuthVisible(true)}
              className="bg-pink-red text-sm text-white px-5 py-3 rounded-3xl hover:bg-pink-red/70 cursor-pointer"
            >
              Shop Now
            </button>
          )}
        </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="absolute bg-white top-16 left-0 right-0 shadow-lg md:hidden z-50 pt-4 pb-3">
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map(({ path, label, icon }) => (
                <NavLink
                  key={label}
                  to={path}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    isActive ? "text-primary flex items-center gap-2" : "hover:text-primary flex items-center gap-2"
                  }
                >
                  {icon}
                  <p className="text-sm font-bold">{label}</p>
                </NavLink>
              ))}

              {token ? (
                <>
                  <Link
                    to="/profile"
                    onClick={toggleMenu}
                    className="flex items-center gap-2"
                  >
                    <User size={16} /> <p className="text-sm font-bold">Profile</p>
                  </Link>

                  <button
                    onClick={logOut}
                    className="text-sm font-bold text-left flex items-center gap-2"
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    setIsAuthVisible(true);
                    toggleMenu();
                  }}
                  className="bg-pink-red text-sm text-white px-5 py-3 rounded-3xl hover:bg-green-700 w-full"
                >
                  Shop Now
                </button>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
