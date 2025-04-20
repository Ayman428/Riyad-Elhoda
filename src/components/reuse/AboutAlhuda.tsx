import WrapperContainer from "./WrapperContainer";
import HeaderOne from "../shared/HeaderOne";
import GroupedIMG from "../../../public/assets/aboutGrouped.png";
import elipsesLG from "../../../public/assets/Ellipse 6.png";

const AboutAlhuda = () => {
  return (
    <WrapperContainer>
      <div className=" w-full mb-14 mt-14 xl:flex items-center">
        <div className="xl:w-[45%] mb-2">
          <div>
            <HeaderOne label="من نحن" />
            <p className="text-[#071839] text-5xl font-bold mb-4 w-[90%] mt-1.5">
              نبذه عن شركة مدارس رياض الهدى
            </p>
          </div>
          <div>
            شركة مدارس رياض الهدى هي مؤسسة تعليمية رائدة، تسعى إلى تقديم تعليم
            متميز يرتكز على أسس علمية حديثة ومتطورة. تهدف في إعداد جيل من الطلاب
            والطالبات القادرين على مواجهة تحديات المستقبل. نحن نؤمن ان التعليم
            هو الاساس لبناء مجتمع قوى ومتقدم , لذلك نسعى جاهدين لتوفير بيئة
            التعليم المتميز تحفز الإبداع والإبتكار وتدعم الطموح الشخصي لكل طالب
            وطالبة. نقدم منهجًا تعليميًا متميزًا، يعتمد على المقررات الوطنية
            ويعزز المهارات الأكاديمية، مع الحرص على تطبيق أساليب تعليمية متطورة
            تراعي احتياجات العصر وتواكب أحدث الاتجاهات العالمية في مجال التربية
            والتعليم. نحن لا نقتصر على الجانب الأكاديمي فحسب، بل نركز أيضًا على
            تطوير جوانب الشخصية والاجتماعية والإبداعية للطلاب، وذلك من خلال
            برامج وأنشطة تربوية متنوعة تساهم في بناء شخصيات قيادية قادرة على
            التأثير الإيجابي في مجتمعها. نسعى في مدارسنا إلى خلق بيئة تعليمية
            شاملة وآمنة، حيث يشعر كل طالب وطالبة بالتقدير والاحترام، ويتم
            تحفيزهم على تقديم أفضل ما لديهم، كما نحرص على تعزيز القيم الإسلامية
            الأصيلة، وغرسها في نفوس أبنائنا وبناتنا ليكونوا أفرادًا صالحين
            يخدمون مجتمعهم وأمتهم في المستقبل. من خلال هذه الرؤية الطموحة، نلتزم
            بتوفير التعليم الذي يفتح أمام الطلاب آفاقًا واسعة من الفرص، ويحفزهم
            ليصبحوا أفرادًا مبدعين وفاعلين في مجالات متعددة، مع الحفاظ على القيم
            والمبادئ التي تساهم في بناء مجتمع قوي ومتماسك.
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
