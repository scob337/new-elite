import React from 'react';
import Link from 'next/link';

const partnersData = [
  {
    image: 'assets/images/partners/partner1.png',
    alt: 'Partner 1',
    link: '#',
  },
  {
    image: 'assets/images/partners/partner2.png',
    alt: 'Partner 2',
    link: '#',
  },
  {
    image: 'assets/images/partners/partner3.png',
    alt: 'Partner 3',
    link: '#',
  },
  {
    image: 'assets/images/partners/partner4.png',
    alt: 'Partner 4',
    link: '#',
  },
  {
    image: 'assets/images/partners/partner5.png',
    alt: 'Partner 5',
    link: '#',
  },
];

const PartnersComponent = () => {
  return (
    <div className="partners-area-three text-center rel z-1 pb-110 rpb-80">
      <div className="container">
        <hr className="mb-75" />
        <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 justify-content-center">
          {partnersData.map((partner, index) => (
            <div key={index} className="col">
              <Link legacyBehavior   href={partner.link}>
                <a className={`partner-item-two wow fadeInUp delay-0-${index + 3}s`}>
                  <img  loading="lazy" src={partner.image} alt={partner.alt} />
                </a>
              </Link>
            </div>
          ))}
        </div>
        <hr className="mt-45" />
      </div>
    </div>
  );
};

export default PartnersComponent;
