import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Palette, Cpu, Globe, Laptop, Wifi, ArrowUpRight } from "lucide-react";

const services = [
  { 
    title: "Graphics", 
    color: "from-brand-orange to-brand-red",
    icon: Palette,
    path: "/graphics",
    span: "md:col-span-2",
    desc: "Exquisite branding, creative visuals, and elite graphic solutions that define your identity."
  },
  { 
    title: "Repairs", 
    color: "from-brand-green to-brand-blue",
    icon: Cpu,
    path: "/repairs",
    span: "md:col-span-1",
    desc: "System optimization and hardware excellence for peak performance."
  },
  { 
    title: "Internet", 
    color: "from-brand-blue to-brand-purple",
    icon: Wifi,
    path: "/internet",
    span: "md:col-span-1",
    desc: "Seamless connectivity, elite networking, and high-speed internet solutions."
  },
  { 
    title: "Web Innovation", 
    color: "from-brand-purple to-brand-red",
    icon: Laptop,
    path: "/web-dev",
    span: "md:col-span-2",
    desc: "Next-gen web development, premium hosting, and innovative digital experiences."
  },
];

export default function Services() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-brand-blue font-black tracking-widest text-xs uppercase mb-6"
          >
            Digital Orchestration
          </motion.div>
          <h2 className="text-5xl md:text-8xl font-heading tracking-tight leading-tight text-white">
            Premium <br /> Multi-Service <br /> <span className="text-white/20">Excellence.</span>
          </h2>
        </div>
        <p className="text-slate-400 text-xl max-w-sm leading-relaxed mb-4">
          We've refined our offerings into an <span className="text-white font-bold">elite ecosystem</span> of technical and creative services.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`group transition-all duration-700 relative overflow-hidden flex flex-col justify-between ${service.span}`}
          >
            <Link 
              to={service.path}
              className="block p-10 rounded-[3.5rem] glass border-white/5 group-hover:border-white/20 transition-all duration-700 min-h-[450px] relative h-full w-full"
            >
              <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-[100px] transition-opacity duration-700`} />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className={`w-24 h-24 rounded-[2.5rem] bg-gradient-to-br ${service.color} flex items-center justify-center mb-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500`}>
                    <service.icon className="text-white" size={48} />
                  </div>

                  <h3 className="text-4xl md:text-5xl font-heading mb-6 tracking-tight text-white">{service.title}</h3>
                  <p className="text-slate-400 text-xl leading-relaxed max-w-[90%]">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-12 flex justify-between items-end">
                  <span className="text-sm font-black tracking-[0.3em] uppercase text-white/40 group-hover:text-white transition-colors flex items-center gap-6">
                    Explore <div className="w-16 h-[2px] bg-white/10 group-hover:bg-brand-blue transition-all" />
                  </span>
                  <ArrowUpRight className="text-white/20 group-hover:text-brand-blue group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" size={40} />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
