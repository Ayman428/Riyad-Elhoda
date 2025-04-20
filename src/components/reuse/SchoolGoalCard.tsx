interface CardProps {
  icon: string;
  title: string;
  body: string;
}

const SchoolGoalCard = ({ icon, title, body }: CardProps) => {
  return (
    <div className="w-full h-full justify-center max-w-xs sm:max-w-sm lg:max-w-md rounded-[12px] bg-gradient-to-b from-black/50 to-transparent p-2 sm:p-8 transition duration-500">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div
          data-aos="fade-up"
          className="mt-1 font-medium text-xl sm:text-2xl w-full text-center"
        >
          <div className="p-8 rounded-[20px] bg-[#03030333] ">
            <img
              className="m-auto w-[50px]"
              src={icon}
              alt="Icon"
              width="30px"
              height="30px"
            />
          </div>
          <p className="text-[#B7CCF6] font-bold text-lg">{title}</p>
        </div>
      </div>

      {/* Body */}
      <p
        data-aos="fade-up"
        className="text-sm sm:text-base text-[#FCFCFC] leading-relaxed pb-45 line-clamp-4"
      >
        {body}
      </p>
    </div>
  );
};

export default SchoolGoalCard;
