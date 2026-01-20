import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutPreview from "@/components/home/AboutPreview";
import StartupSection from "@/components/home/StartupSection";
import ProcessSection from "@/components/home/ProcessSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Code Prompt Technical Solutions | Software Development Company</title>
        <meta
          name="description"
          content="CodePrompt is a software development company delivering secure, high-performance web, mobile, and SaaS solutions. We help startups and enterprises transform ideas into scalable digital products."
        />
        <meta
          name="keywords"
          content="software development company, scalable software, web development, SaaS solutions, mobile app development, digital products, modern technologies, MVP development, startup development"
        />
        <meta property="og:title" content="Code Prompt Technical Solutions | Building Scalable Software" />
        <meta
          property="og:description"
          content="We create secure, high-performance software solutions that help businesses grow, scale, and succeed in the digital world."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://codeprompt.in" />
      </Helmet>
      
      <Layout>
        <HeroSection />
        <ServicesSection />
        <AboutPreview />
        <StartupSection />
        <ProcessSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
