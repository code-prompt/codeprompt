import { Rocket, Users, Zap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const StartupSection = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-accent/50 rounded-2xl lg:rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Rocket className="w-8 h-8 text-primary" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold text-heading mb-6">
              Special for Startups
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Are you a startup with a great idea? We specialize in rapid MVP development 
              to help you validate your concept and get to market faster. Our team delivers 
              fully functional SaaS products at competitive rates, designed to scale as you grow.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
              <div className="bg-background rounded-xl p-6 border border-border/50">
                <Zap className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-display font-semibold text-heading mb-2">Fast MVP Delivery</h3>
                <p className="text-sm text-muted-foreground">Launch quickly with a minimal viable product</p>
              </div>
              <div className="bg-background rounded-xl p-6 border border-border/50">
                <Users className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-display font-semibold text-heading mb-2">Dedicated Team</h3>
                <p className="text-sm text-muted-foreground">Expert developers focused on your success</p>
              </div>
              <div className="bg-background rounded-xl p-6 border border-border/50">
                <Rocket className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-display font-semibold text-heading mb-2">Scalable Solutions</h3>
                <p className="text-sm text-muted-foreground">Built to grow with your business</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupSection;
