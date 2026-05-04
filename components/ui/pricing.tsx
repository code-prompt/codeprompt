import { Send, BarChart3, Wallet, Zap } from "lucide-react";
import Link from "next/link";
import { Container } from "./container";

const plans = [
  {
    id: "starter",
    name: "Starter Pack",
    price: "₹19,999",
    badge: "Basic",
    description: "Perfect for early-stage founders or individuals validating an idea.",
    features: [
      "MVP or small feature development",
      "Basic web application",
      "Core functionality setup",
      "Standard UI/UX design",
      "1–2 weeks delivery timeline",
      "Email support",
    ],
  },
  {
    id: "professional",
    name: "Professional Pack",
    price: "₹29,999",
    badge: "Pro",
    description: "Ideal for startups ready to launch a real product with support.",
    features: [
      "Complete MVP or SaaS application",
      "Advanced UI/UX design",
      "AI feature integration",
      "API & third-party integrations",
      "Launch support included",
      "3 Months Support",
    ],
    highlight: true,
  },
  {
    id: "business",
    name: "Business Pack",
    price: "₹49,999",
    badge: "Business",
    description: "Built for serious businesses aiming for scale and growth.",
    features: [
      "Full product development",
      "Advanced system architecture",
      "AI agents / automation workflows",
      "Multi-user systems & analytics",
      "Priority development",
      "Launch + scaling assistance",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="py-20 bg-white" id="pricing">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">Pricing</h2>
          <p className="text-slate-500 leading-relaxed">
            Choose the perfect plan for your business needs. 
            Our transparent pricing ensures you get the best value for your investment.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 mb-16 text-[10px] font-bold uppercase tracking-widest text-slate-900">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-brand/10 rounded-lg text-brand"><Send size={18} /></div>
            SEND & RECEIVE
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-brand/10 rounded-lg text-brand"><BarChart3 size={18} /></div>
            TRADING CHARTS
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-brand/10 rounded-lg text-brand"><Wallet size={18} /></div>
            WALLET
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-brand/10 rounded-lg text-brand"><Zap size={18} /></div>
            REAL TIME TRADING
          </div>
        </div>

        <div className="flex overflow-x-auto pb-8 gap-6 md:grid md:grid-cols-3 md:pb-0 scrollbar-hide snap-x snap-mandatory">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`min-w-[85%] md:min-w-full snap-center flex flex-col p-8 rounded-[2rem] border transition-all ${
                plan.highlight ? "bg-white border-brand shadow-lg" : "bg-slate-50 border-slate-200 hover:bg-slate-100/50"
              }`}
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-1 rounded-full bg-brand text-white text-[10px] font-bold uppercase tracking-tighter mb-6">
                  {plan.badge}
                </span>
                <div className="text-4xl font-bold text-slate-900 mb-4">{plan.price} <span className="text-sm font-medium text-slate-500 uppercase">INR</span></div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">Features</p>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm font-medium text-slate-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand mt-1.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <Link 
                  href="/contact" 
                  className="btn-base btn-primary w-full justify-center py-4 rounded-2xl text-xs font-bold uppercase tracking-widest shadow-lg shadow-brand/20"
                >
                  Start Project
                </Link>
                <Link 
                  href={`/billing?plan=${plan.id}`}
                  className="btn-base w-full justify-center py-4 rounded-2xl text-xs font-bold uppercase tracking-widest bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}