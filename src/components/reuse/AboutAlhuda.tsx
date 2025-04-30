import WrapperContainer from "./WrapperContainer";
import GroupedIMG from "../../../public/assets/aboutGrouped.png";
import elipsesLG from "../../../public/assets/Ellipse 6.png";
import { useFetchAboutSchools } from "../../hooks/useFetchAboutSchools";

const AboutAlhuda = () => {
  const { data } = useFetchAboutSchools();
  return (
    <WrapperContainer>
      <div className=" w-full mb-14 mt-14 xl:flex items-center">
        <div className="xl:w-[45%] mb-2">
          <div>
            <p className="text-[#071839] text-5xl font-bold mb-4 w-[90%] mt-1.5">
              {data && data?.length > 0 && data[1].title}
            </p>
          </div>
          <div className="text-[#071839]">
            {data && data.length > 0 && data[1].text}{" "}
          </div>
        </div>

        <div className="xl:w-[65%] flex justify-center">
          <div className=" w-[50%] relative">
            <img
              className="w-[100px] h-[100px] xl:w-[200px] xl:h-[200px] absolute left-[-20%]"
              src={elipsesLG}
              alt="elipsesLG"
            />
            <img
              className="w-[40px] h-[40px] xl:w-[80px] xl:h-[80px] absolute -right-10"
              src={elipsesLG}
              alt="elipsesLG"
            />
            <img className="relative mt-8" src={GroupedIMG} alt="groupedImg" />
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default AboutAlhuda;
