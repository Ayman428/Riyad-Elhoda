import { useTranslation } from "react-i18next";
import image from "../../../public/assets/DecorativeVectors2.png";
import { useFetchAboutSchools } from "../../hooks/useFetchAboutSchools";
import SchoolGoalCard from "./SchoolGoalCard";

const GoalsContainer = () => {
  const { data } = useFetchAboutSchools();
  const { t } = useTranslation();

  return (
    <>
      <div className="relative rounded-[40px] bg-[#071839] overflow-hidden p-2 my-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-no-repeat bg-left opacity-80"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "30% 80%",
          }}
        />

        <div className="w-[90%] m-auto mt-3">
          <p className="text-white text-2xl xl:text-5xl font-bold text-center">
            {t("home:goals.title")}
          </p>
        </div>
        <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 xl:pt-16 gap-4 relative z-10 text-white p-4">
          {data && data.length > 0 ? (
            data
              .slice(1, 4)
              .map((schoolVision) => (
                <SchoolGoalCard
                  key={schoolVision.name}
                  body={schoolVision.text}
                  icon={schoolVision.image}
                  title={schoolVision.title}
                />
              ))
          ) : (
            <p className="col-span-full text-center">No Data Available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default GoalsContainer;
