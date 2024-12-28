import Link from "next/link";
import { useTranslation } from "react-i18next";

const features = [
    // {
    //   iconClass: "flaticon-consulting",
    //   title: "Consulting",
    //   href: "service-details",
    //   animation: "fadeInUp",
    // },
    // {
    //   iconClass: "flaticon-project-management",
    //   title: "Management",
    //   href: "service-details",
    //   animation: "fadeInDown",
    // },
    {
      iconClass: "flaticon-ui",
      title: "Application",
      href: "mobile-application",
      animation: "fadeInUp",
    },
    {
      iconClass: "flaticon-coding-1",
      title: "Development",
      href: "web-development",
      animation: "fadeInDown",
    },
    {
      iconClass: "flaticon-seo-1",
      title: "SEO Optimize",
      href: "seo",
      animation: "fadeInUp",
    },
    {
      iconClass: "flaticon-rocket",
      title: "Business Dev",
      href: "digital-marketing",
      animation: "fadeInDown",
    },
  ];
  
  const FeaturesGrid = () => {
    const { t } = useTranslation();
    return (
      <div className="row justify-content-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="col-xl-2 col-lg-3 col-md-4 col-6 col-small"
          >
            <div
              className={`feature-item wow ${feature.animation} delay-0-2s`}
            >
              <div className="icon">
                <i className={feature.iconClass} />
              </div>
              <h5>
                <Link legacyBehavior  legacyBehavior href={feature.href}>
                  {t(feature.title)}
                </Link>
              </h5>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default FeaturesGrid;
  