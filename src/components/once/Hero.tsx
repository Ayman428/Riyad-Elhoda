import React, { useState, useEffect, ReactNode } from "react";
import WrapperContainer from "../reuse/WrapperContainer";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import i18n from "../../utils/i18n";
import { useLocation } from "react-router";

interface HeroProps {
  backgroundImage: string;
  title: string;
  header?: string;
  description?: string;
  classplus: string;
  link?: boolean;
  isHomePage?: boolean;
  children?: ReactNode;
}

const sliderImages = [
  "/assets/HeroBg.png",
  "/assets/HeroBg1.png",
  "/assets/HeroBg2.png",
  "/assets/HeroBg3.png",
];

const Hero: React.FC<HeroProps> = ({
  backgroundImage,
  title,
  header,
  description,
  classplus,
  children,
  link = true,
  isHomePage = false,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (isHomePage) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHomePage]);

  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  const activeBackground = isHomePage
    ? sliderImages[currentSlide]
    : backgroundImage;

  return (
    <div
      className={`relative bg-cover bg-center w-full ${
        isHomePage ? "h-[800px]" : "h-[500px]"
      }`}
      style={{
        backgroundImage: `url(${activeBackground})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#10357F]/50 to-[#10357F]"></div>

      <img
        src="/public/assets/DecorativeVector.png"
        alt="Vector"
        className={`absolute right-0 top-0 h-full object-cover z-10`}
      />

      <WrapperContainer>
        <div className="flex items-center h-full relative z-10">
          <div
            className={`relative z-20 text-white w-full flex flex-col justify-center ${classplus}`}
          >
            <h4
              className={`font-bold uppercase mb-6 ${
                isAboutPage
                  ? "text-2xl md:text-lg text-[#B7CCF6]"
                  : "text-4xl md:text-7xl text-white"
              }`}
            >
              {title}
            </h4>

            <h1
              className={`font-bold mb-4 ${
                isAboutPage
                  ? "text-2xl md:text-6xl font-bold text-white"
                  : "text-4xl md:text-5xl text-[#B7CCF6]"
              }`}
            >
              {header}
            </h1>
            {description && (
              <p
                data-aos="fade-right"
                className="text-[#B7CCF6] md:text-lg mb-6 whitespace-pre-line max-w-3xl"
              >
                {description}
              </p>
            )}
            {children && <div>{children}</div>}
            {link && (
              <a
                href="https://madares.sa/"
                target="_blank"
                data-aos="fade-up"
                className="btn shadow-none border-[#FCFCFC] w-fit text-[#10357F] bg-[#FCFCFC]"
              >
                {i18n.language === "ar"
                  ? "سجل معنا الان"
                  : "Register With Us Now"}{" "}
                {i18n.language === "ar" ? <IoArrowBack /> : <IoArrowForward />}{" "}
              </a>
            )}
          </div>
        </div>
      </WrapperContainer>

      {isHomePage && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
          {sliderImages.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                currentSlide === index ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Hero;
