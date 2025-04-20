import { Mail, Phone, MapPin, Truck, Music } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
interface ContactCardProps {
  title: string;
  description: string[];
  email: string;
  phone: string;
  whatsapp: string;
  logistics: string;
  address: string;
  mapImageSrc: string;
  profileImageSrc: string;
  contactButtonText: string;
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
  mapImageSrc,
  profileImageSrc,
  contactButtonText,
  onContactClick,
}) => {
  return (
    <div className="flex flex-col md:flex-row w-full  border-gray-200 rounded-xl overflow-hidden bg-white shadow-xl">
      {/* Map Section */}
      <div className="w-full md:w-4xl relative rounded-xl">
        <img
          src={mapImageSrc}
          alt="Location Map"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Information Section */}
      <div className="w-full md:w-sm p-4 flex flex-col bg-white rounded-xl">
        <img
          src={profileImageSrc}
          alt="Profile"
          className="w-14 h-14  object-cover self-end my-2 "
        />
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 text-right rtl:text-left mb-2 border-b pb-2">
          {title}
        </h2>

        {/* Description */}
        <div className="text-right rtl:text-left text-sm text-[#888888] mb-4 font-semibold">
          {description.map((paragraph, index) => (
            <p key={index} className="mb-2">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Profile Image and Contact Info */}
        <div className="mt-auto">
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
          <div className="mt-4">
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
