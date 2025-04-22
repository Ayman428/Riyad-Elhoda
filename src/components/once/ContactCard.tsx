import { Mail, Phone, MapPin, Music } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
interface ContactCardProps {
  title: string;
  description: string;
  email: string;
  phone: string;
  whatsapp: string;
  logistics: string;
  address: string;
  mapImageSrc: string;
  profileImageSrc: string;
  contactButtonText: string;
  lat: string;
  lng: string;
  onContactClick?: () => void;
}

const ContactCard: React.FC<ContactCardProps> = ({
  title,
  description,
  email,
  phone,
  whatsapp,
  logistics,
  address,
  profileImageSrc,
  contactButtonText,
  lat,
  lng,
  onContactClick,
}) => {
  return (
    <div className="flex flex-col md:flex-row w-full  border-gray-200 rounded-xl overflow-hidden bg-white shadow-xl">
      {/* Map Section */}
      <div className="w-full h-[720px] relative rounded-xl overflow-hidden p-4">
        <iframe
          src={`https://maps.google.com/maps?q=${lat},${lng}&z=14&output=embed`}
          // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.2367231407486!2d46.67529507535348!3d24.7135512780637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f038f06b2a6ef%3A0xf4f7c0f9a87dfb11!2sRiyadh!5e0!3m2!1sen!2ssa!4v1713433506192!5m2!1sen!2ssa"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Information Section */}
      <div className="w-full md:w-sm p-4 flex flex-col bg-white rounded-xl">
        <img
          src={profileImageSrc}
          alt="Profile"
          className="w-14 h-14  object-cover self-end my-2 "
          data-aos="fade-left"
        />
        {/* Title */}
        <h2
          data-aos="fade-left"
          className="text-xl font-bold text-gray-800 text-right rtl:text-left mb-2 border-b pb-2"
        >
          {title}
        </h2>

        {/* Description */}
        <div
          data-aos="fade-left"
          className="text-right rtl:text-left text-sm text-[#888888] mb-4 font-semibold"
        >
          <p className="mb-2">{description}</p>
        </div>

        {/* Profile Image and Contact Info */}
        <div data-aos="fade-left" className="mt-auto">
          {/* Contact Details */}
          <div className="space-y-2 text-black">
            <div className="flex justify-end items-center gap-2">
              <span className="text-sm">{email}</span>
              <Mail size={16} className="text-gray-700" />
            </div>

            <div className="flex justify-end items-center gap-2">
              <span className="text-sm">{phone}</span>
              <Phone size={16} className="text-gray-700" />
            </div>

            <div className="flex justify-end items-center gap-2">
              <span className="text-sm">{whatsapp}</span>
              <FaWhatsapp className="w-4 h-4" />
            </div>

            <div className="flex justify-end items-center gap-2">
              <span className="text-sm">{logistics}</span>
              <Music size={16} className="text-gray-700" />
            </div>

            <div className="flex justify-end rtl:text-left items-center gap-2">
              <span className="text-sm">{address}</span>
              <MapPin size={16} className="text-gray-700" />
            </div>
          </div>

          {/* Contact Button */}
          <div data-aos="fade-up" className="mt-4">
            <button
              onClick={onContactClick}
              className="w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition"
            >
              {contactButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactCard;
