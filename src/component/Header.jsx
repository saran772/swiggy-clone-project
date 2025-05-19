import { useState } from "react";
import { Link } from "react-router-dom";

const App = () => (
  <div className="text-2xl font-bold text-gray-200">FOOD VILLA</div>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=" bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        <App />
        <nav className="hidden md:flex space-x-6">
          <Link to="/Home" className="text-lg text-white hover:text-gray-300">Home</Link>
          <Link to="/Contact" className="text-lg text-white hover:text-gray-300">Contact</Link>
          <Link to="/Instamart" className="text-lg text-white hover:text-gray-300">Instamart</Link>
          <button
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            className="px-4 py-2 bg-white text-gray-800 rounded-md hover:bg-gray-100"
          >
            {isLoggedIn ? "Log Out" : "Log In"}
          </button>
        </nav>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-gray-400 via-gray-800 to-gray-600 p-4">
          <Link to="/Home" className="block text-lg text-white hover:text-gray-300 py-2">Home</Link>
          <Link to="/Contact" className="block text-lg text-white hover:text-gray-300 py-2">Contact</Link>
          <Link to="/Instamart" className="block text-lg text-white hover:text-gray-300 py-2">Instamart</Link>
          <button
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            className="block w-full text-lg text-white hover:text-gray-300 py-2 bg-gray-800 rounded-md mt-2"
          >
            {isLoggedIn ? "Log Out" : "Log In"}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
