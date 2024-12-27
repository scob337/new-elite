import StatisticsComponent from "@/src/components/About/AboutCounter";
import AboutSection from "@/src/components/About/AboutSection";
import PartnersComponent from "@/src/components/About/Partners";
import ServicesSection from "@/src/components/About/ServicesSection";
import WhyChooseUs from "@/src/components/Home/WhyChooseUs";
import PageBanner from "@/src/components/PageBanner";
import TestimonialsSlider from "@/src/components/slider/TestimonialsSlider";
import Layout from "@/src/layout/Layout";
import Link from "next/link";



const About = () => {
  return (
    <Layout>
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
