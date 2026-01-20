import SectionHeading from "@/components/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand your business goals, challenges, and requirements through in-depth consultation.",
  },
  {
    number: "02",
    title: "Design",
    description: "Create intuitive and user-focused experiences with modern UI/UX design principles.",
  },
  {
    number: "03",
    title: "Develop",
    description: "Build scalable and secure software using the latest technologies and best practices.",
  },
  {
    number: "04",
    title: "Deploy",
    description: "Launch your product with performance optimization and reliability assurance.",
  },
  {
    number: "05",
    title: "Scale",
    description: "Optimize, automate, and support your growth with continuous improvement.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Process"
          title="How We Work"
          description="Our development process is transparent, agile, and results-driven to ensure faster delivery and higher quality."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-background rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-colors group"
            >
              <span className="text-4xl font-display font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                {step.number}
              </span>
              <h3 className="mt-4 font-display font-semibold text-lg text-heading">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
