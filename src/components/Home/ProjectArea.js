import Link from "next/link";
import { useTranslation } from "react-i18next";

const projects = [
    {
      id: 1,
      image: "assets/images/projects/project1.jpg",
      title: "Mobile Application Development",
      description:
        "We develop cross-platform mobile applications that provide seamless user experiences.",
      link: "/mobile-application",
      delay: "0-2s",
    },
    {
      id: 2,
      image: "assets/images/projects/project2.jpg",
      title: "Web Design & Development",
      description:
        "We create responsive websites with modern designs to enhance your business presence.",
      link: "/web-development",
      delay: "0-4s",
    },
    {
      id: 3,
      image: "assets/images/projects/project3.jpg",
      title: "Social Media Marketing",
      description:
        "Maximize your brand’s presence through effective social media marketing strategies.",
      link: "/social-media",
      delay: "0-6s",
    },
    {
      id: 4,
      image: "assets/images/projects/project4.jpg",
      title: "Digital Marketing & SEO",
      description:
        "Boost your website traffic and online visibility with tailored digital marketing strategies.",
      link: "/digital-marketing",
      delay: "0-8s",
    },
  ];
  
  export default function ProjectArea() {
    const { t } = useTranslation();
    return (
      <section className="project-area-two">
        <article className="container-fluid gap-wide">
          <article className="row no-gap justify-content-center">
            {projects.map((project) => (
              <article key={project.id} className="col-xl-3 col-lg-4 col-sm-6">
                <article
                  className={`project-item wow fadeInUp delay-${project.delay}`}
                >
                  <article className="image">
                    <img  loading="lazy" src={project.image} alt="Project" />
                  </article>
                  <article className="content">
                    <span className="number">{`0${project.id}`}</span>
                    <h3>{t(project.title)}</h3>
                    <p>{t(project.description)}</p>
                    <Link legacyBehavior   href={project.link}>
                      <a className="theme-btn">
                        {t('View Details')} <i className="fas fa-long-arrow-right" />
                      </a>
                    </Link>
                  </article>
                </article>
              </article>
            ))}
          </article>
        </article>
      </section>
    );
  }
  