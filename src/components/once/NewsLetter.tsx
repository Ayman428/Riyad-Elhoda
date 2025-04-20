import { useState } from "react";
import useNewsletter from "../../hooks/useNewsLetter";
import WrapperContainer from "../reuse/WrapperContainer";

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
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#071839] mb-6 leading-relaxed">
                        نقدم لكم نشرتنا الإخبارية الشهرية التي تحتوي على أبرز الأخبار والتحديثات المتعلقة بمدرستنا.
                    </h2>

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col sm:flex-row items-center gap-4 justify-center"
                    >
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="البريد الإلكتروني"
                            className="rounded-full px-6 py-3 border border-gray-300 w-full text-black sm:w-[400px] focus:outline-none"
                            dir="rtl"
                        />
                        <button
                            type="submit"
                            className="bg-[#071839] text-white px-6 py-3 rounded-full hover:bg-[#071839] transition"
                        >
                            إشترك الآن
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
