import React, { useState, useEffect } from 'react';
import WrapperContainer from '../reuse/WrapperContainer';
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

interface HeroProps {
    backgroundImage: string;
    title: string;
    header: string;
    description: string;
    isHomePage?: boolean;
}

const sliderImages = [
    '/assets/HeroBg.png',
    '/assets/HeroBg1.png',
    '/assets/HeroBg2.png',
];

const Hero: React.FC<HeroProps> = ({
    backgroundImage,
    title,
    header,
    description,
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

    const activeBackground = isHomePage ? sliderImages[currentSlide] : backgroundImage;

    return (
        <div
            className={`relative bg-cover bg-center w-full ${isHomePage ? 'h-[800px]' : 'h-[500px]'}`}
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
                    <div className="relative z-20 text-white w-full flex flex-col justify-center max-w-5xl">
                        <h4 className="text-lg md:text-xl font-medium uppercase mb-2">{title}</h4>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">{header}</h1>
                        <p className="text-base md:text-lg mb-6">{description}</p>
                        <button className="btn shadow-none border-[#FCFCFC] w-fit text-[#10357F] bg-[#FCFCFC]">سجل معنا الان <IoArrowBack /></button>
                    </div>
                </div>
            </WrapperContainer>

            {isHomePage && (
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
                    {sliderImages.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full cursor-pointer ${currentSlide === index ? 'bg-white' : 'bg-white/50'}`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Hero;
