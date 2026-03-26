import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Globe } from "lucide-react";
import IdeaBulb from "./IdeaBulb";
import logo from "../assets/logo.png";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row justify-center items-center px-6 lg:px-20 relative pt-32 overflow-hidden bg-mesh-gradient">
      
      {/* Dynamic Glow Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[150px] animate-float" />

      <div className="flex-1 text-left z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 glass text-brand-blue font-bold text-xs tracking-[0.2em] uppercase"
        >
          <motion.img 
            src={logo} 
            alt="GRIWD" 
            className="w-5 h-5 object-contain"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          Zimbabwe's Premium Tech Partner
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl sm:text-7xl md:text-[8.5rem] font-heading mb-12 leading-[1] md:leading-[0.8] tracking-[-0.05em] text-white"
        >
          CONNECTED <br />
          <span className="text-white/20">INTELLIGENCE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-slate-400 max-w-xl text-lg md:text-2xl leading-relaxed mb-16 font-medium"
        >
          We orchestrate elite IT infrastructure and <span className="text-white font-bold">high-end graphics</span> for the digital era.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row gap-8 items-center md:items-start"
        >
          <Link 
            to="/contact" 
            className="group relative px-12 py-6 rounded-3xl bg-brand-blue text-white font-heading text-xl hover:bg-white hover:text-brand-blue transition-all duration-500 shadow-xl shadow-brand-blue/20"
          >
            <span className="relative z-10 flex items-center gap-3">
              Start Your Project <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </span>
          </Link>

          <Link 
            to="/graphics" 
            className="px-12 py-6 rounded-3xl glass border-white/10 font-heading text-xl text-white hover:bg-white/5 transition-all flex items-center gap-3"
          >
            <Globe size={24} className="text-brand-blue" /> View Solutions
          </Link>
        </motion.div>
      </div>

      <div className="flex-1 relative mt-20 lg:mt-0 flex justify-center items-center scale-75 md:scale-100">
        <IdeaBulb />
      </div>

      {/* Decorative Bottom Mesh */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-light/10 to-transparent" />
      
      {/* Floating Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-deep/50 to-transparent" />
      </div>

    </section>
  );
}
