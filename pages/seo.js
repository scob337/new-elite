import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import JeenaAccordion from "@/src/components/JeenaAccordion";
import ServiceAside from "@/src/components/ServiceAside";
import Link from "next/link";

const SEO = () => {
  const accordionTitle = [
    { id: 1, title: "Why Choose Our SEO Services?" },
    { id: 2, title: "How Our SEO Experts Improve Your Rankings?" },
    { id: 3, title: "Our Proven SEO Process for Effective Results" },
    { id: 4, title: "Affordable SEO Packages and Payment Options" },
  ];
  const accordionContent = [
    {
      id: 1,
      content: "Our SEO services are designed to enhance your website’s visibility and drive organic traffic through proven strategies. We focus on optimizing your website with the best SEO practices, improving on-page elements, creating high-quality backlinks, and ensuring that your site ranks higher on search engine results pages (SERPs)."
    },
    {
      id: 2,
      content: "Our team of SEO experts uses a combination of technical SEO, on-page optimization, and off-page strategies to boost your website's ranking. We perform in-depth keyword research, optimize your site’s structure, enhance user experience, and implement SEO-friendly content strategies to maximize your website’s potential."
    },
    {
      id: 3,
      content: "Our SEO process starts with a comprehensive site audit, where we analyze the technical and content aspects of your website. We identify opportunities for improvement, optimize the structure, and implement SEO best practices to ensure your website is search engine-friendly and attracts more organic visitors."
    },
    {
      id: 4,
      content: "We offer flexible and affordable SEO packages tailored to meet the unique needs of your business. Our transparent pricing model ensures you get the best value for your investment, whether you're a small business or a large enterprise looking to enhance your online presence and drive more targeted traffic."
    }
  ]
  return (
    <Layout>
      <PageBanner pageName={"SEO Services"} />
      <section className="service-details-area pt-130 rpt-100 pb-115 rpb-85">
        <div className="container">
          <div className="row gap-100">
          <div className="col-lg-8">
  <div className="service-details-content">
    <div className="section-title mb-30">
      <h2>Professional SEO Services to Rank Your Website Higher</h2>
    </div>
    <p>
      At Elite, we offer expert SEO services that are tailored to improve your website’s search engine ranking, drive organic traffic, and increase your online visibility. Our team specializes in white-hat SEO strategies that help businesses achieve long-term results and stay ahead of the competition.
    </p>
    <div className="image my-40 wow fadeInUp delay-0-2s">
      <img
        src="assets/images/services/service-details.jpg"
        alt="SEO Services"
      />
    </div>
    <div className="row">
      <div className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
        <h3>Why SEO is Essential for Your Business Growth</h3>
      </div>
      <div className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
        <ul className="list-style-one">
          <li>Increase Organic Traffic and Visibility</li>
          <li>Improve Website Rankings on Search Engines</li>
          <li>Boost User Engagement and Conversion Rates</li>
        </ul>
      </div>
    </div>
    <div className="row pb-30">
      <div className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
        <p>
          SEO is critical for any business looking to succeed online. Our team employs the latest SEO trends and strategies to ensure your website is fully optimized for search engines like Google. We focus on on-page SEO, off-page optimization, and technical improvements to help your business rank higher and attract the right audience.
        </p>
      </div>
      <div className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
        <div className="image">
          <img
            src="assets/images/services/service-middle.jpg"
            alt="SEO Process"
          />
        </div>
      </div>
    </div>
    <h3>SEO Strategy and Process</h3>
    <p>
      Our SEO experts follow a data-driven approach to create custom strategies that align with your business goals. We begin by conducting a thorough SEO audit, identifying areas for improvement, and implementing changes that will improve your website's search engine rankings and performance.
    </p>
    <div
      className="faq-accordion pt-20 wow fadeInUp delay-0-2s"
      id="faq-accordion"
    >

      <JeenaAccordion accordionsTitle={accordionTitle} accordionContent={accordionContent}/>

    </div>
  </div>
</div>


            <ServiceAside/>

          </div>
        </div>
      </section>
      {/* Service Details Area end */}
      {/* Next Prev Service start */}
      <div className="next-prev-service pb-80 rpb-50">
        <div className="container">
          <hr />
          <div className="next-prev-service mt-80">
            <div className="next-prev-item wow fadeInLeft delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/services/service-prev.jpg"
                  alt="SEO Service"
                />
              </div>
              <div className="content">
                <h4>
                  <Link legacyBehavior href="/content-writing">
                    Content Writing 
                  </Link>
                </h4>
                <Link legacyBehavior href="/content-writing">
                  <a className="read-more">
                    Read More <i className="fal fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            
            <Link legacyBehavior href="/services">
              <a className="show-all" />
            </Link>

            <div className="next-prev-item wow fadeInRight delay-0-2s">
              <div className="content">
                <h4>
                  <Link legacyBehavior href="/digital-marketing">
                    Digital Marketing
                  </Link>
                </h4>
                <Link legacyBehavior href="/digital-marketing">
                  <a className="read-more">
                    Read More <i className="fal fa-angle-double-right" />
                  </a>
                </Link>
              </div>
              <div className="image">
                <img
                  src="assets/images/services/service-next.jpg"
                  alt="SEO Services"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default SEO;
