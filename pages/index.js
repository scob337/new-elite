import Layout from "@/layout";
import AboutSection from "@/src/components/About/AboutSection";
import CustomerSatisfactionSection from "@/src/components/Home/CustomerSatisfactionSection ";
import FeaturesGrid from "@/src/components/Home/FutureServices";
import HomeBanner from "@/src/components/Home/HomeBanner";
import ProjectArea from "@/src/components/Home/ProjectArea";
import ServicesSection from "@/src/components/Home/ServicesSection";
import StatisticsSection from "@/src/components/Home/StatisticsSection";
import WhyChooseUs from "@/src/components/Home/WhyChooseUs";
import { testimonialSlider } from "@/src/sliderProps";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";


const Index2 = () => {
  return (
    <Layout>
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
