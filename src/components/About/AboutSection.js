import Link from "next/link";

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
    return (
      <section className="about-area-two py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row align-items-center gap-90">
            <div className="col-lg-6">
              <div className="about-two-image rel z-1 rmb-65 wow fadeInRight delay-0-2s">
                <img src="assets/images/about/about-two.jpg" alt="About" />
                <div className="bg-circle-shape" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content rel z-1 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">About Company</span>
                  <h2>{aboutContent.title}</h2>
                </div>
                <p>{aboutContent.description}</p>
                <div className="about-btns">
                  <Link legacyBehavior href={aboutContent.button.href}>
                    <a className="theme-btn style-three mt-15">
                      {aboutContent.button.text} <i className={aboutContent.button.iconClass} />
                    </a>
                  </Link>
                  <div className="hotline mt-15">
                    <i className="fas fa-phone" />
                    <div className="content">
                      <span>Hotline</span>
                      <br />
                      <a href={aboutContent.hotline.href}>{aboutContent.hotline.number}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;
  