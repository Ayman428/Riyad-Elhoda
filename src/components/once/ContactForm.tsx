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
import useContactForm from "../../hooks/useContactForm";
import "aos/dist/aos.css";

interface PhoneNumbers {
  phones?: (string | null)[];
  mobiles?: (string | null)[];
}

interface SocialMediaLinks {
  facebook?: string;
  x?: string;
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
  const [formKey, setFormKey] = useState(0);
  const { mutate, isError, error } = useContactForm();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    student_name: "ssss",
    last_name: "_ss",
    class: "sss",
    level: "sss",
    message: "sssss",
  });

  useEffect(() => {
    if (data && data.length > 0) {
      setSelectedBranch(data[1]);
    }
  }, [data]);

  const handleFormChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(formData);
  };

  const handleBranchClick = (branch: schoolData) => {
    setSelectedBranch(branch);
    setFormKey((prev) => prev + 1);
  };

  return (
    <WrapperContainer>
      <div className="text-lg text-gray-600 mb-8">
        <div className="w-full flex gap-5">
          {data &&
            data.map((branch, index, array) => {
              const isSelected = selectedBranch?.id === branch.id;
              const isLast = index === array.length - 1;
              const link =
                index === array.length - 1
                  ? "https://edugate.fayha.edu.sa/fpc/ui/guest/application_online/index/typeApplicationOnlineIndex.faces"
                  : "";

              return (
                <p
                  key={index}
                  className={`font-bold cursor-pointer ${isSelected
                    ? "text-[#10357F] font-bold"
                    : "text-[#1E1E1E] font-normal text-[18px]"
                    }`}
                  onClick={() => handleBranchClick(branch)}
                >
                  {link === "" ? (
                    <>
                      {branch.title} {!isLast && <span>|</span>}
                    </>
                  ) : (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {branch.title}
                    </a>
                  )}
                </p>
              );
            })}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div
          key={formKey}
          data-aos="fade-right"
          className="lg:col-span-2 rounded-lg shadow p-6 text-black"
        >
          <h2 className="text-lg font-bold text-[#10357F] mb-4">
            {t("form.buttonText")}
          </h2>

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            onSubmit={handleSubmit}
          >
            <div data-aos="fade-right" className="form-control">
              <label className="block mb-1 font-medium">
                {t("form.parentName")}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                required
                // placeholder={t("form.parentNamePlaceholder")}
                onChange={handleFormChange}
                className="input input-bordered border-black bg-white w-full"
              />
            </div>

            <div data-aos="fade-right" className="form-control">
              <label className="block mb-1 font-medium">
                {t("form.email")}
              </label>
              <input
                type="email"
                // placeholder={t("form.emailPlaceholder")}
                name="email"
                value={formData.email}
                required
                onChange={handleFormChange}
                className="input input-bordered border-black bg-white w-full"
              />
            </div>

            <div data-aos="fade-right" className="form-control md:col-span-2">
              <label className="block mb-1 font-medium">
                {t("form.phone")}
              </label>
              <input
                type="text"
                // placeholder={t("form.phonePlaceholder")}
                name="phone"
                value={formData.phone}
                required
                onChange={handleFormChange}
                className="input input-bordered border-black bg-white w-full"
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

          {isError && (
            <div className="p-2.5 text-center bg-red-100 mt-3">
              <p className="text-red-800">{error.message}</p>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="flex flex-col gap-4" data-aos="fade-up">
            {selectedBranch !== data?.[3] && (
              <>
                <div className="group flex items-center rounded-lg shadow p-4 text-black hover:bg-[#10357F] transition">
                  <div className="rounded-full p-3">
                    <MdPhone className="text-2xl text-[#10357F] group-hover:text-white transition" />
                  </div>
                  <div className="mr-4">
                    <p className="text-sm text-gray-500 group-hover:text-white transition">
                      {t("contactInfo.phoneLabel")}
                    </p>
                    <p className="font-semibold group-hover:text-white transition">
                      920031928
                    </p>
                  </div>
                </div>

                <div className="group flex items-center rounded-lg shadow p-4 text-black hover:bg-[#10357F] transition">
                  <div className="rounded-full p-3 bg-white">
                    <MdEmail className="text-2xl text-[#10357F] group-hover:text-[#10357F]" />
                  </div>
                  <div className="mr-4">
                    <p className="text-sm text-gray-500 group-hover:text-white transition">
                      {t("contactInfo.emailLabel")}
                    </p>
                    <p className="font-semibold break-words group-hover:text-white transition">
                      info@fayha.edu.sa
                    </p>
                  </div>
                </div>
              </>
            )}

            {data && data.length >= 4 && selectedBranch && (
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
                    {
                      selectedBranch === data[3]
                        ? t("contactInfo.workingTime2")
                        : t("contactInfo.workingTime")
                    }
                  </p>
                </div>
              </div>
            )}


            <div
              className="flex justify-around gap-3 pt-2 border border-[#E4E4E4] p-2 rounded-lg"
              data-aos="fade-up"
            >
              <a
                href={selectedBranch?.social_media.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white btn-sm text-[#BDBDBD] border-none shadow-none hover:text-[#10357F]"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href={selectedBranch?.social_media.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white btn-sm text-[#BDBDBD] border-none shadow-none hover:text-[#10357F]"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href={selectedBranch?.social_media.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white btn-sm text-[#BDBDBD] border-none shadow-none hover:text-[#10357F]"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href={selectedBranch?.social_media.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white btn-sm text-[#BDBDBD] border-none shadow-none hover:text-[#10357F]"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default ContactForm;