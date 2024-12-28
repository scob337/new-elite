import Link from "next/link";
import { useTranslation } from "react-i18next";

const aboutContent = {
    title: "Elite Company: Small Enough to Care, Big Enough to Succeed",
    description:
      "At Elite, we provide innovative marketing solutions designed to help our clients achieve success. We work diligently to deliver marketing strategies tailored to each client, with a focus on sustainable growth and tangible results. Our company guarantees exceptional services that combine expertise and modern technology, helping to deliver marketing solutions that ensure market dominance.",
    button: {
      text: "Learn More",
      href: "/about",
      iconClass: "fas fa-long-arrow-right",
    },
    hotline: {
      number: "+966 55 994 9013",
      href: "callto:+966559949013",
    },
  };
  
  const AboutSection = () => {
    const { t } = useTranslation();
    return (
      <section className="about-area-two py-130 rpy-100 rel z-1">
        <article className="container">
          <article className="row align-items-center gap-90">
            <article className="col-lg-6">
              <article className="about-two-image rel z-1 rmb-65 wow fadeInRight delay-0-2s">
                <img  loading="lazy" src="assets/images/about/about-two.jpg" alt="About" />
                <article className="bg-circle-shape" />
              </article>
            </article>
            <article className="col-lg-6">
              <article className="about-content rel z-1 wow fadeInLeft delay-0-2s">
                <article className="section-title mb-30">
                  <span className="sub-title mb-15">{t('About Company')}</span>
                  <h2>{t(aboutContent.title)}</h2>
                </article>
                <p>{t(aboutContent.description)}</p>
                <article className={` about-btns`}>
                  <Link legacyBehavior   href={aboutContent.button.href}>
                    <a className="theme-btn style-three mt-15">
                      {t(aboutContent.button.text)} <i className={aboutContent.button.iconClass} />
                    </a>
                  </Link>
                  <article className="hotline mt-15">
                    <i className="fas fa-phone" />
                    <article className="content">
                      <span>{t("Hotline")}</span>
                      <br />
                      <a href={aboutContent.hotline.href}>{aboutContent.hotline.number}</a>
                    </article>
                  </article>
                </article>
              </article>
            </article>
          </article>
        </article>
      </section>
    );
  };
  
  export default AboutSection;
  