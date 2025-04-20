import Container from "../components/once/Container";
import EqualityValues from "../components/once/EqualityValues";
import Hero from "../components/once/Hero";
import LocationContactCard from "../components/once/LocationContactCard";
import NewsLetter from "../components/once/NewsLetter";
import Review from "../components/once/Review";
import Sponsors from "../components/once/Sponsors";
import FAQs from "../components/reuse/FAQs";
import WrapperContainer from "../components/reuse/WrapperContainer";
import HeaderOne from "../components/shared/HeaderOne";
import AboutAlhuda from "../../public/assets/AboutAlhudaIMG.png";
import elipsesLG from "../../public/assets/Ellipse 6.png";
import aboutIcon from "../../public/icons/Vector.png";
import NavigationButton from "../components/reuse/NavigationButton";

const Home = () => {
  return (
    <div>
      <Hero
        backgroundImage="/assets/HeroBg.png"
        title="شركة مدارس رياض الهدى"
        header="Riyadh AL-Huda Schools"
        description="شركة مدارس رياض الهدى هي مؤسسة تعليمية رائدة، تسعى إلى تقديم تعليم متميز يرتكز على أسس علمية حديثة ومتطورة. نؤمن بأهمية بناء جيل واعٍ ومبدع، يمتلك المهارات والمعارف التي تؤهله لمواكبة متطلبات العصر،"
        isHomePage={true}
      />


      <WrapperContainer>
        <div>
          <div className=" w-full mb-14 mt-14 xl:flex items-center">
            <div className="xl:w-[45%] mb-2">
              <div>
                <div className="flex items-center">
                  <img
                    className="w-[20px] h-[20px] ml-2 mb-[6px]"
                    src={aboutIcon}
                    alt=""
                  />
                  <HeaderOne label="من نحن" />
                </div>
                <p className="text-[#071839] text-5xl font-bold mb-4 w-[90%] mt-1.5">
                  لأجل جيلٍ واعٍ، نضع الأساس في رياض الهدى.
                </p>
              </div>
              <div>
                <p className="text-[#535353] text-[16px]">
                  شركة مدارس رياض الهدى هي مؤسسة تعليمية رائدة، تسعى إلى تقديم
                  تعليم متميز يرتكز على أسس علمية حديثة ومتطورة. تهدف في إعداد
                  جيل من الطلاب والطالبات القادرين على مواجهة تحديات المستقبل.
                  نحن نؤمن ان التعليم هو الاساس لبناء مجتمع قوى ومتقدم , لذلك
                  نسعى جاهدين لتوفير بيئة التعليم المتميز تحفز الإبداع والإبتكار
                  وتدعم الطموح الشخصي لكل طالب وطالبة.
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
                <img
                  className="relative mt-8"
                  src={AboutAlhuda}
                  alt="groupedImg"
                />
              </div>
            </div>
          </div>
          <NavigationButton to="" title="عرض المزيد" />
            <Hero
                backgroundImage="/assets/HeroBg.png"
                title="شركة مدارس رياض الهدى"
                header="Riyadh AL-Huda Schools"
                description="شركة مدارس رياض الهدى هي مؤسسة تعليمية رائدة، تسعى إلى تقديم تعليم متميز يرتكز على أسس علمية حديثة ومتطورة. نؤمن بأهمية بناء جيل واعٍ ومبدع، يمتلك المهارات والمعارف التي تؤهله لمواكبة متطلبات العصر،"
                isHomePage={true}
            />
            <Review />
            <Container title="نُنمّي العقول، ونبني المهارات، لنصل بأبنائنا إلى القمة علمًا وخلقًا وتميّزًا" buttonText="سجل معنا الآن" />
            <FAQs />
            <NewsLetter />
            <Sponsors />
        </div>
      </WrapperContainer>


      <Container
        title="نُنمّي العقول، ونبني المهارات، لنصل بأبنائنا إلى القمة علمًا وخلقًا وتميّزًا"
        buttonText="سجل معنا الآن"
      />
      <FAQs />
      <NewsLetter />
      <Sponsors />
      <EqualityValues />
      <div className="my-5">
          <LocationContactCard  />
      </div>
    </div>
  );
};

export default Home;
