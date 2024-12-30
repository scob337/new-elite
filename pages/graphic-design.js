import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import JeenaAccordion from "@/src/components/JeenaAccordion";
import ServiceAside from "@/src/components/ServiceAside";
import Link from "next/link";
import Head from 'next/head';
import { useTranslation } from "react-i18next";
import Next_Prev_services from "@/src/components/Next_Prev_services";

const GraphicDesign = () => {
  const { t } = useTranslation();
  const accordionTitle = [
    { id: 1, title: "Why Choose Our Graphic Design Services?" },
    { id: 2, title: "How Our Designers Create Stunning Visuals?" },
    { id: 3, title: "Our Proven Graphic Design Process for Effective Results" },
    { id: 4, title: "Affordable Graphic Design Packages and Solutions" },
  ];
  const accordionContent = [
    {
      id: 1,
      content: "Our graphic design services are focused on creating visually appealing and impactful designs that communicate your brand’s message effectively. We work on a variety of design projects, including logo design, branding, brochures, websites, and social media visuals."
    },
    {
      id: 2,
      content: "Our team of expert designers uses the latest design tools and techniques to create custom, high-quality visuals. Whether it's crafting a unique logo, designing a stunning website, or creating eye-catching marketing materials, we ensure that your designs leave a lasting impression on your audience."
    },
    {
      id: 3,
      content: "Our design process begins with understanding your business and goals. We collaborate closely with you to ensure the designs reflect your vision. From initial sketches to final designs, we focus on every detail to ensure your project exceeds expectations."
    },
    {
      id: 4,
      content: "We offer flexible and affordable pricing for our graphic design services, providing solutions that fit your business’s budget. Whether you're a startup or a large corporation, our services are tailored to meet your specific design needs."
    }
  ];

  return (
    <Layout>
          <Head>
                    <title>Elite-Agency | Graphic Design</title>
                    <meta name="description" content="هذا وصف لصفحتك الرائعة." />
                    <meta name="keywords" content="Next.js, React, SEO, تطوير ويب" />
                    <meta name="author" content="اسمك" />
                    <meta property="og:title" content="صفحة رئيسية رائعة" />
                    <meta property="og:description" content="هذا وصف لصفحتك الرائعة." />
                    <meta property="og:image" content="/path-to-your-image.jpg" />
                    <meta property="og:url" content="https://yourwebsite.com" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  </Head>
      <PageBanner pageName={"Graphic Design Services"} />
      <section className="service-details-area pt-130 rpt-100 pb-115 rpb-85">
        <article className="container">
          <article className="row gap-100">
            <article className="col-lg-8">
              <article className="service-details-content">
                <article className="section-title mb-30">
                  <h2>{t('Expert Graphic Design Services to Elevate Your Brand')}</h2>
                </article>
                <p>
                  {t('At Elite, we specialize in delivering professional graphic design services that enhance your brand’s identity. Whether you need a new logo, a complete brand overhaul, or creative visuals for your marketing campaigns, our designs are crafted to tell your story and captivate your audience.')}
                </p>
                <article className="image my-40 wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/services/service-details.jpg"
                    alt="Graphic Design Services"
                  />
                </article>
                <article className="row">
                  <article className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                    <h3>{t('Why Graphic Design is Essential for Your Brand')}</h3>
                  </article>
                  <article className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <ul className="list-style-one">
                      <li>{t('Enhance Your Brand’s Identity and Recognition')}</li>
                      <li>{t('Create Visually Stunning and Effective Marketing Materials')}</li>
                      <li>{t('Attract and Engage Your Target Audience')}</li>
                    </ul>
                  </article>
                </article>
                <article className="row pb-30">
                  <article className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <p>
                      {t('Graphic design is more than just creating pretty visuals; it’s about strategically using design to communicate your brand’s message and resonate with your audience. Whether for print or digital media, our designs help you stand out and leave a lasting impression.')}
                    </p>
                  </article>
                  <article className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                    <article className="image">
                      <img
                        src="assets/images/services/service-middle.jpg"
                        alt="Graphic Design Process"
                      />
                    </article>
                  </article>
                </article>
                <h3>{t('Our Graphic Design Strategy and Process')}</h3>
                <p>
                  {t('We approach each design project with a strategic mindset. Our process includes understanding your brand, defining your objectives, and crafting designs that align with your business goals. We pay attention to every detail, ensuring that the final design is visually compelling and effectively communicates your message.')}
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


      
      <Next_Prev_services 
                    prevTitle={"Video Editing"}
                    prevLink={"/video-editing"}
                    nextTitle={"Social Media "}
                    nextLink={"/social-media"}
                  />
    </Layout>
  );
};

export default GraphicDesign;
