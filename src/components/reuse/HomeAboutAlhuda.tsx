import HeaderOne from "../shared/HeaderOne";
import AboutAlhuda from "../../../public/assets/AboutAlhudaIMG.png";
import elipsesLG from "../../../public/assets/Ellipse 6.png";
import aboutIcon from "../../../public/icons/Vector.png";
import NavigationButton from "./NavigationButton";
const HomeAboutAlhuda = () => {
  return (
    <>
      <div className=" w-full mb-14 mt-14 xl:flex items-center">
        <div className="xl:w-[45%] mb-2">
          <div>
            <div className="flex items-center">
              <img
                className="w-[20px] h-[20px] ml-2 mb-[6px]"
                src={aboutIcon}
                alt="aboutIcon"
              />
              <HeaderOne label="من نحن" />
            </div>
            <p className="text-[#071839] text-5xl font-bold mb-4 w-[90%] mt-1.5">
              لأجل جيلٍ واعٍ، نضع الأساس في رياض الهدى.
            </p>
          </div>
          <div>
            <p className="text-[#535353] text-[16px]">
              شركة مدارس رياض الهدى هي مؤسسة تعليمية رائدة، تسعى إلى تقديم تعليم
              متميز يرتكز على أسس علمية حديثة ومتطورة. تهدف في إعداد جيل من
              الطلاب والطالبات القادرين على مواجهة تحديات المستقبل. نحن نؤمن ان
              التعليم هو الاساس لبناء مجتمع قوى ومتقدم , لذلك نسعى جاهدين لتوفير
              بيئة التعليم المتميز تحفز الإبداع والإبتكار وتدعم الطموح الشخصي
              لكل طالب وطالبة.
            </p>
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
        <NavigationButton to="/" title="عرض المزيد" />
      </div>
    </>
  );
};

export default HomeAboutAlhuda;
