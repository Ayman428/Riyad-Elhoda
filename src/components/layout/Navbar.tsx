import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "/public/assets/Logo.png";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("ar");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    localStorage.setItem("lang", currentLang);
    i18n.changeLanguage(currentLang);
    document.documentElement.setAttribute(
      "dir",
      currentLang === "ar" ? "rtl" : "ltr"
    );
  }, [currentLang]);

  const navLinks = [
    { label: t("navbar:home"), to: "/" },
    { label: t("navbar:about"), to: "/about" },
    { label: t("navbar:schoolbranch"), to: "/school-branch" },
  ];

  return (
    <header className="shadow-md fixed top-0 left-0 w-full bg-white z-50">
      <nav className="container mx-auto flex items-center justify-between h-16 px-4 sm:px-10">
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <img src={Logo} alt="logo" className="h-12 w-auto me-6" />
          <div className="hidden lg:flex items-center gap-4 text-[#10357F] text-lg font-medium">
            {navLinks.map((link, index) => (
              <React.Fragment key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#10357F] border-b-2 border-[#10357F] pb-1"
                      : "hover:text-[#10357F]"
                  }
                >
                  {link.label}
                </NavLink>
                {index !== navLinks.length - 1 && (
                  <span className="text-[#10357F]">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <NavLink
            to="/contact"
            className="text-[#10357F] border border-[#10357F] px-4 py-2 rounded-md hover:bg-[#10357F] hover:text-white transition"
          >
            {t("navbar:contact")}
          </NavLink>
          <button
            onClick={() => setCurrentLang(currentLang === "en" ? "ar" : "en")}
            className="bg-[#10357F] text-white px-4 py-2 rounded-md"
          >
            {currentLang === "en" ? "AR" : "EN"}
          </button>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-[#10357F]">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="lg:hidden bg-white shadow-md text-center p-4 text-[#10357F]">
          <ul className="space-y-4 text-lg font-medium">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#10357F] border-b-2 border-[#10357F] pb-1"
                      : "hover:text-[#10357F]"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block text-[#10357F] border border-[#10357F] px-4 py-2 rounded-md hover:bg-[#10357F] hover:text-white transition"
              >
                {t("navbar:contact")}
              </NavLink>
            </li>
            <li>
              <button
                onClick={() => {
                  setCurrentLang(currentLang === "en" ? "ar" : "en");
                  setIsOpen(false);
                }}
                className="bg-[#10357F] text-white px-4 py-2 rounded-md"
              >
                {currentLang === "en" ? "AR" : "EN"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
