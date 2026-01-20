import { Globe, Smartphone, Rocket, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Custom web applications built with modern frameworks. SEO-friendly, fast, and scalable solutions tailored to your business needs.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android devices.",
  },
  {
    icon: Rocket,
    title: "SaaS & MVP Development",
    description:
      "Rapid MVP development for startups. We help you validate ideas quickly and launch your SaaS product to market faster.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing & SEO",
    description:
      "Comprehensive digital marketing strategies and SEO optimization to increase your online visibility and drive growth.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Services"
          title="What We Offer"
          description="We provide end-to-end software solutions designed to help your business thrive in the digital landscape."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-display">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
