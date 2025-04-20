import { Link } from "react-router";

type TButtonProps = {
  title: string;
  to: string;
};

const NavigationButton = ({ title, to }: TButtonProps) => {
  const content = (
    <>
      <span className="relative z-10 text-white text-lg font-bold hover:text-white transition-all duration-400">
        {title}
      </span>
    </>
  );

  return (
    <Link
      to={to}
      className="rounded-[10px] relative overflow-hidden px-8 py-3 font-semibold text-white bg-[#10357F] group"
    >
      {content}
    </Link>
  );
};

export default NavigationButton;
