import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CarSection from "@/components/CarSection";
import ReviewsSection from "@/components/ReviewsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>SK Tours & Travels – Long-Distance & One-Way Car Travel in Maharashtra</title>
        <meta
          name="description"
          content="Reliable long-distance and one-way car travel services across Maharashtra. Safe, comfortable trips with professional service and on-time pickup."
        />
        <meta
          name="keywords"
          content="long-distance car travel, one-way travel, outstation car service, Maharashtra travel, SK Tours & Travels"
        />
        <link rel="canonical" href="https://sktours-travels.in/" />
      </Helmet>

      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CarSection />
        <ReviewsSection />
        <WhyChooseSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
