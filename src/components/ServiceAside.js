import React from 'react'
import ServicesLinks from './ServicesLinks'
import Link from 'next/link'

const ServiceAside = () => {
  return (
    <div className="col-lg-4">
    <div className="service-sidebar">
      <div className="widget widget-category wow fadeInUp delay-0-2s">
        <h4 className="widget-title">Services Category</h4>
          <ServicesLinks/>
      </div>
      <div
        className="widget widget-cta"
        style={{
          backgroundImage:
            "url(assets/images/widgets/cta-widget-bg.jpg)",
        }}
      >
        <span className="h5">Let's Work Together</span>
        <h2>Elite  Agency</h2>
        <Link legacyBehavior href="/contact">
          <a className="theme-btn style-four">
            Contact Us <i className="fas fa-angle-double-right" />
          </a>
        </Link>
        <br />
        <a href="callto:+966559949013" className="number">
          <i className="fas fa-phone" /> +966 55 994 9013
        </a>
        <img
          className="bg-shape"
          src="assets/images/widgets/cta-bg-lines.png"
          alt="Shape"
        />
      </div>
      <div className="widget widget-download wow fadeInUp delay-0-2s">
        <h4 className="widget-title">Download</h4>
        <ul>
        <li>
  <Link href="/assets/Profile.pdf" legacyBehavior>
    <a download>
      Download PDF <i className="far fa-file-pdf" />
    </a>
  </Link>
</li>


        </ul>
      </div>
    </div>
  </div>
  )
}

export default ServiceAside
