import Link from "next/link";
import HeaderTop from "./HeaderTop";
import Menu from "./Menu";
const DefaultHeader = () => {

  return (
    <header className="main-header header-two">
      <HeaderTop />
      {/*Header-Upper*/}
      <div className="header-upper bg-white">
        <div className="container-fluid clearfix">
          <div className="header-inner rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo bgc-gray">
                <Link legacyBehavior href="/" >
                  <a>
                    <img
                      src="assets/images/logos/logo.png"
                      alt="Logo"
                      title="Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer mx-auto clearfix">
              {/* Main Menu */}
              <Menu />
              {/* Main Menu End*/}
            </div>
            {/* Nav Search */}

            {/* Menu Button */}
            <div className="menu-btns">
              <Link legacyBehavior href="/contact">
                <a className="theme-btn">
                  Get a Quote <i className="fas fa-long-arrow-right" />
                </a>
              </Link>
            </div>


          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};
export default DefaultHeader;
