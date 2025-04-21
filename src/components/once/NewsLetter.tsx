import { useState } from "react";
import useNewsletter from "../../hooks/useNewsLetter";
import WrapperContainer from "../reuse/WrapperContainer";
import i18n from "../../utils/i18n";

const NewsLetter = () => {
    const [email, setEmail] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const mutation = useNewsletter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage("");
        setErrorMessage("");

        if (!email) {
            setErrorMessage("يرجى إدخال البريد الإلكتروني");
            return;
        }

        mutation.mutate(
            { email },
            {
                onSuccess: () => {
                    setSuccessMessage("تم الاشتراك بنجاح!");
                    setEmail("");
                },
                onError: () => {
                    setErrorMessage("حدث خطأ أثناء الاشتراك. حاول مرة أخرى.");
                },
            }
        );
    };

    return (
        <WrapperContainer>
            <div className="flex flex-wrap items-center justify-center gap-y-6">
                <img
                    src="/assets/waves.png"
                    alt="wave-left"
                    className="w-36 sm:w-48 md:w-80"
                />

                <div className="text-center px-4 max-w-2xl flex-1">
                    <h2 data-aos="fade-up" className="text-2xl sm:text-3xl font-bold text-[#071839] mb-6 leading-relaxed">
                    {i18n.language === "ar" ? "نقدم لكم نشرتنا الإخبارية الشهرية التي تحتوي على أبرز الأخبار والتحديثات المتعلقة بمدرستنا." : "We present to you our monthly newsletter, which contains the most important news and updates related to our school."}
                    </h2>

                    <form
                        data-aos="fade-up"
                        onSubmit={handleSubmit}
                        className="flex flex-col sm:flex-row items-center gap-4 justify-center"
                    >
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={i18n.language === "ar" ? "البريد الإلكتروني" : "Email Address"}
                            className="rounded-full px-6 py-3 border border-gray-300 w-full text-black sm:w-[400px] focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-[#071839] text-white px-6 py-3 rounded-full hover:bg-[#071839] transition"
                        >
                            {i18n.language === "ar" ? "إشترك الآن" : "Subscribe"}
                        </button>
                    </form>

                    {successMessage && (
                        <p className="mt-4 text-green-600 font-medium">{successMessage}</p>
                    )}
                    {errorMessage && (
                        <p className="mt-4 text-red-500 font-medium">{errorMessage}</p>
                    )}
                </div>

                <img
                    src="/assets/waves.png"
                    alt="wave-right"
                    className="w-36 sm:w-48 md:w-80"
                />
            </div>
        </WrapperContainer>
    );
};

export default NewsLetter;
