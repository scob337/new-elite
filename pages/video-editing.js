import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import JeenaAccordion from "@/src/components/JeenaAccordion";
import ServiceAside from "@/src/components/ServiceAside";
import Link from "next/link";
import Head from 'next/head';
import { useTranslation } from "react-i18next";
import Next_Prev_services from "@/src/components/Next_Prev_services";

const VideoEditing = () => {
  const { t } = useTranslation();
  const accordionTitle = [
    { id: 1, title: "Why Choose Our Video Editing Services?" },
    { id: 2, title: "How We Create Engaging and High-Quality Videos?" },
    { id: 3, title: "Our Professional Video Editing Process" },
    { id: 4, title: "Affordable Video Editing Packages for Every Need" },
  ];
  const accordionContent = [
    {
      id: 1,
      content: "Our video editing services are designed to help you create polished, professional videos that capture attention. Whether you're working on a commercial, social media video, or YouTube content, we provide comprehensive editing solutions to ensure your videos are engaging and impactful."
    },
    {
      id: 2,
      content: "We utilize the latest video editing software and techniques to craft videos that resonate with your target audience. From cutting and trimming to color correction and sound editing, our team ensures every detail enhances your video’s quality and message."
    },
    {
      id: 3,
      content: "Our process includes initial consultations to understand your vision, followed by creating a detailed edit plan. We then go through multiple revision stages to make sure the final product aligns perfectly with your brand's goals, ensuring your video is engaging, high-quality, and ready for distribution."
    },
    {
      id: 4,
      content: "We offer competitive pricing for video editing services, with flexible packages designed to suit various needs. Whether you require basic editing or advanced visual effects, our packages ensure you get the best value for your investment."
    }
  ];

  return (
    <Layout>
                                  <Head>
                                            <title>Elite-Agency |   Video Editing</title>
                                            <meta name="description" content="هذا وصف لصفحتك الرائعة." />
                                            <meta name="keywords" content="Next.js, React, SEO, تطوير ويب" />
                                            <meta name="author" content="اسمك" />
                                            <meta property="og:title" content="صفحة رئيسية رائعة" />
                                            <meta property="og:description" content="هذا وصف لصفحتك الرائعة." />
                                            <meta property="og:image" content="/path-to-your-image.jpg" />
                                            <meta property="og:url" content="https://yourwebsite.com" />
                                            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                                          </Head>
      <PageBanner pageName={"Video Editing Services"} />
      <section className="service-details-area pt-130 rpt-100 pb-115 rpb-85">
        <article className="container">
          <article className="row gap-100">
            <article className="col-lg-8">
              <article className="service-details-content">
                <article className="section-title mb-30">
                  <h2>{t('Professional Video Editing Services for Every Project')}</h2>
                </article>
                <p>
                  {t('At Elite, we specialize in crafting high-quality video content for businesses, creators, and marketers. Our video editing services include everything from trimming and transitions to adding sound effects and visual effects, ensuring your video stands out and delivers its message effectively.')}
                </p>
                <article className="image my-40 wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/services/service-details.jpg"
                    alt="Video Editing Services"
                  />
                </article>
                <article className="row">
                  <article className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                    <h3>{t('Why Video Editing is Essential for Your Content')}</h3>
                  </article>
                  <article className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <ul className="list-style-one">
                      <li>{t('Enhance Visual Appeal with Seamless Edits')}</li>
                      <li>{t('Create Engaging and Shareable Content')}</li>
                      <li>{t('Improve Audio and Video Quality')}</li>
                    </ul>
                  </article>
                </article>
                <article className="row pb-30">
                  <article className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <p>
                      {t('A well-edited video can significantly enhance viewer engagement, whether for marketing, tutorials, or social media content. We help you improve your video’s structure, flow, and messaging, ensuring it resonates with your audience.')}
                    </p>
                  </article>
                  <article className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                    <article className="image">
                      <img
                        src="assets/images/services/service-middle.jpg"
                        alt="Video Editing Process"
                      />
                    </article>
                  </article>
                </article>
                <h3>{t('Our Video Editing Process')}</h3>
                <p>
                  {t('Our video editing process is designed to produce high-quality videos that align with your vision. We begin by discussing your goals, followed by gathering raw footage, and then proceed with the editing stages: trimming, color grading, sound editing, and applying effects.')}
                </p>
                <article
                  className="faq-accordion pt-20 wow fadeInUp delay-0-2s"
                  id="faq-accordion"
                >
                  <JeenaAccordion accordionsTitle={accordionTitle} accordionContent={accordionContent} />
                </article>
              </article>
            </article>

            <ServiceAside />
          </article>
        </article>
      </section>

      <article className="next-prev-service pb-80 rpb-50">
        <article className="container">
          <hr />
          <article className="next-prev-service mt-80">
            <article className="next-prev-item wow fadeInLeft delay-0-2s">
              <article className="image">
                <img
                  src="assets/images/services/service-prev.jpg"
                  alt="Web Development"
                />
              </article>
              <article className="content">
                <h4>
                  <Link legacyBehavior  href="/web-development">
                    {t('Web Development')}
                  </Link>
                </h4>
                <Link legacyBehavior  href="/web-development">
                  <a className="read-more">
                    {t('Read More')} <i className="fal fa-angle-double-right" />
                  </a>
                </Link>
              </article>
            </article>

            <Link legacyBehavior  href="/services2">
              <a className="show-all" />
            </Link>

            <Next_Prev_services 
                    prevTitle={"Social Media"}
                    prevLink={"/social-media"}
                    nextTitle={"SEO Optimization"}
                    nextLink={"/seo"}
                  />
          </article>
        </article>
      </article>
    </Layout>
  );
};
export default VideoEditing;
