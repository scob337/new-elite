import Link from "next/link";

const HeaderTop = () => {
  return (
    <article className="header-top-wrap bgc-secondary">
      <article className="container-fluid">
        <article className="header-top">
          <article className="text">
            <span className="hello">Hello</span> We’re professional IT solutions
            company. Let’s work together{" "}
            <Link legacyBehavior   href="/contact">
              <a>Contact Us</a>
            </Link>
          </article>
        </article>
      </article>
    </article>
  );
};
export default HeaderTop;
