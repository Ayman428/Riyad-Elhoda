import React, { useState } from "react";
import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import i18n from "../../utils/i18n";
import WrapperContainer from "../reuse/WrapperContainer";
import useReviews from "../../hooks/useReview";
import HeaderOne from "../shared/HeaderOne";

const Reviews: React.FC = () => {
    const { data, isError, error, isLoading } = useReviews();
    const [currentPage, setCurrentPage] = useState(1);
    const reviewsPerPage = 3;

    const reviews = data?.data ?? [];

    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);
    const totalPages = Math.ceil(reviews.length / reviewsPerPage);

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    if (isLoading)
        return <div className="text-center py-10">Loading...</div>;

    if (isError) {
        const errorMessage =
            (error.response?.data as any)?.message ||
            error.message ||
            "An error occurred";
        return (
            <div className="text-center text-red-500 py-10">
                Error: {errorMessage}
            </div>
        );
    }

    return (
        <WrapperContainer>
            <HeaderOne
                label="آراء أولياء الأمور"
                classPlus="flex justify-center text-center"
            />
            <p
                data-aos="fade-up"
                className="text-5xl text-center text-[#071839] mt-6">
                نفخر بثقة أولياء الأمور وتقدير طلابنا لما نقدمه من بيئة تعليمية
                ملهمة وداعمة
            </p>

            <div className="relative mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentReviews.map((review) => (
                        <div
                            key={review.id}
                            className="p-10 pb-16 rounded-lg shadow-lg border border-black relative text-center bg-white"
                        >
                            <div className="my-4 flex justify-center" data-aos="fade-up">
                                <img src="/assets/apstopgh.png" alt="apstrogh" />
                            </div>
                            <div className="mb-6" data-aos="fade-up">
                                <p className="text-black text-base">{review.text}</p>
                            </div>

                            <div className="my-4 flex justify-center" data-aos="fade-up">
                                <TfiLayoutLineSolid size={20} style={{ borderRadius: "8px" }} />
                            </div>

                            <div className="mt-4" data-aos="fade-up">
                                <span className="text-black font-semibold">
                                    {i18n.language === "ar" ? "آراء العملاء" : "Client Feedback"}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Decorative Vector Image */}
                <img
                    src="/assets/vectorln.png"
                    alt="Decoration"
                    className="absolute left-1/2 -translate-x-1/2 -bottom-10 w-[570px] h-[480px] opacity-80 -z-10"
                />
            </div>

            {/* Pagination */}
            <div
                className={`flex justify-center items-center space-x-4 mt-16`}
            >
                <button
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                    className="px-4 py-4 bg-gray-300 text-black rounded-lg disabled:bg-neutral-6 hover:bg-opacity-80 transition"
                >
                    {i18n.language === "ar" ? (
                        <MdOutlineKeyboardArrowRight size={20} />
                    ) : (
                        <MdOutlineKeyboardArrowLeft size={20} />
                    )}
                </button>

                <div className="flex justify-center">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`w-2 h-2 mx-1 rounded-full transition ${currentPage === index + 1
                                ? "bg-[#071839]"
                                : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className="px-4 py-4 bg-[#071839] text-black rounded-lg disabled:bg-gray-300 hover:bg-opacity-80 transition"
                >
                    {i18n.language === "ar" ? (
                        <MdOutlineKeyboardArrowLeft size={20} />
                    ) : (
                        <MdOutlineKeyboardArrowRight size={20} />
                    )}
                </button>
            </div>
        </WrapperContainer>
    );
};

export default Reviews;
