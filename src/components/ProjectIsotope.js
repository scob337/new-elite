import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef } from "react";

const ProjectIsotope = () => {
  // Isotope
  const isotope = useRef();
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".project-active", {
        itemSelector: ".item",
        percentPosition: true,
        masonry: {
          columnWidth: 1,
        },
      });
    }, 1000);
  }, []);
  return (
    <article className="row project-active">
      <article className="col-xl-6 col-lg-8 item">
        <article className="project-grid-item wow fadeInUp delay-0-2s">
          <article className="image">
            <img
              src="assets/images/projects/project-masonry1.jpg"
              alt="Project Masonry"
            />
            <a
              className="plus"
              href="assets/images/projects/project-masonry1.jpg"
            />
          </article>
          <article className="content">
            <h5>
              <Link legacyBehavior  legacyBehavior href="project-details">
                Web Development
              </Link>
            </h5>
            <Link legacyBehavior  legacyBehavior href="/project-details">
              <a className="detail-btn">
                <i className="far fa-arrow-right" />
              </a>
            </Link>
          </article>
        </article>
      </article>
      <article className="col-xl-3 col-lg-4 col-md-6 item">
        <article className="project-grid-item wow fadeInUp delay-0-4s">
          <article className="image">
            <img
              src="assets/images/projects/project-masonry2.jpg"
              alt="Project Masonry"
            />
            <a
              className="plus"
              href="assets/images/projects/project-masonry2.jpg"
            />
          </article>
          <article className="content">
            <h5>
              <Link legacyBehavior  legacyBehavior href="project-details">
                Mobile Applications
              </Link>
            </h5>
            <Link legacyBehavior  legacyBehavior href="/project-details">
              <a className="detail-btn">
                <i className="far fa-arrow-right" />
              </a>
            </Link>
          </article>
        </article>
      </article>
      <article className="col-xl-3 col-lg-4 col-md-6 item">
        <article className="project-grid-item wow fadeInUp delay-0-6s">
          <article className="image">
            <img
              src="assets/images/projects/project-masonry3.jpg"
              alt="Project Masonry"
            />
            <a
              className="plus"
              href="assets/images/projects/project-masonry3.jpg"
            />
          </article>
          <article className="content">
            <h5>
              <Link legacyBehavior  legacyBehavior href="project-details">
                IT Consulting
              </Link>
            </h5>
            <Link legacyBehavior  legacyBehavior href="/project-details">
              <a className="detail-btn">
                <i className="far fa-arrow-right" />
              </a>
            </Link>
          </article>
        </article>
      </article>
      <article className="col-xl-3 col-lg-4 col-md-6 item">
        <article className="project-grid-item wow fadeInUp delay-0-2s">
          <article className="image">
            <img
              src="assets/images/projects/project-masonry4.jpg"
              alt="Project Masonry"
            />
            <a
              className="plus"
              href="assets/images/projects/project-masonry4.jpg"
            />
          </article>
          <article className="content">
            <h5>
              <Link legacyBehavior  legacyBehavior href="project-details">
                Business Analysis
              </Link>
            </h5>
            <Link legacyBehavior  legacyBehavior href="/project-details">
              <a className="detail-btn">
                <i className="far fa-arrow-right" />
              </a>
            </Link>
          </article>
        </article>
      </article>
      <article className="col-xl-3 col-lg-4 col-md-6 item">
        <article className="project-grid-item wow fadeInUp delay-0-2s">
          <article className="image">
            <img
              src="assets/images/projects/project-masonry5.jpg"
              alt="Project Masonry"
            />
            <a
              className="plus"
              href="assets/images/projects/project-masonry5.jpg"
            />
          </article>
          <article className="content">
            <h5>
              <Link legacyBehavior  legacyBehavior href="project-details">
                UX/UI Strategy
              </Link>
            </h5>
            <Link legacyBehavior  legacyBehavior href="/project-details">
              <a className="detail-btn">
                <i className="far fa-arrow-right" />
              </a>
            </Link>
          </article>
        </article>
      </article>
      <article className="col-xl-3 col-lg-4 col-md-6 item">
        <article className="project-grid-item wow fadeInUp delay-0-2s">
          <article className="image">
            <img
              src="assets/images/projects/project-masonry6.jpg"
              alt="Project Masonry"
            />
            <a
              className="plus"
              href="assets/images/projects/project-masonry6.jpg"
            />
          </article>
          <article className="content">
            <h5>
              <Link legacyBehavior  legacyBehavior href="project-details">
                Digital Analysis
              </Link>
            </h5>
            <Link legacyBehavior  legacyBehavior href="/project-details">
              <a className="detail-btn">
                <i className="far fa-arrow-right" />
              </a>
            </Link>
          </article>
        </article>
      </article>
      <article className="col-xl-3 col-lg-4 col-md-6 item">
        <article className="project-grid-item wow fadeInUp delay-0-2s">
          <article className="image">
            <img
              src="assets/images/projects/project-masonry7.jpg"
              alt="Project Masonry"
            />
            <a
              className="plus"
              href="assets/images/projects/project-masonry7.jpg"
            />
          </article>
          <article className="content">
            <h5>
              <Link legacyBehavior  legacyBehavior href="project-details">
                IT Consulting
              </Link>
            </h5>
            <Link legacyBehavior  legacyBehavior href="/project-details">
              <a className="detail-btn">
                <i className="far fa-arrow-right" />
              </a>
            </Link>
          </article>
        </article>
      </article>
      <article className="col-xl-6 col-lg-8 item">
        <article className="project-grid-item wow fadeInUp delay-0-2s">
          <article className="image">
            <img
              src="assets/images/projects/project-masonry8.jpg"
              alt="Project Masonry"
            />
            <a
              className="plus"
              href="assets/images/projects/project-masonry8.jpg"
            />
          </article>
          <article className="content">
            <h5>
              <Link legacyBehavior  legacyBehavior href="project-details">
                Mobile Application Development
              </Link>
            </h5>
            <Link legacyBehavior  legacyBehavior href="/project-details">
              <a className="detail-btn">
                <i className="far fa-arrow-right" />
              </a>
            </Link>
          </article>
        </article>
      </article>
      <article className="col-xl-3 col-lg-4 col-md-6 item">
        <article className="project-grid-item wow fadeInUp delay-0-2s">
          <article className="image">
            <img
              src="assets/images/projects/project-masonry9.jpg"
              alt="Project Masonry"
            />
            <a
              className="plus"
              href="assets/images/projects/project-masonry9.jpg"
            />
          </article>
          <article className="content">
            <h5>
              <Link legacyBehavior  legacyBehavior href="project-details">
                Web Design
              </Link>
            </h5>
            <Link legacyBehavior  legacyBehavior href="/project-details">
              <a className="detail-btn">
                <i className="far fa-arrow-right" />
              </a>
            </Link>
          </article>
        </article>
      </article>
      <article className="col-xl-3 col-lg-4 col-md-6 item">
        <article className="project-grid-item wow fadeInUp delay-0-2s">
          <article className="image">
            <img
              src="assets/images/projects/project-masonry10.jpg"
              alt="Project Masonry"
            />
            <a
              className="plus"
              href="assets/images/projects/project-masonry10.jpg"
            />
          </article>
          <article className="content">
            <h5>
              <Link legacyBehavior  legacyBehavior href="project-details">
                Product Engineering
              </Link>
            </h5>
            <Link legacyBehavior  legacyBehavior href="/project-details">
              <a className="detail-btn">
                <i className="far fa-arrow-right" />
              </a>
            </Link>
          </article>
        </article>
      </article>
    </article>
  );
};
export default ProjectIsotope;
