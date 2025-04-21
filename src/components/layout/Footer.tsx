import Logo from "/assets/Logo2.png";
import WrapperContainer from "../reuse/WrapperContainer";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation("footer");

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
                        <img data-aos="fade-up" src={Logo} alt="Logo" className="w-28 md:w-32 h-auto" />
                        <p data-aos="fade-right" className="text-white text-opacity-70 leading-relaxed">
                            {t("about")}
                        </p>
                    </div>

                    <div>
                        <h3 data-aos="fade-up" className="font-semibold mb-4 text-lg" style={{ color: '#FCFCFC' }}>
                            {t("quickLinks")}
                        </h3>
                        <ul data-aos="fade-right" className="space-y-2 text-white text-opacity-80">
                            <li style={{ color: '#D5D5D5', opacity: 0.3 }}>{t("home")}</li>
                            <li style={{ color: '#D5D5D5', opacity: 0.3 }}>{t("aboutUs")}</li>
                            <li style={{ color: '#D5D5D5', opacity: 0.3 }}>{t("branches")}</li>
                        </ul>
                    </div>

                    <div>
                        <h3 data-aos="fade-up" className="font-semibold mb-4 text-lg" style={{ color: '#FCFCFC' }}>
                            {t("privacyAndSecurity")}
                        </h3>
                        <ul data-aos="fade-right" className="space-y-2 text-white text-opacity-80">
                            <li style={{ color: '#D5D5D5', opacity: 0.3 }}>{t("privacyPolicy")}</li>
                            <li style={{ color: '#D5D5D5', opacity: 0.3 }}>{t("termsOfUse")}</li>
                            <li style={{ color: '#D5D5D5', opacity: 0.3 }}>{t("licenses")}</li>
                        </ul>
                    </div>

                    <div>
                        <h3 data-aos="fade-up" className="font-semibold mb-4 text-lg" style={{ color: '#FCFCFC' }}>
                            {t("network")}
                        </h3>
                        <ul data-aos="fade-right" className="space-y-2 text-white text-opacity-80">
                            <li style={{ color: '#D5D5D5', opacity: 0.3 }}>{t("company")}</li>
                            <li style={{ color: '#D5D5D5', opacity: 0.3 }}>{t("schoolFayhaa")}</li>
                            <li style={{ color: '#D5D5D5', opacity: 0.3 }}>{t("kindergarten")}</li>
                            <li style={{ color: '#D5D5D5', opacity: 0.3 }}>{t("college")}</li>
                        </ul>
                    </div>

                    <div>
                        <h3 data-aos="fade-up" className="font-semibold mb-4 text-lg" style={{ color: '#FCFCFC' }}>
                            {t("contactUs")}
                        </h3>
                        <ul data-aos="fade-right" className="space-y-2 text-white text-opacity-80">
                            <li>{t("email")}</li>
                            <li>{t("phone")}</li>
                            <li>{t("address")}</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white border-opacity-20 mt-4 pt-4 text-center text-sm text-white text-opacity-60">
                    {t("copyright")}
                </div>
            </WrapperContainer>
        </footer>
    );
};

export default Footer;
