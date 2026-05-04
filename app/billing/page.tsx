"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CreditCard, QrCode, ShieldCheck, ChevronRight, Lock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import NextImage from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const PLAN_DATA = {
  starter: { name: "Starter Pack", price: "₹19,999", details: "MVP or small feature development" },
  professional: { name: "Professional Pack", price: "₹29,999", details: "Complete MVP or SaaS application" },
  business: { name: "Business Pack", price: "₹49,999", details: "Full product development" },
};

function BillingContent() {
  const searchParams = useSearchParams();
  const [method, setMethod] = useState("qr");
  const [orderId, setOrderId] = useState("");
  const [isGenerating, setIsGenerating] = useState(true);

  const planKey = searchParams.get("plan") as keyof typeof PLAN_DATA;
  const currentPlan = PLAN_DATA[planKey] || PLAN_DATA.professional;

  useEffect(() => {
    setOrderId(`ORD-${Math.floor(100000 + Math.random() * 900000)}`);
    const timer = setTimeout(() => setIsGenerating(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#fcfdfe] pb-24 pt-12 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -left-[10%] top-0 h-[500px] w-[500px] rounded-full bg-blue-50/50 blur-[120px]" />
        <div className="absolute -right-[5%] bottom-0 h-[400px] w-[400px] rounded-full bg-indigo-50/30 blur-[100px]" />
      </div>

      <Container className="relative z-10 max-w-6xl">
        <nav className="mb-10 flex items-center justify-between">
          <Link href="/#pricing" className="group flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-slate-900">
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to Plans
          </Link>
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <Lock size={12} />
            SSL Encrypted
          </div>
        </nav>

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h1 className="mb-2 text-4xl font-bold tracking-tight text-slate-900">Review & Pay</h1>
              <p className="mb-12 text-slate-500">Securely finalize your {currentPlan.name} subscription.</p>
            </Reveal>

            <div className="space-y-10">
              <section>
                <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-slate-400">01. Payment Method</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <button 
                    onClick={() => setMethod("qr")}
                    className={`group relative flex items-center gap-4 rounded-3xl border-2 p-6 transition-all duration-300 ${
                      method === "qr" ? "border-brand bg-white shadow-xl ring-1 ring-brand" : "border-slate-100 bg-white/50 hover:border-slate-200"
                    }`}
                  >
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 ${method === "qr" ? "bg-brand text-white" : "bg-slate-100 text-slate-400"}`}>
                      <QrCode size={22} />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-slate-900">Instant QR</p>
                      <p className="text-[11px] text-slate-400">Scan via any UPI App</p>
                    </div>
                  </button>

                  <button 
                    onClick={() => setMethod("razorpay")}
                    className={`group relative flex items-center gap-4 rounded-3xl border-2 p-6 transition-all duration-300 ${
                      method === "razorpay" ? "border-brand bg-white shadow-xl ring-1 ring-brand" : "border-slate-100 bg-white/50 hover:border-slate-200"
                    }`}
                  >
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 ${method === "razorpay" ? "bg-brand text-white" : "bg-slate-100 text-slate-400"}`}>
                      <CreditCard size={22} />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-slate-900">Razorpay</p>
                      <p className="text-[11px] text-slate-400">Cards, UPI, Netbanking</p>
                    </div>
                  </button>
                </div>
              </section>

              <section className="rounded-[2.5rem] bg-white p-10 shadow-2xl border border-slate-50">
                {method === "qr" ? (
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-8 rounded-[2rem] bg-slate-50 p-8 ring-1 ring-slate-200/50">
                      <div className="relative flex h-52 w-52 items-center justify-center rounded-xl bg-white p-4 shadow-sm overflow-hidden">
                        <div className={`transition-all duration-1000 ${isGenerating ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'}`}>
                           <NextImage src="/favicon/qrpay.png" alt="Payment QR" width={180} height={180} className="object-contain" />
                        </div>
                        {isGenerating && (
                          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/90">
                            <div className="relative h-12 w-12 mb-3">
                              <div className="absolute inset-0 rounded-full border-2 border-slate-100" />
                              <div className="absolute inset-0 rounded-full border-t-2 border-brand animate-spin" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-brand animate-pulse">Generating Secure Code...</span>
                          </div>
                        )}
                        <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden">
                           <div className="h-full w-full bg-gradient-to-b from-brand/20 to-transparent animate-reveal-scan" />
                        </div>
                      </div>
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-slate-900">Scan to pay {currentPlan.price}</h3>
                    <p className="text-sm text-slate-500 max-w-xs">Open your preferred UPI app and scan the code above.</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-brand">
                      <ShieldCheck size={40} strokeWidth={1.5} />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-slate-900">Secure Payment</h3>
                    <p className="mb-8 max-w-xs text-sm leading-relaxed text-slate-500">Redirecting to Razorpay gateway to complete payment of {currentPlan.price}.</p>
                    <button className="group flex w-full max-w-sm items-center justify-center gap-2 rounded-2xl bg-slate-900 py-5 text-sm font-bold text-white transition-all hover:bg-slate-800 active:scale-95">
                      Proceed to Gateway
                      <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                )}
              </section>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="sticky top-28">
              <div className="rounded-[2.5rem] border border-white bg-white/70 p-10 backdrop-blur-2xl shadow-xl">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-xl font-bold text-slate-900">Summary</h2>
                  <div className="flex flex-col items-end">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Order Reference</span>
                    <span className="text-xs font-mono font-bold text-slate-600">{orderId}</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-slate-900">{currentPlan.name}</p>
                      <p className="text-[11px] text-slate-400 uppercase tracking-widest mt-1">{currentPlan.details}</p>
                    </div>
                    <p className="font-bold text-slate-900">{currentPlan.price}</p>
                  </div>
                  <div className="h-[1px] w-full bg-slate-100" />
                  <div className="space-y-3">
                    <div className="flex justify-between text-xs font-medium text-slate-500">
                      <span>Service Status</span>
                      <span className="text-brand font-bold text-[10px] uppercase">Active Session</span>
                    </div>
                    <div className="flex justify-between text-xs font-medium text-slate-500">
                      <span>Taxes (GST)</span>
                      <span className="text-slate-900 font-bold">Inclusive</span>
                    </div>
                  </div>
                  <div className="mt-8 rounded-3xl bg-slate-900 p-7 text-white shadow-xl relative overflow-hidden">
                    <div className="relative z-10">
                       <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Amount Payable</p>
                       <div className="flex items-baseline gap-2">
                         <span className="text-4xl font-black tracking-tighter">{currentPlan.price}</span>
                         <span className="text-xs text-slate-500 font-medium">INR</span>
                       </div>
                    </div>
                    <div className="absolute -right-4 -bottom-4 h-20 w-20 rounded-full bg-white/5 blur-2xl" />
                  </div>
                </div>
                <div className="mt-10 flex items-center justify-center gap-6">
                  <NextImage src="/logo.png" alt="Logo" width={80} height={20} className="opacity-30 grayscale" />
                  <div className="h-4 w-[1px] bg-slate-200" />
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Verified Invoice</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
      <style jsx global>{`
        @keyframes revealScan {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        .animate-reveal-scan { animation: revealScan 2.5s cubic-bezier(0.45, 0, 0.55, 1) forwards; }
        .blur-sm { filter: blur(8px); }
        .scale-95 { transform: scale(0.95); }
      `}</style>
    </main>
  );
}

export default function BillingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BillingContent />
    </Suspense>
  );
}