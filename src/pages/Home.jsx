import Hero from "../components/Hero";
import Services from "../components/Services";
import CTA from "../components/CTA";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const WhyChooseUs = () => (
  <section className="py-16 md:py-32 px-6 glass border-y border-white/5 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-purple/5 -z-10" />
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
      <div>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-heading mb-8 leading-tight text-white">
          Reliable Fast <br /> & Affordable.
        </h2>
        <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-12">
          GRIWD is driven by innovation and a commitment to excellence. We are more than just a service provider — we are a <span className="text-white font-bold">trusted partner</span> for businesses seeking dependable technology.
        </p>
        <div className="grid grid-cols-2 gap-6 md:gap-8">
          {[
            { n: '100%', t: 'Quality' },
            { n: '24/7', t: 'Support' },
            { n: '500+', t: 'Projects' },
            { n: '10+', t: 'Experts' },
          ].map((stat) => (
            <div key={stat.t}>
              <div className="text-3xl md:text-4xl font-heading text-brand-blue mb-1">{stat.n}</div>
              <div className="text-[10px] md:text-sm font-black tracking-widest uppercase text-slate-500">{stat.t}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-purple blur-[100px] opacity-20" />
        <div className="p-8 md:p-12 glass rounded-[2rem] md:rounded-[3rem] relative border-white/10">
          <h3 className="text-xl md:text-2xl font-heading mb-6 text-white">Our Core Commitment</h3>
          <p className="text-slate-300 leading-relaxed mb-8 text-base md:text-lg italic">
            "Everything works together seamlessly. We bridge the gap between your technical requirements and creative ambitions."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white overflow-hidden flex items-center justify-center p-2 shadow-lg">
              <img src={logo} alt="GRIWD" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="font-heading text-white">Team GRIWD</div>
              <div className="text-xs text-brand-blue font-black uppercase tracking-tighter">Technology Partners</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Services />
      <WhyChooseUs />
      <CTA />
    </div>
  );
}
