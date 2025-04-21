import { MdPhone, MdLocationOn, MdEmail } from 'react-icons/md';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import WrapperContainer from '../reuse/WrapperContainer';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
    const { t } = useTranslation("contact");

    return (
        <WrapperContainer>
            <div className="text-lg text-gray-600 mb-8">
                <p>
                    <span className="text-[#10357F] font-bold">{t("school1")}</span> /
                    {t("school2")} /
                    {t("school3")} /
                    <span className="text-black font-medium">{t("school4")}</span>
                </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 rounded-lg shadow p-6 text-black">
                    <h2 className="text-lg font-bold text-[#10357F] mb-4">
                        {t("form.buttonText")}
                    </h2>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div data-aos="fade-right" className="form-control">
                            <label className="block mb-1 font-medium">{t("form.parentName")}</label>
                            <input
                                type="text"
                                placeholder={t("form.parentNamePlaceholder")}
                                className="input input-bordered border-black bg-white w-full"
                            />
                        </div>

                        <div data-aos="fade-right" className="form-control">
                            <label className="block mb-1 font-medium">{t("form.studentName")}</label>
                            <input
                                type="text"
                                placeholder={t("form.studentNamePlaceholder")}
                                className="input input-bordered border-black bg-white w-full"
                            />
                        </div>

                        <div data-aos="fade-right" className="form-control">
                            <label className="block mb-1 font-medium">{t("form.grade")}</label>
                            <select className="select select-bordered border-black bg-white w-full">
                                <option disabled selected>{t("form.gradePlaceholder")}</option>
                                <option>الصف الأول</option>
                                <option>الصف الثاني</option>
                                <option>الصف الثالث</option>
                            </select>
                        </div>

                        <div data-aos="fade-right" className="form-control">
                            <label className="block mb-1 font-medium">{t("form.email")}</label>
                            <input
                                type="email"
                                placeholder={t("form.emailPlaceholder")}
                                className="input input-bordered border-black bg-white w-full"
                            />
                        </div>

                        <div data-aos="fade-right" className="form-control md:col-span-2">
                            <label className="block mb-1 font-medium">{t("form.phone")}</label>
                            <input
                                type="text"
                                placeholder={t("form.phonePlaceholder")}
                                className="input input-bordered border-black bg-white w-full"
                            />
                        </div>

                        <div data-aos="fade-right" className="form-control md:col-span-2">
                            <label className="block mb-1 font-medium">{t("form.subject")}</label>
                            <input
                                type="text"
                                placeholder={t("form.subjectPlaceholder")}
                                className="input input-bordered border-black bg-white w-full"
                            />
                        </div>

                        <div data-aos="fade-right" className="form-control md:col-span-2">
                            <label className="block mb-1 font-medium">{t("form.message")}</label>
                            <textarea
                                className="textarea textarea-bordered border-black bg-white w-full"
                                rows={4}
                                placeholder={t("form.messagePlaceholder")}
                            />
                        </div>

                        <div data-aos="fade-right" className="form-control md:col-span-2">
                            <button
                                type="submit"
                                className="btn w-full bg-[#10357F] text-white hover:bg-[#0c2a66]"
                            >
                                {t("form.buttonText")}
                            </button>
                        </div>
                    </form>
                </div>

                <div className="space-y-4">
                    <div className="flex flex-col gap-4" data-aos="fade-up">
                        {/* رقم الهاتف */}
                        <div className="group flex items-center rounded-lg shadow p-4 text-black hover:bg-[#10357F] transition">
                            <div className="rounded-full p-3">
                                <MdPhone className="text-2xl text-[#10357F] group-hover:text-white transition" />
                            </div>
                            <div className="mr-4">
                                <p className="text-sm text-gray-500 group-hover:text-white transition">{t("contactInfo.phoneLabel")}</p>
                                <p className="font-semibold group-hover:text-white transition">{t("contactInfo.phoneNumber")}</p>
                            </div>
                        </div>

                        {/* البريد الإلكتروني */}
                        <div className="group flex items-center rounded-lg shadow p-4 text-black hover:bg-[#10357F] transition" data-aos="fade-up">
                            <div className="rounded-full p-3 bg-white">
                                <MdEmail className="text-2xl text-[#10357F] group-hover:text-[#10357F]" />
                            </div>
                            <div className="mr-4">
                                <p className="text-sm text-gray-500 group-hover:text-white transition">{t("contactInfo.emailLabel")}</p>
                                <p className="font-semibold break-words group-hover:text-white transition">
                                    {t("contactInfo.emailAddress")}
                                </p>
                            </div>
                        </div>

                        {/* ساعات العمل */}
                        <div className="group flex items-center rounded-lg shadow p-4 text-black hover:bg-[#10357F] transition" data-aos="fade-up">
                            <div className="rounded-full p-3">
                                <MdLocationOn className="text-2xl text-[#10357F] group-hover:text-white transition" />
                            </div>
                            <div className="mr-4">
                                <p className="text-sm text-gray-500 group-hover:text-white transition">{t("contactInfo.workingHours")}</p>
                                <p className="font-semibold group-hover:text-white transition">
                                    {t("contactInfo.workingDays")}<br />{t("contactInfo.workingTime")}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-around gap-3 pt-2 border border-[#E4E4E4] p-2 rounded-lg" data-aos="fade-up">
                        <a href="#" className="btn bg-white btn-sm text-[#BDBDBD] border-none shadow-none hover:text-[#10357F]">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="#" className="btn bg-white btn-sm text-[#BDBDBD] border-none shadow-none hover:text-[#10357F]">
                            <FaInstagram size={20} />
                        </a>
                        <a href="#" className="btn bg-white btn-sm text-[#BDBDBD] border-none shadow-none hover:text-[#10357F]">
                            <FaLinkedinIn size={20} />
                        </a>
                        <a href="#" className="btn bg-white btn-sm text-[#BDBDBD] border-none shadow-none hover:text-[#10357F]">
                            <FaYoutube size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </WrapperContainer>
    );
};

export default ContactForm;
