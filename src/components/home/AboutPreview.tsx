import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const features = [
  "Experienced and skilled development team",
  "Modern and scalable technology stack",
  "SEO-friendly and performance-optimized solutions",
  "Transparent communication and agile delivery",
  "Long-term support and partnership",
];

const AboutPreview = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-slide-in-left">
            <SectionHeading
              label="About CodePrompt"
              title="Building Technology That Scales Businesses"
              centered={false}
            />
            
            <p className="mt-6 text-muted-foreground leading-relaxed">
              CodePrompt is a modern software development company focused on building 
              scalable, secure, and high-performance digital solutions. We help startups, 
              growing businesses, and enterprises transform ideas into powerful software 
              products that drive real business growth.
            </p>
            
            <p className="mt-4 text-muted-foreground leading-relaxed">
              In today's fast-moving digital world, technology is not just a support 
              system — it is the foundation of success. At CodePrompt, we design and 
              develop software that solves complex business challenges.
            </p>

            <div className="mt-8">
              <Button asChild className="group">
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="bg-secondary rounded-2xl p-8 lg:p-10">
              <h3 className="font-display font-semibold text-xl text-heading mb-6">
                Why Choose CodePrompt
              </h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
