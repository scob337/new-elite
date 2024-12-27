import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import Head from 'next/head';

const Contact = () => {
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
        <div className="container">
          <div className="row text-center mb-35 justify-content-center wow fadeInUp delay-0-2s">
          <div className="col-xl-8 col-lg-10">
  <div className="section-title mb-25">
    <span className="sub-title mb-15">About Our Company</span>
    <h2>Company Information</h2>
  </div>
  <p>
    At Elite, we specialize in providing top-notch web development, mobile application development, and marketing services. With a commitment to delivering high-quality solutions tailored to your business needs, we help companies grow and thrive in the digital world. Our team of experts works tirelessly to ensure that every project is executed with precision and dedication, ensuring client satisfaction at every step.
  </p>
</div>

          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="contact-info-box wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="fal fa-map-marker-alt" />
                </div>
                <h4>Locations</h4>
                <span> Saudi Arabia, Riyadh</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="contact-info-box wow fadeInUp delay-0-3s">
                <div className="icon">
                  <i className="fal fa-envelope-open" />
                </div>
                <h4>Email Us</h4>
                <a href="mailto:elitearab2030@gmail.com">
                elitearab2030@gmail.com
                </a>
                <br />
                <a href="http://www.elitearab.net">www.elitearab.net</a>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="contact-info-box wow fadeInUp delay-0-4s">
                <div className="icon">
                  <i className="fal fa-phone-plus" />
                </div>
                <h4>Locations</h4>
                <span>
                  Mobile : <a href="callto:+966559949013">+966 55 994 9013</a>
                </span>
                {/* <span>
                  Teliphone : <a href="callto:+966 55 9949013">+1234566</a>
                </span> */}
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="contact-info-box wow fadeInUp delay-0-5s">
                <div className="icon">
                  <i className="fal fa-clock" />
                </div>
                <h4>Working Hour</h4>
                <b>Saturday _ Thursday,</b>
                <span>10:00am - 06:00pm</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Info Area end */}
      {/* Location Map Area Start */}
      <div className="contact-page-map wow fadeInUp delay-0-2s">
        <div className="our-location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m12!1m10!1m3!1d142190.2862584524!2d-74.01298319978558!3d40.721725351435126!2m1!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1663473911885!5m2!1sen!2sbd"
            style={{ border: 0, width: "100%" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      {/* Location Map Area End */}
      {/* Contact Form Start */}
      <section className="contact-page-form pb-130 rpb-100">
        <div className="container">
          <div className="contact-form-wrap form-style-two bgc-lighter wow fadeInUp delay-0-2s">
          <div className="row text-center mb-35 justify-content-center">
  <div className="col-xl-9 col-lg-11">
    <div className="section-title mb-25 wow fadeInUp delay-0-2s">
      <span className="sub-title mb-15">Contact Us</span>
      <h2>Send Us a Message</h2>
    </div>
    <p>
      At Elite, we are always here to assist you. Whether you have questions about our services, need support with your projects, or want to discuss new ideas, our team is ready to help. Reach out to us, and we will get back to you as soon as possible to provide the best solutions for your business needs.
    </p>
  </div>
</div>

            <form
              onSubmit={(e) => e.preventDefault()}
              id="contactForm"
              className="contactForm"
              action="assets/php/form-process.php"
              name="contactForm"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
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
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
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
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
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
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
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
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
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
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="form-group text-center mb-0">
                    <button type="submit" className="theme-btn style-two">
                      send message <i className="far fa-long-arrow-right" />
                    </button>
                    <div id="msgSubmit" className="hidden" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Contact;
