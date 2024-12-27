import Link from "next/link";

const servicesData = [
    {
      icon: "flaticon-agile",
      title: "Innovative App Development",
      description: "We provide innovative mobile and web app development solutions that leverage the latest technologies to meet market needs.",
      link: "web-development"
    },
    {
      icon: "flaticon-mission",
      title: "Content Writing",
      description: "We offer tailored tech solutions for your business, from designing integrated systems to enhancing IT infrastructure.",
      link: "content-writer"
    },
    {
      icon: "flaticon-mission-1",
      title: "Trusted Partner",
      description: "We act as trusted partners, helping you achieve your tech goals and expand your business in both local and global markets.",
      link: "services"
    }
  ];
  
  
  const ServicesSection = () => {
    return (
      <section className="services-area-six pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row">
            {servicesData.map((service, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className={`service-item-six wow fadeInUp delay-0-${(index + 1) * 2}s`}>
                  <div className="icon">
                    <i className={service.icon} />
                  </div>
                  <h4>
                    <Link legacyBehavior href={service.link}>
                      {service.title}
                    </Link>
                  </h4>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  export default ServicesSection