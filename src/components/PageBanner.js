import Link from "next/link";
import { useTranslation } from "react-i18next";

const PageBanner = ({ pageName, pageTitle }) => {
const { t } = useTranslation();
  return (
    <section
      className="page-banner-area bgs-cover py-135 rpy-100"
      style={{ backgroundImage: "url(assets/images/background/banner.jpg)" }}
    >
      <article className="container">
        <article className="banner-inner text-white text-center">
          <h1 className="page-title wow fadeInUp delay-0-2s animated">
            {t(pageTitle ? pageTitle : pageName)}
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-5 wow fadeInUp delay-0-4s animated">
              <li className="breadcrumb-item">
                <Link legacyBehavior   href="/">
                  <a>{t("Home")}</a>
                </Link>
              </li>
              <li className="breadcrumb-item active">{t(pageName)}</li>
            </ol>
          </nav>
        </article>
      </article>
    </section>
  );
};
export default PageBanner;
