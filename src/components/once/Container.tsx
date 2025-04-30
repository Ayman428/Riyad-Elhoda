import { Link } from "react-router";
import CTA_BG from "/assets/containerBg.png";
import WrapperContainer from "../reuse/WrapperContainer";

type Props = {
  title: string;
  buttonText: string;
  fontSize?: string;
};

const Container = ({ title, buttonText, fontSize }: Props) => {
  return (
    <div
      className="relative bg-cover w-full h-[465px]"
      style={{
        backgroundImage: `url(${CTA_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "top left",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#071839]/50 to-[#071839]" />

      <WrapperContainer>
        <div
          data-aos="fade-right"
          className="relative z-10 flex flex-col justify-between px-8 md:px-16"
        >
          <h2
            style={{ fontSize: fontSize }}
            data-aos="fade-right"
            className="text-2xl md:text-3xl font-bold text-white"
          >
            {title}
          </h2>

          <div data-aos="fade-left" className="my-4">
            <Link to="/our-approach">
              <button
                data-aos="fade-left"
                className="px-6 py-3 bg-[#6E98ED] text-white rounded-lg font-medium hover:bg-[#228181] transition-all"
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
