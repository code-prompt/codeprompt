import { Helmet } from "react-helmet-async";
import { Target, Eye, Lightbulb, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/home/CTASection";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower businesses through innovative and scalable software solutions. We aim to create technology that helps organizations operate more efficiently, scale faster, deliver better user experiences, and stay competitive in a digital-first world.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "We envision a future where technology works seamlessly with business goals. Our vision is to become a trusted global software partner known for innovation, reliability, and long-term impact.",
  },
  {
    icon: Lightbulb,
    title: "Our Philosophy",
    description:
      "We believe great software is built at the intersection of Technology, Strategy, and User Experience. Every project begins with understanding the problem, not just the technology.",
  },
];

const whyChooseUs = [
  "Experienced and skilled development team",
  "Modern and scalable technology stack",
  "SEO-friendly and performance-optimized solutions",
  "Transparent communication and agile delivery",
  "Long-term support and partnership",
  "We don't just build software — we build relationships that last",
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Code Prompt Technical Solutions</title>
        <meta
          name="description"
          content="CodePrompt is a modern software development company focused on building scalable, secure, and high-performance digital solutions for startups and enterprises."
        />
        <meta
          name="keywords"
          content="about codeprompt, software development team, digital transformation, custom software, technology partner"
        />
        <meta property="og:title" content="About Code Prompt Technical Solutions" />
        <meta
          property="og:description"
          content="Building Technology That Scales Businesses. Learn about our mission, vision, and how we help businesses succeed."
        />
        <link rel="canonical" href="https://codeprompt.in/about" />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
                About CodePrompt
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-heading leading-tight mb-6">
                Building Technology That{" "}
                <span className="text-primary">Scales Businesses</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                CodePrompt is a modern software development company focused on building 
                scalable, secure, and high-performance digital solutions. We help startups, 
                growing businesses, and enterprises transform ideas into powerful software 
                products that drive real business growth.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <SectionHeading
                label="Who We Are"
                title="Passionate Engineers & Problem-Solvers"
              />
              
              <div className="mt-10 prose prose-lg max-w-none text-muted-foreground">
                <p className="leading-relaxed">
                  We are a team of passionate engineers, designers, and problem-solvers who 
                  believe in building software with purpose. Our expertise spans web development, 
                  SaaS platforms, mobile applications, cloud solutions, and automation systems.
                </p>
                <p className="leading-relaxed mt-4">
                  By combining technical excellence with a deep understanding of business needs, 
                  we deliver solutions that are reliable, scalable, and future-ready. In today's 
                  fast-moving digital world, technology is not just a support system — it is the 
                  foundation of success. At CodePrompt, we design and develop software that solves 
                  complex business challenges, improves efficiency, and creates long-term value.
                </p>
                <p className="leading-relaxed mt-4">
                  We work on the latest technologies and align our work with your vision to ensure 
                  that every solution we deliver is tailored to your specific needs and goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Philosophy */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-background rounded-2xl p-8 border border-border/50"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-6">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-heading mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <SectionHeading
                  label="Why Choose Us"
                  title="Partner With the Best"
                  centered={false}
                />
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  We focus on clean architecture, secure systems, and intuitive design 
                  to ensure every solution delivers measurable value. Our development 
                  process is transparent, agile, and results-driven.
                </p>
              </div>
              
              <div className="bg-secondary rounded-2xl p-8 lg:p-10">
                <ul className="space-y-4">
                  {whyChooseUs.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </Layout>
    </>
  );
};

export default About;
