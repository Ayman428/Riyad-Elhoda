import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import useFaqs from "../../hooks/useFAQs";
import WrapperContainer from "./WrapperContainer";
import HeaderOne from "../shared/HeaderOne";

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const { data, isLoading, error } = useFaqs("ar");

    if (isLoading) return <div className="text-center py-10">جارٍ التحميل...</div>;
    if (error) return <div className="text-center text-red-500 py-10">حدث خطأ أثناء جلب البيانات</div>;

    const faqs = data?.data || [];

    const toggleIndex = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="py-16 bg-white text-right">
            <WrapperContainer>
                <HeaderOne label="الأسئلة الشائعة" classPlus="justify-center" />
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
                    الإجابة على استفساراتك
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="border border-[#888888] rounded-lg font-semibold  overflow-hidden bg-white transition-all"
                            >
                                <button
                                    className="w-full flex justify-between items-center px-4 py-4 text-xl text-gray-800"
                                    onClick={() => toggleIndex(index)}
                                >
                                    <span>{faq.question}</span>
                                    <span
                                        className={`flex items-center justify-center w-6 h-6 rounded-full text-white text-sm transition-colors ${isOpen ? "bg-black" : "bg-[#10357F]"}`
                                        }
                                    >
                                        {isOpen ? <FaMinus /> : <FaPlus />}
                                    </span>
                                </button>
                                {isOpen && (
                                    <div className="px-4 pb-4 text-lg text-[#10357F]">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </WrapperContainer>
        </div>
    );
};

export default FAQs;
