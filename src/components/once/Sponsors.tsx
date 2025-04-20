import { useState } from "react";
import useSponsors from "../../hooks/useSponsors";
import WrapperContainer from "../reuse/WrapperContainer";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import i18n from "../../utils/i18n";

const ITEMS_PER_PAGE = 4;

const Sponsors = () => {
    const { data, isLoading, isError } = useSponsors();
    const [currentPage, setCurrentPage] = useState(0);

    if (isLoading) return <div className="text-center py-10">Loading...</div>;
    if (isError || !data) return <div className="text-center py-10 text-red-500">Error loading sponsors</div>;

    const totalPages = Math.ceil(data.data.length / ITEMS_PER_PAGE);

    const paginatedSponsors = data.data.slice(
        currentPage * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );

    return (
        <WrapperContainer>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center py-6">
                {paginatedSponsors.map((sponsor) => (
                    <div
                        data-aos="fade-up"
                        key={sponsor.id}
                        className="w-full h-[240px] flex items-center justify-center"
                    >
                        <img src={sponsor.logo} alt={`Sponsor ${sponsor.id}`} className="object-cover w-full max-h-[240px]" />
                    </div>
                ))}
            </div>

            <div data-aos="fade-up" className="flex items-center justify-center space-x-3 mt-6">
                {/* Left Arrow */}
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
                    disabled={currentPage === 0}
                    className="text-gray-500 hover:text-primary disabled:opacity-30"
                >
                    {i18n.language === "ar" ? <FiChevronRight size={20} /> : <FiChevronLeft size={20} />}
                </button>

                {/* Dots */}
                <div className="flex space-x-2">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index)}
                            className={`w-3 h-3 rounded-full ${
                                currentPage === index ? "bg-primary" : "bg-gray-300"
                            } hover:bg-primary transition-all`}
                        />
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
                    disabled={currentPage === totalPages - 1}
                    className="text-gray-500 hover:text-primary disabled:opacity-30"
                >
                    {i18n.language === "ar" ? <FiChevronLeft size={20} /> : <FiChevronRight size={20} />}
                </button>
            </div>
        </WrapperContainer>
    );
};

export default Sponsors;
