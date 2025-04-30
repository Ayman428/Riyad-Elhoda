import AboutAlhuda from "../../../public/assets/AboutAlhudaIMG.png";
import elipsesLG from "../../../public/assets/Ellipse 6.png";
import NavigationButton from "./NavigationButton";
import { useFetchAboutSchools } from "../../hooks/useFetchAboutSchools";
import { useTranslation } from "react-i18next";
const HomeAboutAlhuda = () => {
  const { data } = useFetchAboutSchools();
  const { t } = useTranslation();

  return (
    <>
      <div className=" w-full mb-14 mt-14 xl:flex items-center">
        <div className="xl:w-[45%] mb-2">
          <div>
            <p className="text-[#071839] text-5xl font-bold mb-4 w-[90%] mt-1.5">
              {data && data[0].title}
            </p>
          </div>
          <div>
            <p className="text-[#535353] text-[16px]">{data && data[0].text}</p>
          </div>
        </div>

        <div className="xl:w-[65%] flex justify-center">
          <div className="w-[75%] xl:w-[65%] relative">
            <img
              className=" w-[100px] xl:w-[250px] xl:h-[250px] absolute left-[-20%] md:left-[-8%] xl:left-[-20%]"
              src={elipsesLG}
              alt="elipsesLG"
            />
            <img
              className="w-[40px] h-[40px] xl:w-[80px] xl:h-[80px] absolute right-[15%] z-50 top-[5%] xl:top-[0%]"
              src={elipsesLG}
              alt="elipsesLG"
            />
            <img className="relative mt-8" src={AboutAlhuda} alt="groupedImg" />
          </div>
        </div>
      </div>
      <div className="mb-10">
        <NavigationButton to="/" title={t("home:button.showMore")} />
      </div>
    </>
  );
};

export default HomeAboutAlhuda;
