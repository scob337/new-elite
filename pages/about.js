import StatisticsComponent from "@/src/components/About/AboutCounter";
import AboutSection from "@/src/components/About/AboutSection";
import PartnersComponent from "@/src/components/About/Partners";
import ServicesSection from "@/src/components/About/ServicesSection";
import WhyChooseUs from "@/src/components/Home/WhyChooseUs";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Head from 'next/head';



const About = () => {
  return (
    <Layout>
    <Head>
              <title>Elite-Agency | About</title>
              <meta name="description" content="هذا وصف لصفحتك الرائعة." />
              <meta name="keywords" content="Next.js, React, SEO, تطوير ويب" />
              <meta name="author" content="اسمك" />
              <meta property="og:title" content="صفحة رئيسية رائعة" />
              <meta property="og:description" content="هذا وصف لصفحتك الرائعة." />
              <meta property="og:image" content="/path-to-your-image.jpg" />
              <meta property="og:url" content="https://yourwebsite.com" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
      <PageBanner pageName={"About Us"} />
      
        <AboutSection/>
      {/* About Area end */}
      {/* Services Area start */}
    <ServicesSection/>
      {/* Services Area Three end */}
      {/* Statistics Area start */}
    <StatisticsComponent/>
      {/* Statistics Area end */}

      {/* Why Choose Us Area start */}
        <WhyChooseUs/>
      {/* Why Choose Us Area end */}

      {/* Partners Area start */}
    <PartnersComponent/>
    </Layout>
  );
};
export default About;
