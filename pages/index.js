import Layout from "@/layout";
import AboutSection from "@/src/components/About/AboutSection";
import CustomerSatisfactionSection from "@/src/components/Home/CustomerSatisfactionSection ";
import FeaturesGrid from "@/src/components/Home/FutureServices";
import HomeBanner from "@/src/components/Home/HomeBanner";
import ProjectArea from "@/src/components/Home/ProjectArea";
import ServicesSection from "@/src/components/Home/ServicesSection";
import StatisticsSection from "@/src/components/Home/StatisticsSection";
import WhyChooseUs from "@/src/components/Home/WhyChooseUs";
import Head from 'next/head';

const Index2 = () => {
  return (
    <Layout>
            <Head>
        <title> Elite-Agency  </title>
        <meta name="description" content="هذا وصف لصفحتك الرائعة." />
        <meta name="keywords" content="Next.js, React, SEO, تطوير ويب" />
        <meta name="author" content="اسمك" />
        <meta property="og:title" content="صفحة رئيسية رائعة" />
        <meta property="og:description" content="هذا وصف لصفحتك الرائعة." />
        <meta property="og:image" content="/path-to-your-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <section
        className="hero-area-two bgs-cover"
        style={{ backgroundImage: "url(assets/images/hero/hero-two.jpg)" }}
      >

        <div className="container">
          <HomeBanner />
          <FeaturesGrid />
        </div>

        <div className="hero-shapes-two">
          <img src="assets/images/hero/hero-bg-lines.png" alt="BG Lines" />
        </div>
      </section>
      {/* Hero Section End */}

      {/* About Area start */}
    <AboutSection/>
      {/* About Area end */}

      {/* Services Area Two start */}
    <ServicesSection/>
      {/* Services Area Two end */}

      {/* Customer Satisfaction Area start */}
    <CustomerSatisfactionSection/>
      {/* Customer Satisfaction Area end */}

      {/* Statistics Area start */}
      <StatisticsSection/>
      {/* Statistics Area end */}

      {/* Project Area start */}
      <ProjectArea/>
      {/* Project Area end */}

      {/* Why Choose Us Area start */}
  <WhyChooseUs/>
      {/* Why Choose Us Area end */}

    </Layout>
  );
};
export default Index2;
