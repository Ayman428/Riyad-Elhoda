import { MdPhone, MdLocationOn, MdEmail } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import WrapperContainer from "../reuse/WrapperContainer";
import { useTranslation } from "react-i18next";
import { useFetchSchoolBranches } from "../../hooks/useFetchSchoolBranches";
import { useEffect, useState } from "react";

interface PhoneNumbers {
  phones?: (string | null)[];
  mobiles?: (string | null)[];
}

interface SocialMediaLinks {
  facebook?: string;
  x?: string; // Twitter
  tiktok?: string;
  linkedin?: string;
  instagram?: string;
}

interface schoolData {
  id: number;
  title: string;
  notes: string;
  address: string;
  phones: PhoneNumbers;
  social_media: SocialMediaLinks;
  email: string;
}

const ContactForm = () => {
  const { t } = useTranslation("contact");
  const { data } = useFetchSchoolBranches();
  const [selectedBranch, setSelectedBranch] = useState<schoolData | null>(null);
  useEffect(() => {
    if (data && data.length > 0) {
      setSelectedBranch(data[1]);
    }
  }, [data]);

  const handleBranchClick = (branch: schoolData) => {
    setSelectedBranch(branch);
  };

  return (
    <WrapperContainer>
      <div className="text-lg text-gray-600 mb-8">
        <div className="w-full flex gap-5">
          {data &&
            data.slice(1).map((branch, index, array) => {
              const isSelected = selectedBranch?.id === branch.id;
              const isLast = index === array.length - 1;

              return (
                <p
                  className={`font-bold cursor-pointer ${
                    isSelected
                      ? "text-[#10357F] font-bold"
                      : "text-[#1E1E1E] font-normal text-[18px]"
                  }`}
                  key={index}
                  onClick={() => handleBranchClick(branch)}
                >
                  {branch.title} {!isLast && <span>|</span>}
                </p>
              );
            })}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-lg shadow p-6 text-black">
          <h2 className="text-lg font-bold text-[#10357F] mb-4">
            {t("form.buttonText")}
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div data-aos="fade-right" className="form-control">
              <label className="block mb-1 font-medium">
                {t("form.parentName")}
              </label>
              <input
                type="text"
                placeholder={t("form.parentNamePlaceholder")}
                className="input input-bordered border-black bg-white w-full"
              />
            </div>

            <div data-aos="fade-right" className="form-control">
              <label className="block mb-1 font-medium">
                {t("form.studentName")}
              </label>
              <input
                type="text"
                placeholder={t("form.studentNamePlaceholder")}
                className="input input-bordered border-black bg-white w-full"
              />
            </div>

            <div data-aos="fade-right" className="form-control">
              <label className="block mb-1 font-medium">
                {t("form.grade")}
              </label>
              <select className="select select-bordered border-black bg-white w-full">
                <option disabled>{t("form.gradePlaceholder")}</option>
                <option>الصف الأول</option>
                <option>الصف الثاني</option>
                <option>الصف الثالث</option>
              </select>
            </div>

            <div data-aos="fade-right" className="form-control">
              <label className="block mb-1 font-medium">
                {t("form.email")}
              </label>
              <input
                type="email"
                placeholder={t("form.emailPlaceholder")}
                className="input input-bordered border-black bg-white w-full"
              />
            </div>

            <div data-aos="fade-right" className="form-control md:col-span-2">
              <label className="block mb-1 font-medium">
                {t("form.phone")}
              </label>
              <input
                type="text"
                placeholder={t("form.phonePlaceholder")}
                className="input input-bordered border-black bg-white w-full"
              />
            </div>

            <div data-aos="fade-right" className="form-control md:col-span-2">
              <label className="block mb-1 font-medium">
                {t("form.subject")}
              </label>
              <input
                type="text"
                placeholder={t("form.subjectPlaceholder")}
                className="input input-bordered border-black bg-white w-full"
              />
            </div>

            <div data-aos="fade-right" className="form-control md:col-span-2">
              <label className="block mb-1 font-medium">
                {t("form.message")}
              </label>
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
                <p className="text-sm text-gray-500 group-hover:text-white transition">
                  {t("contactInfo.phoneLabel")}
                </p>

                <p className="font-semibold group-hover:text-white transition">
                  {selectedBranch && selectedBranch.phones?.phones?.[0]}
                </p>
              </div>
            </div>

            {/* البريد الإلكتروني */}
            <div
              className="group flex items-center rounded-lg shadow p-4 text-black hover:bg-[#10357F] transition"
              data-aos="fade-up"
            >
              <div className="rounded-full p-3 bg-white">
                <MdEmail className="text-2xl text-[#10357F] group-hover:text-[#10357F]" />
              </div>
              <div className="mr-4">
                <p className="text-sm text-gray-500 group-hover:text-white transition">
                  {t("contactInfo.emailLabel")}
                </p>
                <p className="font-semibold break-words group-hover:text-white transition">
                  {selectedBranch && selectedBranch.email}
                </p>
              </div>
            </div>

            {/* ساعات العمل */}
            <div
              className="group flex items-center rounded-lg shadow p-4 text-black hover:bg-[#10357F] transition"
              data-aos="fade-up"
            >
              <div className="rounded-full p-3">
                <MdLocationOn className="text-2xl text-[#10357F] group-hover:text-white transition" />
              </div>
              <div className="mr-4">
                <p className="text-sm text-gray-500 group-hover:text-white transition">
                  {t("contactInfo.workingHours")}
                </p>
                <p className="font-semibold group-hover:text-white transition">
                  {t("contactInfo.workingDays")}
                  <br />
                  {t("contactInfo.workingTime")}
                </p>
              </div>
            </div>
          </div>

          <div
            className="flex justify-around gap-3 pt-2 border border-[#E4E4E4] p-2 rounded-lg"
            data-aos="fade-up"
          >
            <a
              href={selectedBranch?.social_media.facebook}
              target="_blank"
              className="btn bg-white btn-sm text-[#BDBDBD] border-none shadow-none hover:text-[#10357F]"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href={selectedBranch?.social_media.instagram}
              target="_blank"
              className="btn bg-white btn-sm text-[#BDBDBD] border-none shadow-none hover:text-[#10357F]"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href={selectedBranch?.social_media.linkedin}
              target="_blank"
              className="btn bg-white btn-sm text-[#BDBDBD] border-none shadow-none hover:text-[#10357F]"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href={selectedBranch?.social_media.tiktok}
              target="_blank"
              className="btn bg-white btn-sm text-[#BDBDBD] border-none shadow-none hover:text-[#10357F]"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default ContactForm;
