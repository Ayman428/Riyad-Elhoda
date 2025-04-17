const HeaderOne = ({ label, hideImage, classPlus }: { label: string; hideImage?: boolean; classPlus?: string }) => {
  return (
    <div
      data-aos="fade-down"
      className={`flex py-5 md:py-10 justify-center
      items-center gap-4 text-3xl md:text-5xl font-bold ${classPlus}`}>
      {!hideImage && <img src="/assets/headerOne.png" alt="header One Icon" />}
      {label}
    </div>
  );
};

export default HeaderOne;