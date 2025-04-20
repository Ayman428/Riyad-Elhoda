const HeaderOne = ({
  label,
  classPlus,
}: {
  label: string;
  classPlus?: string;
}) => {
  return (
    <div
      data-aos="fade-down"
      className={`text-[#6E98ED] flex py-1 gap-4 text-xl font-bold ${classPlus}`}
    >
      {label}
    </div>
  );
};

export default HeaderOne;
