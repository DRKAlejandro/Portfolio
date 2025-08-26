import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = ["home", "about", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
    setActiveSection(sectionId);
  };

  const navItems = [
    { id: "home", text: "Home" },
    { id: "about", text: "About" },
    { id: "projects", text: "Projects" },
    { id: "skills", text: "Skills" },
    { id: "contact", text: "Contact" }
  ];

  return (
    <header
      className={`header fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div className="logo">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
              className="text-xl font-bold text-gray-700 hover:text-teal-500 transition-colors"
            >
              JAHA
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 items-center">
            {navItems.map((item) => (
              <NavItem
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                text={item.text}
                isActive={activeSection === item.id}
                isMobile={false}
              />
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative focus:outline-none"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="menu"
          >
            <span
              className={`block w-5 h-0.5 bg-secondary transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-secondary transition-all duration-300 mt-1 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-secondary transition-all duration-300 mt-1 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden bg-white/98 backdrop-blur-lg shadow-lg overflow-hidden transition-all duration-300 ease-out ${
            isMenuOpen
              ? "max-h-96 opacity-100 visible border-t border-gray-100"
              : "max-h-0 opacity-0 invisible"
          }`}
        >
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <NavItem
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                text={item.text}
                isActive={activeSection === item.id}
                isMobile={true}
              />
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

const NavItem = ({ onClick, text, isActive, isMobile }) => {
  if (isMobile) {
    return (
      <button
        onClick={onClick}
        className={`block w-full text-left px-5 py-3 transition-colors duration-200 border-b border-gray-100 ${
          isActive
            ? "text-primary bg-teal-50"
            : "text-secondary hover:text-quaternary hover:bg-gray-50"
        }`}
      >
        {text}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`relative px-3 py-2 group text-sm font-medium ${
        isActive ? "text-primary" : "text-secondary hover:text-quaternary"
      }`}
    >
      <span className="relative z-10">{text}</span>
      <span
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-quaternary transition-all duration-300 ${
          isActive ? "h-1 opacity-80" : "group-hover:h-1 group-hover:opacity-80"
        }`}
      ></span>
    </button>
  );
};

export default Header;