import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import ServicesArea from "@/src/components/Services/ServicesArea";
import WorkProcess from "@/src/components/Services/WorkProcess";
import Link from "next/link";
import Head from 'next/head';
import { useTranslation } from "react-i18next";
const Services = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Head>
        <title>Elite-Agency | Services </title>
        <meta name="description" content="هذا وصف لصفحتك الرائعة." />
        <meta name="keywords" content="Next.js, React, SEO, تطوير ويب" />
        <meta name="author" content="اسمك" />
        <meta property="og:title" content="صفحة رئيسية رائعة" />
        <meta property="og:description" content="هذا وصف لصفحتك الرائعة." />
        <meta property="og:image" content="/path-to-your-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <PageBanner pageName={"Services"} />
      <WorkProcess />
      {/* Work Process Area end */}
      {/* Video Area start */}
      <div className="video-area-two rel z-1">
        <div className="container">
          <div className="video-wrap-two wow fadeInUp delay-0-2s">
            <img src="assets/images/background/video.jpg" alt="Video" />
            <a
              href="https://www.youtube.com/watch?v=9Y7ma241N8k"
              className="mfp-iframe video-play"
              tabIndex={-1}
            >
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
      </div>
      {/* Video Area end */}

      {/* Services Area start */}
      <ServicesArea />
      {/* Services Area end */}
      {/* Customer Satisfaction Area start */}
      <section className="satisfaction-area-two mt-30 py-100 rpy-70 rel z-1">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div className="cs-content-part rmb-35 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-15">
                  <span className="sub-title mb-15">
                    {t("Guaranteed Customer Satisfaction")}
                  </span>
                  <h2>{t("Ideate, Design And Fuel Business Growth")}</h2>
                </div>
                <p>
                    {t('With over 20 years of experience and 850+ employees board, Iflexion serves medium-sized and large companies globally. Profound knowledge coupled with business understanding is what allows us to create unique solutions that power enterprises, their employees.')}
                </p>
                <div className="row pt-15">
                  <div className="col-sm-6">
                    <div className="service-item style-two">
                      <div className="icon">
                        <i className="flaticon-trust" />
                      </div>
                      <h4>
                        <Link legacyBehavior href="services">
                          {t('Best Trusted Partner')}
                        </Link>
                      </h4>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="service-item style-two">
                      <div className="icon">
                        <i className="flaticon-technical-support" />
                      </div>
                      <h4>
                        <Link legacyBehavior href="services">
                          {t('24/7 Tehnical Support')}
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs-image-part ps-0 mb-30 wow fadeInRight delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/about/satisfaction-two.jpg"
                    alt="Satisfaction"
                  />
                </div>
                <div className="experience-years">
                  <h4>{t('25 Years Of Experience IT Solutions')}</h4>
                  <img
                    src="assets/images/about/satisfaction-author.png"
                    alt="Author"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Services;
