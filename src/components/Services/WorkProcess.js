import { useTranslation } from "react-i18next";

const processSteps = [
    {
      number: "01",
      title: "Discover",
      description:
        "We emphasize planning to ensure everything is documented and clear.",
      animation: "fadeInUp",
      marginTop: "40",
    },
    {
      number: "02",
      title: "Planning",
      description:
        "Our design approach is to simplify and embrace creating impactful solutions.",
      animation: "fadeInDown",
      marginTop: "10",
    },
    {
      number: "03",
      title: "Design & Dev",
      description:
        "At this step, we cater to requirements by delivering robust web services.",
      animation: "fadeInUp",
      marginTop: "40",
    },
    {
      number: "04",
      title: "Testing",
      description:
        "We rigorously test to ensure quality and seamless performance.",
      animation: "fadeInDown",
      marginTop: "0",
    },
    {
      number: "05",
      title: "Project Deliver",
      description:
        "We deliver a polished project and provide ongoing support for success.",
      animation: "fadeInUp",
      marginTop: "50",
    },
  ];
  
  const WorkProcess = () => {
    const { t } = useTranslation();
    return (
      <section className="work-process-area pt-130 pb-100 rpt-100 rpb-70 rel z-1">
        <article className="section-title text-center mb-70 wow fadeInUp delay-0-2s">
          <span className="sub-title mb-15">{t('Working Process')}</span>
          <h2>{t('Industry Best Practices to the Core')}</h2>
        </article>
        <article className="work-process-line text-center">
          <img  loading="lazy" src="assets/images/shapes/work-process-line.png" alt="line" />
        </article>
        <article className="container">
          <article className="row row-cols-xl-5 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
            {processSteps.map((step, index) => (
              <article className="col" key={index}>
                <article
                  className={`work-process-item mt-${step.marginTop} wow ${step.animation} delay-0-${index + 2}s`}
                >
                  <article className="number">{step.number}</article>
                  <article className="content">
                    <h4>{t(step.title)}</h4>
                    <p>{t(step.description)}</p>
                  </article>
                </article>
              </article>
            ))}
          </article>
        </article>
      </section>
    );
  };
  
  export default WorkProcess;
  