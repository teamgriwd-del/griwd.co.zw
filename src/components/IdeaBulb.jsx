import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

export default function IdeaBulb({ hiddenLabels = [], scale = 1 }) {
  const orbits = [
    { color: "bg-brand-blue", size: "w-4 h-4", distance: "120px", anim: "animate-orbit-1", label: "Tech" },
    { color: "bg-brand-green", size: "w-5 h-5", distance: "160px", anim: "animate-orbit-2", label: "Repairs" },
    { color: "bg-brand-orange", size: "w-6 h-6", distance: "200px", anim: "animate-orbit-3", label: "Graphics" },
    { color: "bg-brand-purple", size: "w-4 h-4", distance: "240px", anim: "animate-orbit-4", label: "Web" },
    { color: "bg-brand-red", size: "w-5 h-5", distance: "280px", anim: "animate-orbit-5", label: "CTA" },
  ];

  const visibleOrbits = orbits.filter(orbit => !hiddenLabels.includes(orbit.label));

  return (
    <div 
      className="relative flex items-center justify-center w-[600px] h-[600px]"
      style={{ transform: `scale(${scale})` }}
    >
      {/* Central Lightbulb */}
      <motion.div
        animate={{ 
          scale: [1, 1.05, 1],
          filter: [
            "drop-shadow(0 0 30px rgba(253, 224, 71, 0.3))", 
            "drop-shadow(0 0 70px rgba(253, 224, 71, 0.7))", 
            "drop-shadow(0 0 30px rgba(253, 224, 71, 0.3))"
          ]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="relative z-20 bg-white/10 p-8 rounded-full backdrop-blur-xl border border-white/20 shadow-2xl"
      >
        <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-2xl animate-pulse" />
        <Lightbulb size={80} className="relative z-10 text-yellow-400 fill-yellow-400/30" />
      </motion.div>

      {/* Orbiting Planets */}
      {visibleOrbits.map((orbit, i) => (
        <div
          key={orbit.label}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ "--orbit-distance": orbit.distance }}
        >
          {/* Orbit Path */}
          <div 
            className="absolute border border-white/5 rounded-full" 
            style={{ width: `calc(${orbit.distance} * 2)`, height: `calc(${orbit.distance} * 2)` }}
          />
          
          {/* Planet */}
          <div className={`absolute ${orbit.size} ${orbit.color} rounded-full shadow-lg ${orbit.anim} pointer-events-auto group`}>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap font-bold uppercase tracking-widest">
              {orbit.label}
            </div>
            <div className={`absolute inset-0 rounded-full blur-md ${orbit.color} opacity-50`} />
          </div>
        </div>
      ))}

      {/* Background Glow */}
      <div className="absolute inset-0 bg-brand-blue/5 rounded-full blur-[100px] animate-pulse-slow" />
    </div>
  );
}
