import UpperFooter from "./UpperFooter";
import FooterCTA from "./FooterCTA";
const Footer = () => {
  return (
    <footer className="main-footer bgc-gray footer-white rel z-1">
      <FooterCTA />

      <UpperFooter />

      <div className="footer-bottom bgc-black mt-20 pt-20">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-12 text-center d-flex justify-content-center">
              <div className="copyright-text text-lg-end wow fadeInLeft delay-0-2s">
                <p>© 2024 Elite Agency. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-shapes">
        <img
          className="shape one"
          src="assets/images/footer/footer-bg-weve-shape.png"
          alt="Shape"
        />
        <img
          className="shape two"
          src="assets/images/footer/footer-bg-line-shape.png"
          alt="Shape"
        />
        <img
          className="shape three wow fadeInRight delay-0-8s"
          src="assets/images/footer/footer-right.png"
          alt="Shape"
        />
      </div>
    </footer>
  );
};
export default Footer;
