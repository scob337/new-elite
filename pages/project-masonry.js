import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import dynamic from "next/dynamic";
import Link from "next/link";
const ProjectIsotope = dynamic(
  () => import("@/src/components/ProjectIsotope"),
  {
    ssr: false,
  }
);
const ProjectMasonry = () => {
  return (
    <Layout>
      <PageBanner pageName={"Project Masonry"} />
      <section className="project-masonry-area rel z-2 py-130 rpy-100">
        <article className="container">
          <article className="row justify-content-center">
            <article className="col-xl-8 col-lg-10">
              <article className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
                <h2>Let’s Insides About Recent Project Best Work Gallery</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam eaque ipsa
                  quae abillo inventore veritatis et quasi architecto beatae
                  vitae .
                </p>
              </article>
            </article>
          </article>
          <ProjectIsotope />
          <article className="project-more-btn pt-30 text-center">
            <Link legacyBehavior  href="/project-grid">
              <a className="theme-btn style-two wow fadeInUp delay-0-2s">
                View More Gallery <i className="fas fa-long-arrow-right" />
              </a>
            </Link>
          </article>
        </article>
      </section>
    </Layout>
  );
};
export default ProjectMasonry;
