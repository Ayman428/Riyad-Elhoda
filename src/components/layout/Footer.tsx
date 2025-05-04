import Logo from "/assets/Logo2.png";
import WrapperContainer from "../reuse/WrapperContainer";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { useFetchSchoolBranches } from "../../hooks/useFetchSchoolBranches";

const Footer = () => {
  const { t } = useTranslation("footer");
  const { data } = useFetchSchoolBranches();

  return (
    <footer
      className="text-white"
      style={{
        backgroundColor: "#071839",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "100px 100px 0px 0px",
      }}
    >
      <WrapperContainer>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-36 text-sm md:text-base">
          <div className="space-y-4">
            <img
              data-aos="fade-up"
              src={Logo}
              alt="Logo"
              className="w-28 md:w-32 h-auto"
            />
            <p
              data-aos="fade-right"
              className="text-white text-opacity-70 leading-relaxed"
            >
              {t("about")}
            </p>
          </div>

          <div>
            <h3
              data-aos="fade-up"
              className="font-semibold mb-4 text-lg"
              style={{ color: "#FCFCFC" }}
            >
              {t("quickLinks")}
            </h3>
            <ul
              data-aos="fade-right"
              className="space-y-2 text-white text-opacity-80"
            >
              <li style={{ color: "#D5D5D5", opacity: 0.3 }}>
                <Link className="hover:text-white" to="/">
                  {t("home")}
                </Link>
              </li>
              <li style={{ color: "#D5D5D5", opacity: 0.3 }}>
                <Link className="hover:text-white" to="/about">
                  {t("aboutUs")}
                </Link>
              </li>
              <li style={{ color: "#D5D5D5", opacity: 0.3 }}>
                <Link className="hover:text-white" to="school-branch">
                  {t("branches")}
                </Link>
              </li>
              <li style={{ color: "#D5D5D5", opacity: 0.3 }}>
                <Link
                  target="_blank"
                  className="hover:text-white"
                  to="https://rhc.malhr.com/ar/recruitmentportal/job"
                >
                  {t("employment")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3
              data-aos="fade-up"
              className="font-semibold mb-4 text-lg"
              style={{ color: "#FCFCFC" }}
            >
              {t("network")}
            </h3>
            <ul
              data-aos="fade-right"
              className="space-y-2 text-white text-opacity-80"
            >
              {data &&
                data.map((branch, index) => (
                  <li key={index} style={{ color: "#D5D5D5", opacity: 0.3 }}>
                    <Link to={`/school-branch/#${index}`}>{branch.title}</Link>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <h3
              data-aos="fade-up"
              className="font-semibold mb-4 text-lg"
              style={{ color: "#FCFCFC" }}
            >
              {t("contactUs")}
            </h3>
            <ul
              data-aos="fade-right"
              className="space-y-2 text-white text-opacity-80"
            >
              <li>{data && data[0].email}</li>
              <li>{data && data[0]?.phones?.phones?.[0]}</li>
              <li>{data && data[0].address}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 mt-4 pt-4 text-center text-sm text-white text-opacity-60">
          {t("copyright")}
        </div>
      </WrapperContainer>
    </footer>
  );
};

export default Footer;
