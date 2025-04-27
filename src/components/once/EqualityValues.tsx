import React from "react";
import { Moon, Lightbulb, BarChart3, Target } from "lucide-react";
import { useTranslation } from "react-i18next";

const EqualityValues: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <div
      className="relative w-full min-h-screen bg-white p-4 flex flex-col justify-center items-center"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-100 rounded-full opacity-50"></div>

      <div className="relative z-10 w-full max-w-4xl">
        {/* Main content */}
        <div className="flex flex-col lg:flex-row-reverse justify-between  items-center gap-8">
          {/* Left side - cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full lg:w-1/2">
            {/* Card 1 */}
            <div
              data-aos="fade-up"
              className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center text-center"
            >
              <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="text-white" size={20} />
              </div>
              <h3 className="text-blue-900 font-bold mb-1">
                {t("equality:creativityTitle")}
              </h3>
            </div>

            {/* Card 2 */}
            <div
              data-aos="fade-up"
              className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center text-center"
            >
              <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center mb-4">
                <Moon className="text-white" size={20} />
              </div>
              <h3 className="text-blue-900 font-bold mb-1">
                {t("equality:islamicValuesTitle")}
              </h3>
            </div>

            {/* Card 3 */}
            <div
              data-aos="fade-up"
              className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center text-center"
            >
              <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="text-white" size={20} />
              </div>
              <h3 className="text-blue-900 font-bold mb-1">
                {t("equality:developmentTitle")}
              </h3>
            </div>

            {/* Card 4 */}
            <div
              data-aos="fade-up"
              className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center text-center"
            >
              <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center mb-4">
                <Target className="text-white" size={20} />
              </div>
              <h3 className="text-blue-900 font-bold mb-1">
                {t("equality:excellenceTitle")}
              </h3>
            </div>
          </div>

          {/* Right side - text */}
          <div
            className={`w-full lg:w-1/2 ${
              isRTL ? "text-right" : "text-left"
            } font-bold`}
          >
            <div className="text-blue-800 mb-2">{t("equality:title")}</div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6 leading-tight">
              {t("equality:mainHeading")}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EqualityValues;
