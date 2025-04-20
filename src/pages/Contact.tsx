import { useTranslation } from "react-i18next";
import ContactForm from "../components/once/ContactForm";
import Hero from "../components/once/Hero";
import FAQs from "../components/reuse/FAQs";

const Contact = () => {
    const { t } = useTranslation();

    return (
        <div>
            <Hero
                classplus="pt-20"
                backgroundImage="/assets/HeroBg5.png"
                title={t("header:riyadhAlHudaContact")}
                description={t("header:riyadhAlHudaContactDetails")}
                isHomePage={false}
            />
            <ContactForm />
            <FAQs />
        </div>
    )
}

export default Contact;