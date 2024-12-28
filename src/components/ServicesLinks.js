import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router'; // استيراد useRouter
import { useTranslation } from 'react-i18next';

const servicesList = [
  { name: "Graphic Design", link: "/graphic-design" },
  { name: "Digital Marketing", link: "/digital-marketing" },
  { name: "SEO Optimization", link: "/seo" },
  { name: "Mobile Application Development", link: "/mobile-application" },
  { name: "Web & APP Development", link: "/web-development" },
  { name: "Video Editing & Motion Graphic", link: "/video-editing" },
  { name: "UI/UX Design", link: "/ui-ux" },
  { name: "Social Media", link: "/social-media" },
  { name: "Content Writer", link: "/content-writer" },
];

const ServicesLinks = () => {
  const { t } = useTranslation();
  const router = useRouter(); // الحصول على معلومات المسار الحالي

  return (
    <ul>
      {servicesList.map((service, index) => (
        <li
          key={index}
          className={router.pathname === service.link ? "active" : ""}
        >
          <Link legacyBehavior href={service.link}>
            {t(service.name)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ServicesLinks;
