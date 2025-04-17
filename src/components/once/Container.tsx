import { Link } from "react-router";
import CTA_BG from "/assets/containerBg.png";
import WrapperContainer from "../reuse/WrapperContainer";

type Props = {
    title: string;
    buttonText: string;
};

const Container = ({ title, buttonText }: Props) => {
    return (
        <div
            className="relative bg-cover bg-center w-full h-[465px]"
            style={{
                backgroundImage: `url(${CTA_BG})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-[#071839]/50 to-[#071839]" />
            
            <WrapperContainer>
                <div data-aos="fade-right" className="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 md:px-16">
                    <h2 data-aos="fade-right" className="text-2xl md:text-3xl font-bold">
                        {title}
                    </h2>

                    <div data-aos="fade-left" className="mt-6 md:mt-0">
                        <Link to="/our-approach">
                            <button
                                data-aos="fade-left"
                                className="px-6 py-3 bg-primary-7 text-white rounded-lg font-medium hover:bg-[#228181] transition-all"
                            >
                                {buttonText}
                            </button>
                        </Link>
                    </div>
                </div>
            </WrapperContainer>
        </div>
    );
};

export default Container;
