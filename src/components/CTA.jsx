import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-40 px-6 text-center overflow-hidden relative">
      {/* Sun Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/20 blur-[180px] -z-10 animate-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-orange/10 blur-[120px] -z-10" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="inline-block px-6 py-2 rounded-full border border-brand-red/20 text-brand-red font-black text-xs tracking-[0.3em] uppercase mb-8"
        >
          Final Destination
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-[9rem] font-heading mb-12 tracking-[-0.05em] leading-[0.8] text-white"
        >
          CRAFT YOUR <br />
          <span className="text-brand-red drop-shadow-[0_0_30px_rgba(220,38,38,0.4)]">FUTURE.</span>
        </motion.h2>

        <p className="text-slate-400 text-xl md:text-2xl mb-16 max-w-xl mx-auto font-medium leading-relaxed">
          Ready to elevate your digital presence or optimize your IT systems? We're here to <span className="text-white font-bold">help you succeed.</span>
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-10 items-center">
          <Link 
            to="/contact" 
            className="group relative px-16 py-8 rounded-[2.5rem] bg-brand-red text-white font-heading text-2xl hover:bg-white hover:text-brand-red transition-all duration-700 shadow-[0_20px_60px_rgba(220,38,38,0.4)]"
          >
            <span className="relative z-10">Get a Free Quote</span>
          </Link>
          <a
            href="mailto:teamgriwd@gmail.com"
            className="text-xl font-heading text-white border-b-4 border-brand-red/30 hover:border-brand-red transition-all py-2"
          >
            Contact Sales
          </a>

        </div>
      </div>
    </section>
  );
}
