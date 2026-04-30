import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const navSolid = !isHome || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const goHomeSection = (sectionId) => {
    setIsMobileMenuOpen(false);
    if (isHome) {
      scrollToSection(sectionId);
    } else {
      navigate({ pathname: "/", hash: `#${sectionId}` });
    }
  };

  const linkClass = `text-base font-medium transition-colors ${
    navSolid ? "text-gray-700 hover:text-green-600" : "text-white hover:text-green-300"
  }`;

  const mobileLinkClass =
    "block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        navSolid ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center" aria-label="JIXEV home">
              <img src="/jixev-logo.svg" alt="JIXEV Logo" className="h-16 w-auto" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button type="button" onClick={() => goHomeSection("home")} className={linkClass}>
              Home
            </button>
            <button type="button" onClick={() => goHomeSection("about")} className={linkClass}>
              About Us
            </button>
            <button type="button" onClick={() => goHomeSection("contact")} className={linkClass}>
              Contact Us
            </button>
            <Link
              to="/investors"
              className={`text-base font-medium transition-colors ${
                location.pathname === "/investors"
                  ? "text-green-600 font-semibold"
                  : navSolid
                    ? "text-gray-700 hover:text-green-600"
                    : "text-white hover:text-green-300"
              }`}
            >
              Investors
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${navSolid ? "text-gray-700" : "text-white"}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <button type="button" onClick={() => goHomeSection("home")} className={mobileLinkClass}>
              Home
            </button>
            <button type="button" onClick={() => goHomeSection("about")} className={mobileLinkClass}>
              About Us
            </button>
            <button type="button" onClick={() => goHomeSection("contact")} className={mobileLinkClass}>
              Contact Us
            </button>
            <Link
              to="/investors"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`${mobileLinkClass} ${location.pathname === "/investors" ? "text-green-600 font-semibold" : ""}`}
            >
              Investors
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;