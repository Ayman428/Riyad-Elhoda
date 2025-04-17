import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router";
import { FaBars, FaTimes, FaChevronDown, FaWhatsapp } from "react-icons/fa";
import Logo from "/public/assets/Logo2.png";
import { useTranslation } from "react-i18next";
import { useSettings } from "../../hooks/useSetting";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLgOrHigher, setIsLgOrHigher] = useState(window.innerWidth >= 1024);
  const location = useLocation();
  const [currentLang, setCurrentLang] = useState("ar");
  const { data: settings } = useSettings();
  const [openDropdown, setOpenDropdown] = useState(null);
  const phonesArray = Array.isArray(settings?.phones) ? settings.phones : [];
  const whatsappNumber = phonesArray[1] || "";
  const { t, i18n } = useTranslation();

  useEffect(() => {
    localStorage.setItem("lang", currentLang);
    i18n.changeLanguage(currentLang);
    document.documentElement.setAttribute(
      "dir",
      currentLang === "ar" ? "rtl" : "ltr"
    );
  }, [currentLang]);

  useEffect(() => {
    const handleResize = () => {
      setIsLgOrHigher(window.innerWidth >= 1024);
      if (window.innerWidth >= 1024) setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(isLgOrHigher);

  const toggleDropdown = (menu: any) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const isDropdownActive = (paths: string[]) => {
    return paths.some((path) => location.pathname.startsWith(path));
  };

  return (
    <div className="container mx-auto px-8 sm:px-10">
      <nav className="shadow-md fixed top-0 left-0 w-full z-50 bg-white text-black h-16 flex justify-between items-center px-6">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-full h-16" />
        </div>

        <div className="hidden lg:flex">
          <ul className="flex items-center gap-x-6 text-lg font-medium">
            <li className="mr-auto rtl:ml-auto">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#7A573A] border-b-2 border-[#7A573A] pb-1 rounded-b-md"
                    : "hover:text-[#7A573A]"
                }
              >
                {t("footer:navlinks.home")}
              </NavLink>
            </li>

            <li className="relative group">
              <NavLink to="/about">
                <button
                  className={`flex items-center gap-1 ${
                    isDropdownActive(["/about", "/vision"])
                      ? "text-[#7A573A]"
                      : "hover:text-[#7A573A]"
                  }`}
                >
                  {t("navbar:navlinks.about")} <FaChevronDown />
                </button>
              </NavLink>
              <ul className="absolute hidden group-hover:flex flex-col bg-white shadow-lg top-full right-0 w-40 rounded-b-md text-right border border-gray-200">
                <li>
                  <NavLink
                    to="/about"
                    className="block px-4 py-2 hover:bg-[#7A573A] hover:text-white"
                  >
                    {t("navbar:navlinks.about2")}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/member"
                    className="block px-4 py-2 hover:bg-[#7A573A] hover:text-white"
                  >
                    {t("navbar:navlinks.member")}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/teams"
                    className="block px-4 py-2 hover:bg-[#7A573A] hover:text-white"
                  >
                    {t("navbar:navlinks.team")}
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="relative group">
              <NavLink to="/latest-news">
                <button
                  className={`flex items-center gap-1 ${
                    isDropdownActive([
                      "/latest-news",
                      "/reports",
                      "/visual-identity",
                    ])
                      ? "text-[#7A573A]"
                      : "hover:text-[#7A573A]"
                  }`}
                >
                  {t("navbar:navlinks.mediaCenter")} <FaChevronDown />
                </button>
              </NavLink>
              <ul className="absolute hidden group-hover:flex flex-col bg-white shadow-lg top-full right-0 w-40 rounded-b-md text-right border border-gray-200">
                <li>
                  <NavLink
                    to="/latest-news"
                    className="block px-4 py-2 hover:bg-[#7A573A] hover:text-white"
                  >
                    {t("navbar:navlinks.news")}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/reports"
                    className="block px-4 py-2 hover:bg-[#7A573A] hover:text-white"
                  >
                    {t("navbar:navlinks.reports")}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/visual-identity"
                    className="block px-4 py-2 hover:bg-[#7A573A] hover:text-white"
                  >
                    {t("navbar:navlinks.vision")}
                  </NavLink>
                </li>
                {/* <li><NavLink to="/sliders" className="block px-4 py-2 hover:bg-[#7A573A] hover:text-white">{t("navbar:navlinks.sliders")}</NavLink></li> */}
              </ul>
            </li>

            <li>
              <NavLink
                to="/latest-project"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#7A573A] border-b-2 border-[#7A573A] pb-1 rounded-b-md"
                    : "hover:text-[#7A573A]"
                }
              >
                {t("navbar:navlinks.project")}
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/partners"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#7A573A] border-b-2 border-[#7A573A] pb-1 rounded-b-md"
                    : "hover:text-[#7A573A]"
                }
              >
                {t("navbar:navlinks.partner")}
              </NavLink>
            </li>

            <li className="relative group">
              <NavLink to="/join-us">
                <button
                  className={`flex items-center gap-1 ${
                    isDropdownActive(["/jobs", "/join-us"])
                      ? "text-[#7A573A]"
                      : "hover:text-[#7A573A]"
                  }`}
                >
                  {t("navbar:navlinks.join")} <FaChevronDown />
                </button>
              </NavLink>
              <ul className="absolute hidden group-hover:flex flex-col bg-white shadow-lg top-full right-0 w-40 rounded-b-md text-right border border-gray-200">
                <li>
                  <NavLink
                    to="/join-us"
                    className="block px-4 py-2 hover:bg-[#7A573A] hover:text-white"
                  >
                    {t("navbar:navlinks.join")}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/jobs"
                    className="block px-4 py-2 hover:bg-[#7A573A] hover:text-white"
                  >
                    {t("navbar:navlinks.vacancy")}
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          {whatsappNumber && (
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#7A573A] text-[#7A573A] p-2 rounded-full text-xl hover:bg-[#7A573A] hover:text-white transition"
            >
              <FaWhatsapp className="text-[#7A573A] hover:text-white" />
            </a>
          )}
          <NavLink to="/contact">
            <button className="bg-[#7A573A] text-white px-5 py-2 rounded-md hover:bg-[#5E412A] transition">
              {t("navbar:navlinks.contact")}
            </button>
          </NavLink>
          <button
            onClick={() => setCurrentLang(currentLang === "en" ? "ar" : "en")}
            className="mx-2 rounded-lg bg-[#7A573A] px-4 py-[5px] font-semibold text-white"
          >
            {currentLang === "en" ? "AR" : "EN"}
          </button>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed top-16 left-0 w-full bg-white text-black z-[999] shadow-md lg:hidden">
          <ul className="flex flex-col items-center text-lg font-medium px-6 py-4 space-y-4">
            <li className="text-center">
              <NavLink
                to="/"
                onClick={() => {
                  setIsOpen(false);
                  setOpenDropdown(null);
                }}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#7A573A] border-b-2 border-[#7A573A] pb-1 rounded-b-md"
                    : "hover:text-[#7A573A]"
                }
              >
                {t("navbar:navlinks.home")}
              </NavLink>
            </li>
            <li className="text-center">
              <div className="flex flex-col items-center">
                <button
                  onClick={() => toggleDropdown("about")}
                  className="flex items-center gap-1"
                >
                  {t("navbar:navlinks.about")} <FaChevronDown />
                </button>
                <div
                  className={`${
                    openDropdown === "about" ? "block" : "hidden"
                  } w-full mt-2`}
                >
                  <ul className="flex flex-col text-center space-y-2">
                    <li>
                      <NavLink
                        to="/about"
                        onClick={() => {
                          setIsOpen(false);
                          setOpenDropdown(null);
                        }}
                        className={({ isActive }) =>
                          isActive
                            ? "text-[#7A573A] border-b-2 border-[#7A573A] pb-1 rounded-b-md"
                            : "hover:text-[#7A573A]"
                        }
                      >
                        {t("navbar:navlinks.about2")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/member"
                        onClick={() => {
                          setIsOpen(false);
                          setOpenDropdown(null);
                        }}
                        className={({ isActive }) =>
                          isActive
                            ? "text-[#7A573A] border-b-2 border-[#7A573A] pb-1 rounded-b-md"
                            : "hover:text-[#7A573A]"
                        }
                      >
                        {t("navbar:navlinks.member")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/teams"
                        onClick={() => {
                          setIsOpen(false);
                          setOpenDropdown(null);
                        }}
                        className={({ isActive }) =>
                          isActive
                            ? "text-[#7A573A] border-b-2 border-[#7A573A] pb-1 rounded-b-md"
                            : "hover:text-[#7A573A]"
                        }
                      >
                        {t("navbar:navlinks.team")}
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="text-center">
              <div className="flex flex-col items-center">
                <button
                  onClick={() => toggleDropdown("mediaCenter")}
                  className="flex items-center gap-1"
                >
                  {t("navbar:navlinks.mediaCenter")} <FaChevronDown />
                </button>
                <div
                  className={`${
                    openDropdown === "mediaCenter" ? "block" : "hidden"
                  } w-full mt-2`}
                >
                  <ul className="flex flex-col text-center space-y-2">
                    <li>
                      <NavLink
                        to="/latest-news"
                        onClick={() => {
                          setIsOpen(false);
                          setOpenDropdown(null);
                        }}
                        className={({ isActive }) =>
                          isActive
                            ? "text-[#7A573A] border-b-2 border-[#7A573A] pb-1 rounded-b-md"
                            : "hover:text-[#7A573A]"
                        }
                      >
                        {t("navbar:navlinks.news")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/reports"
                        onClick={() => {
                          setIsOpen(false);
                          setOpenDropdown(null);
                        }}
                        className={({ isActive }) =>
                          isActive
                            ? "text-[#7A573A] border-b-2 border-[#7A573A] pb-1 rounded-b-md"
                            : "hover:text-[#7A573A]"
                        }
                      >
                        {t("navbar:navlinks.reports")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/visual-identity"
                        onClick={() => {
                          setIsOpen(false);
                          setOpenDropdown(null);
                        }}
                        className={({ isActive }) =>
                          isActive
                            ? "text-[#7A573A] border-b-2 border-[#7A573A] pb-1 rounded-b-md"
                            : "hover:text-[#7A573A]"
                        }
                      >
                        {t("navbar:navlinks.vision")}
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="text-center">
              <NavLink
                to="/latest-project"
                onClick={() => {
                  setIsOpen(false);
                  setOpenDropdown(null);
                }}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#7A573A] border-b-2 border-[#7A573A] pb-1 rounded-b-md"
                    : "hover:text-[#7A573A]"
                }
              >
                {t("navbar:navlinks.project")}
              </NavLink>
            </li>
            <li className="text-center">
              <NavLink
                to="/partners"
                onClick={() => {
                  setIsOpen(false);
                  setOpenDropdown(null);
                }}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#7A573A] border-b-2 border-[#7A573A] pb-1 rounded-b-md"
                    : "hover:text-[#7A573A]"
                }
              >
                {t("navbar:navlinks.partner")}
              </NavLink>
            </li>
            <li className="text-center">
              <div className="flex flex-col items-center">
                <button
                  onClick={() => toggleDropdown("joinUs")}
                  className="flex items-center gap-1"
                >
                  {t("navbar:navlinks.join")} <FaChevronDown />
                </button>
                <div
                  className={`${
                    openDropdown === "joinUs" ? "block" : "hidden"
                  } w-full mt-2`}
                >
                  <ul className="flex flex-col text-center space-y-2">
                    <li>
                      <NavLink
                        to="/join-us"
                        onClick={() => {
                          setIsOpen(false);
                          setOpenDropdown(null);
                        }}
                        className={({ isActive }) =>
                          isActive
                            ? "text-[#7A573A] border-b-2 border-[#7A573A] pb-1 rounded-b-md"
                            : "hover:text-[#7A573A]"
                        }
                      >
                        {t("navbar:navlinks.join")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/jobs"
                        onClick={() => {
                          setIsOpen(false);
                          setOpenDropdown(null);
                        }}
                        className={({ isActive }) =>
                          isActive
                            ? "text-[#7A573A] border-b-2 border-[#7A573A] pb-1 rounded-b-md"
                            : "hover:text-[#7A573A]"
                        }
                      >
                        {t("navbar:navlinks.vacancy")}
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="text-center">
              <NavLink
                to="/contact"
                onClick={() => {
                  setIsOpen(false);
                  setOpenDropdown(null);
                }}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#7A573A] border-b-2 border-[#7A573A] pb-1 rounded-b-md"
                    : "hover:text-[#7A573A]"
                }
              >
                {t("navbar:navlinks.contact")}
              </NavLink>
            </li>
            <button
              onClick={() => {
                setCurrentLang(currentLang === "en" ? "ar" : "en");
                setIsOpen(false);
                setOpenDropdown(null);
              }}
              className="mx-2 rounded-lg bg-[#7A573A] px-4 py-[5px] font-semibold text-white"
            >
              {currentLang === "en" ? "AR" : "EN"}
            </button>
            {whatsappNumber && (
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#7A573A] text-[#7A573A] p-2 rounded-full text-xl hover:bg-[#7A573A] hover:text-white transition"
              >
                <FaWhatsapp className="text-[#7A573A] hover:text-white" />
              </a>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
