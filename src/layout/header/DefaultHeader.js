import Link from "next/link";
import HeaderTop from "./HeaderTop";
import Menu from "./Menu";

const DefaultHeader = () => {


  return (
    <header className="main-header header-two">
      <HeaderTop />
      {/* Header-Upper */}
      <article className="header-upper bg-white">
        <article className="container-fluid clearfix">
          <article className={"header-inner rel d-flex align-items-center justify-content-between"}>
            <article className="logo-outer">
              <article className="logo bgc-gray">
                <Link legacyBehavior   href="/" >
                  <a>
                    <img
                      src="assets/images/logos/logo.png"
                      alt="Logo"
                      title="Logo"
                    />
                  </a>
                </Link>
              </article>
            </article>
            <article className="nav-outer  d-flex align-items-center justify-content-between w-75">
              {/* Main Menu */}
              <Menu />
              {/* Main Menu End */}
            </article>
            {/* Menu Button */}

          </article>
        </article>
      </article>
      {/* End Header Upper */}
    </header>
  );
};

export default DefaultHeader;
