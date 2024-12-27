import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import { Fragment } from "react";
import { useRouter } from "next/router";

const NavLinks = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Services", url: "/services" },
  // { name: "Projects", url: "/projects" },
  { name: "Contact", url: "/contact" },
];

const Menu = () => {
  return (
    <Fragment>
      <DeskTopMenu />
      <MobileMenu />
    </Fragment>
  );
};

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const active = (value) => setActiveMenu(value === activeMenu ? null : value);
  const router = useRouter();

  return (
    <nav className="main-menu navbar-expand-lg mobile-menu">
      <Accordion>
        <div className="navbar-header">
          <div className="mobile-logo">
            <Link href="/" legacyBehavior>
              <a>
                <img
                  src="assets/images/logos/logo-one.png"
                  alt="Logo"
                  title="Logo"
                />
              </a>
            </Link>
          </div>

          {/* Toggle Button */}
          <Accordion.Toggle
            as={"button"}
            type="button"
            className="navbar-toggle"
            eventKey="collapse"
            data-bs-target=".navbar-collapse"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          eventKey="collapse"
          className="navbar-collapse clearfix"
        >
          <ul className="navigation clearfix">
            {NavLinks.map((item, index) => (
              <li
                key={index}
                className={router.pathname === item.url ? "active" : ""}
              >
                <Link href={item.url} legacyBehavior>
                  <a>{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </Accordion.Collapse>
      </Accordion>
    </nav>
  );
};

const DeskTopMenu = () => {
  const router = useRouter();

  return (
    <nav className="main-menu navbar-expand-lg desktop-menu">
      <div className="navbar-header">
        <div className="mobile-logo">
          <Link href="/" legacyBehavior>
            <a>
              <img
                src="assets/images/logos/logo-one.png"
                alt="Logo"
                title="Logo"
              />
            </a>
          </Link>
        </div>
        {/* Toggle Button */}
        <button
          type="button"
          className="navbar-toggle"
          data-bs-toggle="collapse"
          data-bs-target=".navbar-collapse"
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
      </div>
      <div className="navbar-collapse collapse clearfix">
        <ul className="navigation clearfix">
          {NavLinks.map((item, index) => (
            <li
              key={index}
              className={router.pathname === item.url ? "active" : ""}
            >
              <Link href={item.url} legacyBehavior>
                <a>{item.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
