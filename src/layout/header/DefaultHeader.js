import Link from "next/link";
import HeaderTop from "./HeaderTop";
import Menu from "./Menu";

const DefaultHeader = () => {


  return (
    <header className="main-header header-two">
      <HeaderTop />
      {/* Header-Upper */}
      <div className="header-upper bg-white">
        <div className="container-fluid clearfix">
          <div className={"header-inner rel d-flex align-items-center justify-content-between"}>
            <div className="logo-outer">
              <div className="logo bgc-gray">
                <Link legacyBehavior   href="/" >
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
            <div className="nav-outer  d-flex align-items-center justify-content-between w-75">
              {/* Main Menu */}
              <Menu />
              {/* Main Menu End */}
            </div>
            {/* Menu Button */}

          </div>
        </div>
      </div>
      {/* End Header Upper */}
    </header>
  );
};

export default DefaultHeader;
