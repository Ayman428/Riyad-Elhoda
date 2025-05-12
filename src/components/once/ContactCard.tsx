import { TiLocation } from "react-icons/ti";
import { MdLocalPhone } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
interface PhoneData {
  text: string;
  phone: string;
}

interface ContactCardProps {
  title: string;
  description: string;
  email: string;
  phone1?: PhoneData | null;
  phone2?: PhoneData | null;
  phone3?: PhoneData | null;
  whatsapp?: PhoneData | null;
  address: string;
  mapImageSrc: string;
  profileImageSrc: string;
  contactButtonText: string;
  mapSrc: string;
  onContactClick?: () => void;
}

const ContactCard: React.FC<ContactCardProps> = ({
  title,
  description,
  email,
  phone1,
  phone2,
  whatsapp,
  phone3,
  address,
  profileImageSrc,
  contactButtonText,
  mapSrc,
  onContactClick,
}) => {
  return (
    <div className="flex flex-col md:flex-row w-full  border-gray-200 rounded-xl overflow-hidden bg-white shadow-xl">
      {/* Information Section */}
      <div className="w-full md:w-sm p-4 flex flex-col bg-white rounded-xl">
        <img
          src={profileImageSrc}
          alt="Profile"
          className="w-14 h-14 object-cover self-start my-2 "
          data-aos="fade-left"
        />
        {/* Title */}
        <h2
          data-aos="fade-left"
          className="text-xl font-bold text-gray-800 mb-2 border-b pb-2"
        >
          {title}
        </h2>

        {/* Description */}
        <div
          data-aos="fade-left"
          className=" text-sm text-[#888888] mb-4 font-semibold"
        >
          <p className="mb-2">{description}</p>
        </div>

        {/* Profile Image and Contact Info */}
        <div data-aos="fade-left" className="mt-auto">
          {/* Contact Details */}
          <div className="space-y-2 text-black">
            {email && (
              <div className="flex items-center gap-2">
                <MdEmail size={16} className="text-gray-700" />
                <span
                  dir="ltr"
                  className="text-sm font-medium font-sans flex ltr:text-right"
                >
                  {email}
                </span>
              </div>
            )}

            {phone1 && (
              <div className="flex items-center gap-2 ">
                <MdLocalPhone size={16} className="text-gray-700" />
                <span className="text-sm font-medium font-sans rtl:text-left">
                  {phone1.text}: {phone1.phone}
                </span>
              </div>
            )}

            {phone2 && (
              <div className="flex items-center gap-2">
                <RiWhatsappFill className="w-4 h-4" />
                <span className="text-sm font-medium font-sans rtl:text-left">
                  {phone2.text}: {phone2.phone}
                </span>
              </div>
            )}

            {phone3 && (
              <div className="flex items-center gap-2">
                {phone3.text.includes("واتساب") ? (
                  <>
                    <RiWhatsappFill className="w-4 h-4" />
                    <span>|</span>
                    <MdLocalPhone className="w-4 h-4" />
                    <span className="text-sm font-medium font-sans rtl:text-left">
                      {phone3.text}: {phone3.phone}
                    </span>
                  </>
                ) : (
                  <>
                    <RiWhatsappFill className="w-4 h-4" />
                    <span className="text-sm font-medium font-sans rtl:text-left">
                      {phone3.text}: {phone3.phone}
                    </span>
                  </>
                )}
              </div>
            )}

            {whatsapp && (
              <div className="flex items-center gap-2">
                <RiWhatsappFill className="w-4 h-4" />
                <span className="text-sm font-medium font-sans rtl:text-left">
                  {whatsapp.text}: {whatsapp.phone}
                </span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <TiLocation size={20} className="text-black " />
              <span className="text-sm font-medium font-sans flex">
                {address}
              </span>
            </div>
          </div>

          {/* Contact Button */}
          <div data-aos="fade-up" className="mt-4">
            <button
              onClick={onContactClick}
              className="w-fit cursor-pointer font-semibold bg-blue-900 text-white py-2 px-6 rounded-2xl shadow-blue-900 my-3 shadow-2xl hover:bg-blue-800 transition"
            >
              {contactButtonText}
            </button>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[720px] relative rounded-xl overflow-hidden p-4">
        <iframe
          src={mapSrc}
          width="100%"
          height="100%"
          loading="lazy"
          className="map-iframe"
          title="Rawdhat Riyadh Al-Hada (2) Map"
          allowFullScreen={true}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
export default ContactCard;
