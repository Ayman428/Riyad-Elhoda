import Logo from "/assets/Logo2.png";
import WrapperContainer from "../reuse/WrapperContainer";

const Footer = () => {
    return (
        <footer
            className="text-white"
            style={{
                backgroundColor: "#071839",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "100px 100px 0px 0px"
            }}
        >
            <WrapperContainer>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-10 py-10 text-sm md:text-base">
                    <div className="space-y-4">
                        <img src={Logo} alt="Logo" className="w-28 md:w-32 h-auto" />
                        <p className="text-white text-opacity-70 leading-relaxed">
                            نشركة مدارس رياض الهدى هي مؤسسة تعليمية رائدة، تسعى إلى تقديم تعليم متميز يرتكز على أسس علمية حديثة ومتطورة. نؤمن بأهمية بناء جيل واعٍ ومبدع، يمتلك المهارات والمعارف التي تؤهله لمواكبة متطلبات العصر،
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-lg" style={{ color: '#FCFCFC' }}>روابط سريعة</h3>
                        <ul className="space-y-2 text-white text-opacity-80">
                            <li style={{ color: '#D5D5D5', opacity: 0.3 }}>الرئيسية</li>
                            <li style={{ color: '#D5D5D5', opacity: 0.3 }}>عن المدارس</li>
                            <li style={{ color: '#D5D5D5', opacity: 0.3 }}>فروع المدارس</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-lg" style={{ color: '#FCFCFC' }}>الخصوصية والأمان</h3>
                        <ul className="space-y-2 text-white text-opacity-80">
                            <li style={{ color: '#D5D5D5', opacity: 0.3 }}>سياسة الخصوصية</li>
                            <li style={{ color: '#D5D5D5', opacity: 0.3 }}>شروط الاستخدام</li>
                            <li style={{ color: '#D5D5D5', opacity: 0.3 }}>التراخيص</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-lg" style={{ color: '#FCFCFC' }}>شبكة مدارس وكليات رياض الهدى</h3>
                        <ul className="space-y-2 text-white text-opacity-80">
                            <li style={{ color: '#D5D5D5', opacity: 0.3 }}>شركة رياض الهدى</li>
                            <li style={{ color: '#D5D5D5', opacity: 0.3 }}>مدارس رياض الفيحـاء</li>
                            <li style={{ color: '#D5D5D5', opacity: 0.3 }}>روضة رياض الهدى 2 - حي الفيحاء</li>
                            <li style={{ color: '#D5D5D5', opacity: 0.3 }}>كليه الفيحاء الاهليه</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-lg" style={{ color: '#FCFCFC' }}>تواصل معنا</h3>
                        <ul className="space-y-2 text-white text-opacity-80">
                            <li>example@email.com</li>
                            <li>0123456789</li>
                            <li>الرياض - حي النسيم - شارع الأمير مثال</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white border-opacity-20 mt-4 pt-4 text-center text-sm text-white text-opacity-60">
                    جميع الحقوق محفوظة © 2025
                </div>
            </WrapperContainer>
        </footer>
    );
};

export default Footer;
