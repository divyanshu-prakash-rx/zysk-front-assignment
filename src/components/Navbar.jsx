import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import dropdown from "../images/Avatars/Avatar_1.png";
import logo from "../images/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  return (
    <div className="px-8 md:px-28 my-5 border-b border-gray-200">
      <nav className="flex items-center justify-between py-4">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-16 md:w-20" />
          <div className="hidden md:flex ml-12 space-x-8">
            <a href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </a>

            <div className="relative">
              <button
                className="text-gray-600 hover:text-gray-900 flex items-center"
                onClick={() => toggleDropdown("products")}
              >
                Products <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {dropdownOpen === "products" && (
                <div className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md py-2">
                  <a href="/" className="block px-4 py-2 hover:bg-gray-100">
                    Product 1
                  </a>
                  <a href="/" className="block px-4 py-2 hover:bg-gray-100">
                    Product 2
                  </a>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                className="text-gray-600 hover:text-gray-900 flex items-center"
                onClick={() => toggleDropdown("resources")}
              >
                Resources <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {dropdownOpen === "resources" && (
                <div className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md py-2">
                  <a href="/" className="block px-4 py-2 hover:bg-gray-100">
                    Blog
                  </a>
                  <a href="/" className="block px-4 py-2 hover:bg-gray-100">
                    Help Center
                  </a>
                </div>
              )}
            </div>

            <a href="/" className="text-gray-600 hover:text-gray-900">
              Pricing
            </a>
          </div>
        </div>

        <div className="flex items-center">
          <img
            src={dropdown}
            alt="profile"
            className="hidden md:block w-8 h-8 rounded-full"
          />

          <button
            className="md:hidden text-gray-700 ml-4"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="w-64 bg-white shadow-md h-full p-5 relative">
            <button
              className="absolute top-4 right-4 text-gray-600"
              onClick={() => setMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mt-10 space-y-6">
              <a href="/" className="block text-gray-700">
                Home
              </a>
              <button
                className="w-full text-left text-gray-700 flex items-center"
                onClick={() => toggleDropdown("products")}
              >
                Products <ChevronDown className="ml-2 w-4 h-4" />
              </button>
              {dropdownOpen === "products" && (
                <div className="pl-4 space-y-2">
                  <a href="/" className="block text-gray-600">
                    Product 1
                  </a>
                  <a href="/" className="block text-gray-600">
                    Product 2
                  </a>
                </div>
              )}

              <button
                className="w-full text-left text-gray-700 flex items-center"
                onClick={() => toggleDropdown("resources")}
              >
                Resources <ChevronDown className="ml-2 w-4 h-4" />
              </button>
              {dropdownOpen === "resources" && (
                <div className="pl-4 space-y-2">
                  <a href="/" className="block text-gray-600">
                    Blog
                  </a>
                  <a href="/" className="block text-gray-600">
                    Help Center
                  </a>
                </div>
              )}

              <a href="/" className="block text-gray-700">
                Pricing
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
