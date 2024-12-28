import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import Head from 'next/head';
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <Layout>
          <Head>
                    <title>Elite-Agency | Contact</title>
                    <meta name="description" content="هذا وصف لصفحتك الرائعة." />
                    <meta name="keywords" content="Next.js, React, SEO, تطوير ويب" />
                    <meta name="author" content="اسمك" />
                    <meta property="og:title" content="صفحة رئيسية رائعة" />
                    <meta property="og:description" content="هذا وصف لصفحتك الرائعة." />
                    <meta property="og:image" content="/path-to-your-image.jpg" />
                    <meta property="og:url" content="https://yourwebsite.com" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  </Head>
      <PageBanner pageName={"Contact Us"} />{" "}
      <section className="contact-page-info pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <article className="container">
          <article className="row text-center mb-35 justify-content-center wow fadeInUp delay-0-2s">
          <article className="col-xl-8 col-lg-10">
  <article className="section-title mb-25">
    <span className="sub-title mb-15">{t('About Our Company')}</span>
    <h2>{t('Company Information')}</h2>
  </article>
  <p>
    {t('At Elite, we specialize in providing top-notch web development, mobile application development, and marketing services. With a commitment to delivering high-quality solutions tailored to your business needs, we help companies grow and thrive in the digital world. Our team of experts works tirelessly to ensure that every project is executed with precision and dedication, ensuring client satisfaction at every step.')}
  </p>
</article>

          </article>
          <article className="row justify-content-center">
            <article className="col-xl-3 col-lg-4 col-md-6">
              <article className="contact-info-box wow fadeInUp delay-0-2s">
                <article className="icon">
                  <i className="fal fa-map-marker-alt" />
                </article>
                <h4>{t('Locations')}</h4>
                <span> {t('Saudi Arabia, Riyadh')}</span>
              </article>
            </article>
            <article className="col-xl-3 col-lg-4 col-md-6">
              <article className="contact-info-box wow fadeInUp delay-0-3s">
                <article className="icon">
                  <i className="fal fa-envelope-open" />
                </article>
                <h4>{t('Email Us')}</h4>
                <a href="mailto:elitearab2030@gmail.com">
                elitearab2030@gmail.com
                </a>
                <br />
                <a href="http://www.elitearab.net">www.elitearab.net</a>
              </article>
            </article>
            <article className="col-xl-3 col-lg-4 col-md-6">
              <article className="contact-info-box wow fadeInUp delay-0-4s">
                <article className="icon">
                  <i className="fal fa-phone-plus" />
                </article>
                <h4>{t('Locations')}</h4>
                <span>
                  {t('Mobile')} : <a href="callto:+966559949013">+966 55 994 9013</a>
                </span>
                {/* <span>
                  Teliphone : <a href="callto:+966 55 9949013">+1234566</a>
                </span> */}
              </article>
            </article>
            <article className="col-xl-3 col-lg-4 col-md-6">
              <article className="contact-info-box wow fadeInUp delay-0-5s">
                <article className="icon">
                  <i className="fal fa-clock" />
                </article>
                <h4>{t('Working Hour')}</h4>
                <b>{t('Saturday')} _ {t('Thursday')},</b>
                <span>10:00am - 06:00pm</span>
              </article>
            </article>
          </article>
        </article>
      </section>
      {/* Contact Info Area end */}
      {/* Location Map Area Start */}
      <article className="contact-page-map wow fadeInUp delay-0-2s">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m12!1m10!1m3!1d142190.2862584524!2d-74.01298319978558!3d40.721725351435126!2m1!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1663473911885!5m2!1sen!2sbd"
            style={{ border: 0, width: "100%" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
      </article>
      {/* Location Map Area End */}
      {/* Contact Form Start */}
      <section className="contact-page-form pb-130 rpb-100">
        <article className="container">
          <article className="contact-form-wrap form-style-two bgc-lighter wow fadeInUp delay-0-2s">
          <article className="row text-center mb-35 justify-content-center">
  <article className="col-xl-9 col-lg-11">
    <article className="section-title mb-25 wow fadeInUp delay-0-2s">
      <span className="sub-title mb-15">{t('Contact Us')}</span>
      <h2>{t('Send Us a Message')}</h2>
    </article>
    <p>
      {t('At Elite, we are always here to assist you. Whether you have questions about our services, need support with your projects, or want to discuss new ideas, our team is ready to help. Reach out to us, and we will get back to you as soon as possible to provide the best solutions for your business needs.')}
    </p>
  </article>
</article>

            <form
              onSubmit={(e) => e.preventDefault()}
              id="contactForm"
              className="contactForm"
              action="assets/php/form-process.php"
              name="contactForm"
            >
              <article className="row">
                <article className="col-md-6">
                  <article className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      defaultValue=""
                      placeholder="Full name"
                      required
                      data-error="Please enter your name"
                    />
                    <article className="help-block with-errors" />
                  </article>
                </article>
                <article className="col-md-6">
                  <article className="form-group">
                    <input
                      type="text"
                      id="phone_number"
                      name="phone_number"
                      className="form-control"
                      defaultValue=""
                      placeholder="Phone Number"
                      required
                      data-error="Please enter your Phone Number"
                    />
                    <article className="help-block with-errors" />
                  </article>
                </article>
                <article className="col-md-6">
                  <article className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      defaultValue=""
                      placeholder="Email Address"
                      required
                      data-error="Please enter your Email"
                    />
                    <article className="help-block with-errors" />
                  </article>
                </article>
                <article className="col-md-6">
                  <article className="form-group">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                      defaultValue=""
                      placeholder="Subject"
                      required
                      data-error="Please enter your Subject"
                    />
                    <article className="help-block with-errors" />
                  </article>
                </article>
                <article className="col-md-12">
                  <article className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows={3}
                      placeholder="Message"
                      required
                      data-error="Please enter your Message"
                      defaultValue={""}
                    />
                    <article className="help-block with-errors" />
                  </article>
                </article>
                <article className="col-xl-12">
                  <article className="form-group text-center mb-0">
                    <button type="submit" className="theme-btn style-two">
                      {t('send message')} <i className="far fa-long-arrow-right" />
                    </button>
                    <article id="msgSubmit" className="hidden" />
                  </article>
                </article>
              </article>
            </form>
          </article>
        </article>
      </section>
    </Layout>
  );
};
export default Contact;
