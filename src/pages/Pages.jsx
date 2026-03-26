import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Palette, Cpu, Wifi, Laptop, Globe, CheckCircle2, 
  Layers, Database, HardDrive, Smartphone, Zap, 
  Send, Mail, Phone, MapPin, X, ChevronLeft, ChevronRight 
} from "lucide-react";
import IdeaBulb from "../components/IdeaBulb";

// Gallery Imports
import logo from "../assets/logo.webp";
import AddyFinal from "../assets/ADDY-FINAL.webp";
import AfricaDay from "../assets/AFRICA DAY FUNDRAISER-FINAL CONCEPT 1-.webp";
import Aluminium from "../assets/ALUMINIU.webp";
import ArnoldGriwd from "../assets/ARNOLD@GRIWD5.webp";
import Barkhausen from "../assets/BARKHAUSEN ENTERPRISES LOGOv1.webp";
import Bhakhauzeni from "../assets/BHAKHAUZENI ELECTRONICS-CCTV.webp";
import BlissfulBites from "../assets/BLISSFUL BITES FLYER PRICES.webp";
import Certificate1 from "../assets/CERTIFICATE-YOUTH-FUN-DAY-VERSION-1-FINAL.webp";
import GriwdPromotional from "../assets/GRIWD-PROMOTIONAL FLYER.webp";
import KKAutoparts from "../assets/K&K AUTOPARTS FINA.webp";
import LanarWig from "../assets/LANAR WIG FINAL.webp";
import MamboDotNet from "../assets/MAMBODOTNET BASE50.webp";
import RulsCakes from "../assets/RUL'S-CAKES&SWEETS FINAL.webp";
import SaloonBarber from "../assets/SALOON AND BARBERfi.webp";
import SamazCarImport from "../assets/SAMAZ CAR IMPORT FINAL FLYER.webp";
import SmartFresh from "../assets/SMART-FRESH-PESTS CONTROL AND FUMIGATION.webp";
import AlphaRest from "../assets/THE ALPHA REST.webp";
import ValsFlyer from "../assets/vals flyer.webp";

// Repair Gallery Imports
import R1 from "../assets/repair images/14d1bcacbc80ab167f1715ff73e05b21.webp";
import R2 from "../assets/repair images/33005e5979c705d611fddcf30ff15333.webp";
import R3 from "../assets/repair images/4f8cf92eba36d56de3b06a57e607ff68.webp";
import R4 from "../assets/repair images/52261c44a19f55491246378b032bcba1.webp";
import R5 from "../assets/repair images/5538a11066e23d568701afa36d27862f.webp";
import R6 from "../assets/repair images/793c1c1a19a9c59562260cce592a79f4.webp";
import R7 from "../assets/repair images/84e7b4c258c76c4ddd09cfee88477b57.webp";
import R8 from "../assets/repair images/97cbbc09be6dfae17b4b1c1fbf52621c.webp";
import R9 from "../assets/repair images/9bd61830783799bd177ff580c772b623.webp";
import R10 from "../assets/repair images/9c4b012e9d1b7205b07057da1d311ea8.webp";
import R11 from "../assets/repair images/b92f47205785136ecdc2bb0c294631c4.webp";
import R12 from "../assets/repair images/ce11ff2c5b394ef4ac776747065f5303.webp";

const galleryImages = [
  AddyFinal, AfricaDay, Aluminium, ArnoldGriwd, Barkhausen, Bhakhauzeni,
  BlissfulBites, Certificate1, GriwdPromotional, KKAutoparts, LanarWig,
  MamboDotNet, RulsCakes, SaloonBarber, SamazCarImport, SmartFresh,
  AlphaRest, ValsFlyer
];

const repairGalleryImages = [R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12];

// Internet Gallery Imports
import I1 from "../assets/internet images/20251214_083811.webp";
import I2 from "../assets/internet images/20251214_083852.webp";
import I3 from "../assets/internet images/20251214_095031.webp";
import I4 from "../assets/internet images/20251214_114550.webp";
import I5 from "../assets/internet images/20251223_182610.webp";
import I6 from "../assets/internet images/20251226_184548.webp";
import I7 from "../assets/internet images/20260101_153935.webp";
import I8 from "../assets/internet images/20260321_113507.webp";
import I9 from "../assets/internet images/20260321_113749.webp";
import I10 from "../assets/internet images/20260322_132859.webp";
import V1 from "../assets/internet images/20251208_101420.mp4";
import V2 from "../assets/internet images/20251214_095006.mp4";
import V3 from "../assets/internet images/20251214_104012.mp4";
import V4 from "../assets/internet images/20251214_105008.mp4";
import V5 from "../assets/internet images/20260109_184503.mp4";
import V6 from "../assets/internet images/VID_20260322_105228AM.mp4";

const internetGalleryItems = [
  { type: 'image', src: I1 },
  { type: 'video', src: V1 },
  { type: 'image', src: I2 },
  { type: 'video', src: V2 },
  { type: 'image', src: I3 },
  { type: 'video', src: V3 },
  { type: 'image', src: I4 },
  { type: 'video', src: V4 },
  { type: 'image', src: I5 },
  { type: 'video', src: V5 },
  { type: 'image', src: I6 },
  { type: 'video', src: V6 },
  { type: 'image', src: I7 },
  { type: 'image', src: I8 },
  { type: 'image', src: I9 },
  { type: 'image', src: I10 },
];

// About Gallery Imports
import A1 from "../assets/about images/20250905_170038.webp";
import A2 from "../assets/about images/20251008_141130.webp";
import A3 from "../assets/about images/20251027_082140.webp";
import A4 from "../assets/about images/20260224_182600[1].webp";
import A5 from "../assets/about images/GRIWD REBRANDED.webp";

const aboutGalleryImages = [A1, A2, A3, A4, A5];

const PageLayout = ({ title, children, colorClass = "from-brand-blue to-brand-purple", subtitle, hiddenCircles = [] }) => (
  <div className="pt-32 md:pt-48 pb-16 md:pb-32 px-6 min-h-screen bg-brand-light relative overflow-hidden">
    {/* Background Decorative Elements */}
    <div className={`absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-br ${colorClass} opacity-[0.05] blur-[100px] md:blur-[150px] -z-10`} />
    
    {/* Background Animation - Lowered to not hinder nav tiles */}
    <div className="absolute top-40 -right-20 opacity-30 z-0 pointer-events-none scale-75 md:scale-100">
      <IdeaBulb hiddenLabels={hiddenCircles} scale={1.2} />
    </div>

    <div className="max-w-7xl mx-auto relative z-10">
      <div className="mb-12 md:mb-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-brand-blue font-black tracking-[0.3em] uppercase text-[10px] md:text-xs mb-6"
        >
          GRIWD Solutions
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-6xl md:text-[10rem] font-heading leading-[1] md:leading-[0.8] tracking-[-0.06em] mb-8 md:mb-12 text-white"
        >
          {title.toUpperCase()}
        </motion.h1>
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg md:text-2xl max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
      {children}
    </div>
  </div>
);

export const About = () => {
  const [selectedIdx, setSelectedIdx] = useState(null);

  const nextImg = (e) => {
    e?.stopPropagation();
    setSelectedIdx((prev) => (prev + 1) % aboutGalleryImages.length);
  };

  const prevImg = (e) => {
    e?.stopPropagation();
    setSelectedIdx((prev) => (prev - 1 + aboutGalleryImages.length) % aboutGalleryImages.length);
  };

  return (
    <PageLayout 
      title="The Team" 
      subtitle="GRIWD exists at the intersection of elite technology and creative mastery." 
      hiddenCircles={[]}
    >
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="space-y-8 md:space-y-12">
          <p className="text-slate-300 text-lg md:text-2xl leading-relaxed">
            We are more than a service provider. GRIWD is a <span className="text-white font-bold">dynamic engine</span> of innovation, bridging the gap between technical requirements and creative ambitions.
          </p>
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            {[
              { n: '100%', t: 'Precision' },
              { n: 'Elite', t: 'Design' },
              { n: '24/7', t: 'Support' },
              { n: 'Pro', t: 'Systems' },
            ].map((stat) => (
              <div key={stat.t}>
                <div className="text-3xl md:text-4xl font-heading text-brand-blue mb-1">{stat.n}</div>
                <div className="text-[10px] md:text-xs font-black tracking-widest uppercase text-slate-500">{stat.t}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-8 md:p-16 glass rounded-[2.5rem] md:rounded-[4rem] border-white/5 relative group">
          <div className="absolute inset-0 bg-brand-blue/5 rounded-[2.5rem] md:rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <h3 className="text-2xl md:text-3xl font-heading mb-6 md:mb-8 text-white">Our Pulse</h3>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8 md:mb-10">
            "To deliver creative and technical solutions that empower businesses through uncompromised reliability."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white flex items-center justify-center overflow-hidden p-2 shadow-xl">
              <img src={logo} alt="GRIWD" className="w-full h-full object-contain" loading="lazy" />
            </div>
            <div>
              <div className="font-heading text-white text-sm md:text-base">GRIWD CORE</div>
              <div className="text-[10px] md:text-xs text-brand-blue font-black uppercase tracking-tighter">Mission Statement</div>
            </div>
          </div>
        </div>
      </div>

      {/* About Gallery Section */}
      <div className="mt-24 md:mt-48">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-heading text-white mb-6 uppercase tracking-tighter">Our Journey</h2>
          <div className="w-24 md:w-32 h-2 bg-brand-blue" />
          <p className="text-slate-400 text-lg md:text-2xl mt-8 max-w-2xl">A glimpse into the elite craftsmanship and moments that define GRIWD.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutGalleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedIdx(i)}
              className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-slate-900 border border-white/5 cursor-pointer"
            >
              <img src={img} alt="About Moment" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-8 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                 <div className="w-12 h-12 rounded-2xl bg-brand-blue flex items-center justify-center text-white mb-4">
                    <CheckCircle2 size={24} />
                 </div>
                 <div className="text-xs font-black uppercase tracking-[0.2em] text-brand-blue mb-1">GRIWD CULTURE</div>
                 <div className="text-xl font-heading text-white">Elite Moment</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIdx(null)}
            className="fixed inset-0 z-[100] bg-brand-light/95 backdrop-blur-2xl flex items-center justify-center p-6 md:p-12 cursor-zoom-out"
          >
            <button onClick={prevImg} className="absolute left-8 z-[110] p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-brand-blue hover:border-brand-blue transition-all duration-500 group">
              <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button onClick={nextImg} className="absolute right-8 z-[110] p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-brand-blue hover:border-brand-blue transition-all duration-500 group">
              <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelectedIdx(null)} className="absolute -top-16 right-0 text-white hover:text-brand-blue transition-colors flex items-center gap-2 group uppercase font-black tracking-widest text-xs">
                Close <X size={24} className="group-hover:rotate-90 transition-transform" />
              </button>
              
              <motion.img 
                key={selectedIdx}
                src={aboutGalleryImages[selectedIdx]} 
                alt="Expanded view" 
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, { offset }) => {
                  if (offset.x < -100) nextImg();
                  else if (offset.x > 100) prevImg();
                }}
                className="max-w-full max-h-full object-contain rounded-3xl shadow-2xl shadow-brand-blue/10 border border-white/5 cursor-grab active:cursor-grabbing"
              />

              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
                {aboutGalleryImages.map((_, idx) => (
                  <div key={idx} className={`h-1 transition-all duration-500 rounded-full ${idx === selectedIdx ? 'w-8 bg-brand-blue' : 'w-2 bg-white/20'}`} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
};

export const Graphics = () => {
  const [selectedIdx, setSelectedIdx] = useState(null);

  const nextImg = (e) => {
    e?.stopPropagation();
    setSelectedIdx((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImg = (e) => {
    e?.stopPropagation();
    setSelectedIdx((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <PageLayout 
      title="Design" 
      subtitle="High-end visuals that define your identity." 
      colorClass="from-brand-orange to-brand-red"
      hiddenCircles={["Graphics"]}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { t: 'Identity Branding', d: 'Comprehensive brand kits, logos, and visual guidelines.', icon: Layers },
          { t: 'Premium Posters', d: 'Elite flyer and poster designs for events and marketing.', icon: Palette },
          { t: 'Digital Assets', d: 'Social media graphics and interactive digital content.', icon: Smartphone },
          { t: 'Print Media', d: 'Banners, business cards, and high-quality print solutions.', icon: Layers },
          { t: 'Event Design', d: 'Wedding cards, certificates, and bespoke event visuals.', icon: Palette },
          { t: 'Creative Direction', d: 'Consultation on your visual strategy and brand voice.', icon: Zap },
        ].map((item, i) => (
          <motion.div 
            key={item.t}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-8 md:p-12 glass rounded-[2.5rem] md:rounded-[3rem] group hover:border-brand-orange/30 transition-all duration-700"
          >
            <item.icon className="text-brand-orange mb-6 md:mb-8 group-hover:scale-110 transition-transform w-10 h-10 md:w-12 md:h-12" />
            <h3 className="text-2xl md:text-3xl font-heading mb-4 text-white">{item.t}</h3>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">{item.d}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-48">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <h2 className="text-5xl md:text-7xl font-heading text-white mb-6 uppercase tracking-tighter">Premium Showcase</h2>
          <div className="w-32 h-2 bg-brand-orange" />
          <p className="text-slate-400 text-2xl mt-8 max-w-2xl">A curated collection of our most exquisite visual creations.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedIdx(i)}
              className="group relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-slate-900 border border-white/5 cursor-pointer"
            >
              <img src={img} alt="Premium Work" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-light via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-8 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                 <div className="w-12 h-12 rounded-2xl bg-brand-orange flex items-center justify-center text-white mb-4">
                    <Palette size={24} />
                 </div>
                 <div className="text-xs font-black uppercase tracking-[0.2em] text-brand-orange mb-1">GRIWD DESIGN</div>
                 <div className="text-xl font-heading text-white">Project Showcase</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIdx(null)}
            className="fixed inset-0 z-[100] bg-brand-light/95 backdrop-blur-2xl flex items-center justify-center p-6 md:p-12 cursor-zoom-out"
          >
            <button onClick={prevImg} className="absolute left-8 z-[110] p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-brand-orange hover:border-brand-orange transition-all duration-500 group">
              <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button onClick={nextImg} className="absolute right-8 z-[110] p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-brand-orange hover:border-brand-orange transition-all duration-500 group">
              <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelectedIdx(null)} className="absolute -top-16 right-0 text-white hover:text-brand-orange transition-colors flex items-center gap-2 group uppercase font-black tracking-widest text-xs">
                Close <X size={24} className="group-hover:rotate-90 transition-transform" />
              </button>
              <motion.img 
                key={selectedIdx}
                src={galleryImages[selectedIdx]} 
                alt="Expanded view" 
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, { offset }) => {
                  if (offset.x < -100) nextImg();
                  else if (offset.x > 100) prevImg();
                }}
                className="max-w-full max-h-full object-contain rounded-3xl shadow-2xl shadow-brand-orange/10 border border-white/5 cursor-grab active:cursor-grabbing"
              />
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
                {galleryImages.map((_, idx) => (
                  <div key={idx} className={`h-1 transition-all duration-500 rounded-full ${idx === selectedIdx ? 'w-8 bg-brand-orange' : 'w-2 bg-white/20'}`} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
};

export const Repairs = () => {
  const [selectedIdx, setSelectedIdx] = useState(null);

  const nextImg = (e) => {
    e?.stopPropagation();
    setSelectedIdx((prev) => (prev + 1) % repairGalleryImages.length);
  };

  const prevImg = (e) => {
    e?.stopPropagation();
    setSelectedIdx((prev) => (prev - 1 + repairGalleryImages.length) % repairGalleryImages.length);
  };

  return (
    <PageLayout 
      title="Systems" 
      subtitle="System optimization and hardware excellence." 
      colorClass="from-brand-green to-brand-blue"
      hiddenCircles={["Graphics", "Repairs"]}
    >
      <div className="grid md:grid-cols-2 gap-6 md:gap-10">
        {[
          { t: "Elite Data Recovery", d: "Recovering your most critical data from Hard Drives, SSDs, and Flash storage with precision.", icon: Database },
          { t: "Hardware Upgrades", d: "Turbocharging your systems with high-performance RAM and NVMe SSD installations.", icon: HardDrive },
          { t: "OS Optimization", d: "Clean, elite installations of Windows and MacOS tailored for your specific needs.", icon: Cpu },
          { t: "Performance Tuning", d: "In-depth system diagnosis and optimization to eliminate bottlenecks.", icon: Zap }
        ].map((item, i) => (
          <motion.div 
            key={item.t}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-8 md:p-16 glass rounded-[2.5rem] md:rounded-[4rem] group hover:border-brand-green/30 transition-all duration-700"
          >
            <div className="flex justify-between items-start mb-6 md:mb-10">
              <item.icon className="text-brand-green w-10 h-10 md:w-14 md:h-14" />
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center font-heading text-white/20 group-hover:text-brand-green group-hover:border-brand-green/50 transition-all text-sm md:text-base">
                0{i+1}
              </div>
            </div>
            <h3 className="text-2xl md:text-4xl font-heading mb-4 md:mb-6 text-white">{item.t}</h3>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed">{item.d}</p>
          </motion.div>
        ))}
      </div>

      {/* Repair Gallery Section */}
      <div className="mt-24 md:mt-48">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-heading text-white mb-6 uppercase tracking-tighter">Hardware Lab</h2>
          <div className="w-24 md:w-32 h-2 bg-brand-green" />
          <p className="text-slate-400 text-lg md:text-2xl mt-8 max-w-2xl">Behind the scenes of our elite system optimizations and precision repairs.</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {repairGalleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedIdx(i)}
              className="group relative aspect-square overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-slate-900 border border-white/5 cursor-pointer"
            >
              <img src={img} alt="Repair Work" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-6 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                 <div className="w-10 h-10 rounded-xl bg-brand-green flex items-center justify-center text-white mb-3">
                    <Cpu size={20} />
                 </div>
                 <div className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-green mb-1">GRIWD SYSTEMS</div>
                 <div className="text-lg font-heading text-white">Lab Session</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIdx(null)}
            className="fixed inset-0 z-[100] bg-brand-light/95 backdrop-blur-2xl flex items-center justify-center p-6 md:p-12 cursor-zoom-out"
          >
            <button onClick={prevImg} className="absolute left-8 z-[110] p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-brand-green hover:border-brand-green transition-all duration-500 group">
              <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button onClick={nextImg} className="absolute right-8 z-[110] p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-brand-green hover:border-brand-green transition-all duration-500 group">
              <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelectedIdx(null)} className="absolute -top-16 right-0 text-white hover:text-brand-green transition-colors flex items-center gap-2 group uppercase font-black tracking-widest text-xs">
                Close <X size={24} className="group-hover:rotate-90 transition-transform" />
              </button>
              <motion.img 
                key={selectedIdx}
                src={repairGalleryImages[selectedIdx]} 
                alt="Expanded view" 
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, { offset }) => {
                  if (offset.x < -100) nextImg();
                  else if (offset.x > 100) prevImg();
                }}
                className="max-w-full max-h-full object-contain rounded-3xl shadow-2xl shadow-brand-green/10 border border-white/5 cursor-grab active:cursor-grabbing"
              />
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
                {repairGalleryImages.map((_, idx) => (
                  <div key={idx} className={`h-1 transition-all duration-500 rounded-full ${idx === selectedIdx ? 'w-8 bg-brand-green' : 'w-2 bg-white/20'}`} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
};

export const Networking = () => (
  <PageLayout 
    title="Networks" 
    subtitle="Structuring the backbone of your digital infrastructure." 
    colorClass="from-brand-blue to-brand-purple"
    hiddenCircles={["Tech"]}
  >
    <div className="p-8 md:p-20 glass rounded-[2.5rem] md:rounded-[5rem] border-white/5 group relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-brand-blue/10 blur-[80px] md:blur-[120px] -z-10" />
      <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-heading mb-6 md:mb-10 text-white leading-tight">Elite Connectivity Solutions</h2>
          <p className="text-slate-400 text-lg md:text-2xl leading-relaxed mb-8 md:mb-12">We provide complete, structured networking for modern homes and elite business environments.</p>
          <div className="space-y-4 md:space-y-6">
            {[
              'Structured Network Installation',
              'Starlink Installation & Optimization',
              'Advanced Cable Terminations',
              'Enterprise-Grade WiFi Coverage'
            ].map(item => (
              <div key={item} className="flex items-center gap-4 text-white text-base md:text-xl font-bold">
                <CheckCircle2 className="text-brand-blue flex-shrink-0" size={20} /> {item}
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="p-8 md:p-12 glass rounded-[2rem] md:rounded-[3rem] border-white/10 text-center">
            <Globe size={80} className="md:size-[120px] mx-auto text-brand-blue mb-6 md:mb-8 animate-pulse-slow" />
            <div className="text-4xl md:text-6xl font-heading text-white mb-2">360°</div>
            <div className="text-brand-blue font-black tracking-widest uppercase text-[10px] md:text-sm">Network Integrity</div>
          </div>
        </div>
      </div>
    </div>
  </PageLayout>
);

export const WebDev = () => (
  <PageLayout 
    title="Innovation" 
    subtitle="Next-gen web development and premium digital experiences." 
    colorClass="from-brand-purple to-brand-red"
    hiddenCircles={["Web"]}
  >
    <div className="grid md:grid-cols-2 gap-6 md:gap-10">
      <div className="p-8 md:p-16 glass rounded-[2.5rem] md:rounded-[4rem] group hover:border-brand-purple/30 transition-all duration-700 shadow-2xl">
        <Laptop className="text-brand-purple mb-6 md:mb-10 w-12 h-12 md:w-16 md:h-16" />
        <h3 className="text-3xl md:text-5xl font-heading mb-4 md:mb-8 text-white">Development</h3>
        <p className="text-slate-400 text-lg md:text-2xl leading-relaxed mb-6 md:mb-10">Modern, ultra-responsive, and fast-loading websites built with cutting-edge tech stacks.</p>
        <div className="h-[2px] w-full bg-white/5 group-hover:bg-brand-purple/30 transition-all" />
      </div>
      <div className="p-8 md:p-16 glass rounded-[2.5rem] md:rounded-[4rem] group hover:border-brand-red/30 transition-all duration-700 shadow-2xl">
        <Mail className="text-brand-red mb-6 md:mb-10 w-12 h-12 md:w-16 md:h-16" />
        <h3 className="text-3xl md:text-5xl font-heading mb-4 md:mb-8 text-white">Ecosystem</h3>
        <p className="text-slate-400 text-lg md:text-2xl leading-relaxed mb-6 md:mb-10">Reliable elite hosting and professional business email solutions that command respect.</p>
        <div className="h-[2px] w-full bg-white/5 group-hover:bg-brand-red/30 transition-all" />
      </div>
    </div>
  </PageLayout>
);

export const Internet = () => {
  const [selectedIdx, setSelectedIdx] = useState(null);

  const nextImg = (e) => {
    e?.stopPropagation();
    setSelectedIdx((prev) => (prev + 1) % internetGalleryItems.length);
  };

  const prevImg = (e) => {
    e?.stopPropagation();
    setSelectedIdx((prev) => (prev - 1 + internetGalleryItems.length) % internetGalleryItems.length);
  };

  return (
    <PageLayout 
      title="Internet" 
      subtitle="Seamless connectivity for the modern digital era." 
      colorClass="from-brand-blue to-brand-green"
      hiddenCircles={["Tech", "Graphics", "Repairs"]}
    >
      <div className="p-8 md:p-20 glass rounded-[2.5rem] md:rounded-[5rem] text-center relative overflow-hidden shadow-2xl mb-16 md:mb-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-green/5 blur-[100px] md:blur-[150px] -z-10" />
        <h2 className="text-3xl md:text-6xl font-heading text-white mb-8">Connected Everywhere</h2>
        <div className="grid md:grid-cols-3 gap-10 md:gap-16 mt-12 md:mt-24">
          {[
            { icon: Wifi, t: 'WiFi Hotspots', d: 'Elite installation and management of robust hotspot services.' },
            { icon: Globe, t: 'Internet Supply', d: 'High-speed, reliable internet setup for any environment.' },
            { isLogo: true, t: 'Full Coverage', d: 'Expansion of network range to every corner of your premises.' }
          ].map(item => (
            <div key={item.t} className="space-y-4 md:space-y-6">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl md:rounded-3xl bg-white/5 flex items-center justify-center mx-auto text-brand-green shadow-xl overflow-hidden p-3 md:p-4">
                {item.isLogo ? (
                  <img src={logo} alt="GRIWD" className="w-full h-full object-contain" loading="lazy" />
                ) : (
                  <item.icon className="size-8 md:size-12" />
                )}
              </div>
              <h4 className="text-2xl md:text-3xl font-heading text-white">{item.t}</h4>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Internet Gallery Section */}
      <div className="mt-24 md:mt-48">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-heading text-white mb-6 uppercase tracking-tighter">Connectivity Deployment</h2>
          <div className="w-24 md:w-32 h-2 bg-brand-blue" />
          <p className="text-slate-400 text-lg md:text-2xl mt-8 max-w-2xl">High-speed infrastructure installations and starlink optimizations across Zimbabwe.</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {internetGalleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedIdx(i)}
              className="group relative aspect-square overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-slate-900 border border-white/5 cursor-pointer"
            >
              {item.type === 'image' ? (
                <img src={item.src} alt="Connectivity Work" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0" loading="lazy" />
              ) : (
                <video src={item.src} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" muted loop playsInline />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-4 md:p-6 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                 <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-brand-blue flex items-center justify-center text-white mb-2 md:mb-3">
                    {item.type === 'image' ? <Globe size={16} /> : <Zap size={16} className="fill-white" />}
                 </div>
                 <div className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-brand-blue mb-1">GRIWD CONNECT</div>
                 <div className="text-sm md:text-lg font-heading text-white">{item.type === 'image' ? 'Site Survey' : 'Active Deployment'}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIdx(null)}
            className="fixed inset-0 z-[100] bg-brand-light/95 backdrop-blur-2xl flex items-center justify-center p-6 md:p-12 cursor-zoom-out"
          >
            <button onClick={prevImg} className="absolute left-8 z-[110] p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-brand-blue hover:border-brand-blue transition-all duration-500 group">
              <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button onClick={nextImg} className="absolute right-8 z-[110] p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-brand-blue hover:border-brand-blue transition-all duration-500 group">
              <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelectedIdx(null)} className="absolute -top-16 right-0 text-white hover:text-brand-blue transition-colors flex items-center gap-2 group uppercase font-black tracking-widest text-xs">
                Close <X size={24} className="group-hover:rotate-90 transition-transform" />
              </button>
              
              {internetGalleryItems[selectedIdx].type === 'image' ? (
                <motion.img 
                  key={`img-${selectedIdx}`}
                  src={internetGalleryItems[selectedIdx].src} 
                  alt="Expanded view" 
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(e, { offset }) => {
                    if (offset.x < -100) nextImg();
                    else if (offset.x > 100) prevImg();
                  }}
                  className="max-w-full max-h-full object-contain rounded-3xl shadow-2xl shadow-brand-blue/10 border border-white/5 cursor-grab active:cursor-grabbing"
                />
              ) : (
                <motion.div
                  key={`vid-${selectedIdx}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <video 
                    src={internetGalleryItems[selectedIdx].src} 
                    controls 
                    autoPlay 
                    className="max-w-full max-h-full rounded-3xl shadow-2xl shadow-brand-blue/10 border border-white/5"
                  />
                </motion.div>
              )}

              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
                {internetGalleryItems.map((_, idx) => (
                  <div key={idx} className={`h-1 transition-all duration-500 rounded-full ${idx === selectedIdx ? 'w-8 bg-brand-blue' : 'w-2 bg-white/20'}`} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
};

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    service: "Graphic Design",
    message: ""
  });
  const [showNumberChoice, setShowNumberChoice] = useState(false);

  const handleWhatsAppSend = (num) => {
    const text = `*New Request via Website*\n\n*Name:* ${formData.name}\n*Service:* ${formData.service}\n*Message:* ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${num}?text=${encodedText}`, '_blank');
    setShowNumberChoice(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowNumberChoice(true);
  };

  return (
    <PageLayout 
      title="Hire Us" 
      subtitle="Let's build your project with exquisite precision." 
      colorClass="from-white to-brand-blue"
      hiddenCircles={["Web", "CTA"]}
    >
      <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
        <div className="relative">
          <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <label className="block text-xs font-black tracking-widest text-slate-500 uppercase mb-4 ml-2">Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/5 rounded-[1.5rem] md:rounded-3xl px-6 md:px-8 py-4 md:py-6 text-white focus:border-brand-blue outline-none transition-all focus:bg-white/10 text-sm md:text-base" 
                  placeholder="Your Name" 
                />
              </div>
              <div>
                <label className="block text-xs font-black tracking-widest text-slate-500 uppercase mb-4 ml-2">Service</label>
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-[1.5rem] md:rounded-3xl px-6 md:px-8 py-4 md:py-6 text-white focus:border-brand-blue outline-none transition-all focus:bg-white/10 appearance-none text-sm md:text-base"
                >
                  <option className="bg-brand-light text-brand-deep">Graphic Design</option>
                  <option className="bg-brand-light text-brand-deep">IT Systems</option>
                  <option className="bg-brand-light text-brand-deep">Networking</option>
                  <option className="bg-brand-light text-brand-deep">Web Innovation</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs font-black tracking-widest text-slate-500 uppercase mb-4 ml-2">Message</label>
              <textarea 
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-white/5 border border-white/5 rounded-[1.5rem] md:rounded-[2rem] px-6 md:px-8 py-4 md:py-6 text-white focus:border-brand-blue outline-none transition-all focus:bg-white/10 h-32 md:h-48 text-sm md:text-base" 
                placeholder="Tell us about your ambitions"
              ></textarea>
            </div>
            <button type="submit" className="group w-full py-6 md:py-8 rounded-[1.5rem] md:rounded-[2rem] bg-brand-blue text-white font-heading text-lg md:text-xl flex items-center justify-center gap-4 hover:bg-white hover:text-brand-blue transition-all duration-500 shadow-2xl shadow-brand-blue/20">
              Send Request <Send size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </form>

          {/* WhatsApp Choice Modal */}
          <AnimatePresence>
            {showNumberChoice && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-brand-light/80 backdrop-blur-xl rounded-[2rem] md:rounded-[4rem]"
              >
                <div className="w-full max-w-sm space-y-4 md:space-y-6 text-center">
                  <h3 className="text-2xl md:text-3xl font-heading text-white">Choose Chat Number</h3>
                  <div className="grid gap-3 md:gap-4">
                    <button 
                      onClick={() => handleWhatsAppSend("263785919439")}
                      className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 hover:bg-brand-blue transition-all text-left group"
                    >
                      <div className="font-bold text-white text-base md:text-lg">Team GRIWD 1</div>
                      <div className="text-[10px] text-slate-400 group-hover:text-white/80 uppercase tracking-widest font-black">Consultation & Sales</div>
                    </button>
                    <button 
                      onClick={() => handleWhatsAppSend("263786239765")}
                      className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 hover:bg-brand-blue transition-all text-left group"
                    >
                      <div className="font-bold text-white text-base md:text-lg">Team GRIWD 2</div>
                      <div className="text-[10px] text-slate-400 group-hover:text-white/80 uppercase tracking-widest font-black">Support & Technical</div>
                    </button>
                  </div>
                  <button 
                    onClick={() => setShowNumberChoice(false)}
                    className="text-slate-500 hover:text-white uppercase font-black tracking-widest text-[10px]"
                  >
                    Cancel
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="space-y-8 md:space-y-12">
          <div className="p-8 md:p-16 glass rounded-[2.5rem] md:rounded-[4rem] border-white/5 relative group h-full shadow-2xl">
            <div className="absolute inset-0 bg-brand-blue/5 rounded-[2.5rem] md:rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <h4 className="text-2xl md:text-4xl font-heading text-white mb-6 md:mb-10">Contact Detail</h4>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 md:mb-16">Reach out to us for elite consultations and project quotes.</p>
            <div className="space-y-8 md:space-y-12">
              {[
                { icon: Mail, t: 'Email', v: 'teamgriwd@gmail.com', href: 'mailto:teamgriwd@gmail.com' },
                { icon: Phone, t: 'Phone', v: '+263 785 919 439', href: 'tel:+263785919439' },
                { icon: Phone, t: 'Phone 2', v: '+263 786 239 765', href: 'tel:+263786239765' },
                { icon: MapPin, t: 'Location', v: 'Harare, Zimbabwe', href: '#' }
              ].map((item, i) => (
                <a key={i} href={item.href} className="flex items-center gap-6 md:gap-8 group/item hover:bg-white/5 p-4 -m-4 rounded-2xl md:rounded-3xl transition-all">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center text-brand-blue group-hover/item:bg-brand-blue group-hover/item:text-white transition-all flex-shrink-0">
                    <item.icon className="size-6 md:size-8" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black tracking-widest text-slate-500 uppercase mb-1">{item.t}</div>
                    <div className="text-lg md:text-2xl font-bold text-white group-hover/item:text-brand-blue transition-colors break-all">{item.v}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
