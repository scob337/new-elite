import Link from 'next/link'
import React from 'react'

const FooterCTA = () => {
  return (
    <div className="footer-cta-wrap">
    <div className="container">
      <div
        className="footer-cta-inner bgs-cover"
        style={{
          backgroundImage: "url(assets/images/footer/footer-cta-bg.jpg)",
        }}
      >
        
        <div className="section-title wow fadeInLeft delay-0-2s">
          <span className="sub-title">Need Any Consultations ?</span>
          <h2>We’re Ready to Growth IT Business</h2>
        </div>
        <Link legacyBehavior href="/contact">
          <a className="theme-btn style-three wow fadeInRight delay-0-2s">
            Get Free Quote <i className="fas fa-long-arrow-right" />
          </a>
        </Link>
        <div className="hotline wow fadeInRight delay-0-2s">
          <i className="fas fa-phone" />
          <div className="content">
            <span>Hotline</span>
            <br />
            <a href="callto:+966559949013">+966 55 994 9013</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FooterCTA
