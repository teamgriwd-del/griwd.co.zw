import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone, User } from "lucide-react";

const waNumbers = [
  { name: "Team GRIWD 1", num: "263785919439", label: "Consultation & Sales" },
  { name: "Team GRIWD 2", num: "263786239765", label: "Support & Technical" }
];

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[200]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-6 w-72 glass rounded-[2rem] border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="p-6 bg-brand-blue/10 border-b border-white/5">
              <h3 className="text-white font-heading text-lg">Chat with Us</h3>
              <p className="text-slate-400 text-xs mt-1 uppercase tracking-widest font-black">Average response: 5 mins</p>
            </div>
            <div className="p-4 space-y-3">
              {waNumbers.map((wa) => (
                <div key={wa.num} className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/${wa.num}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-grow flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-green/20 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all">
                      <User size={20} />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">{wa.name}</div>
                      <div className="text-slate-500 text-[10px] uppercase font-black tracking-tighter">{wa.label}</div>
                    </div>
                  </a>
                  <a
                    href={`tel:${wa.num}`}
                    className="w-12 h-12 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all"
                    title="Call Us"
                  >
                    <Phone size={20} />
                  </a>
                </div>
              ))}
            </div>
            <div className="p-4 bg-black/20 text-center">
              <p className="text-slate-500 text-[10px] uppercase font-medium">Available for Calls & Texts</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 ${
          isOpen ? "bg-white text-brand-blue rotate-90" : "bg-brand-green text-white"
        }`}
      >
        {isOpen ? <X size={32} /> : <MessageCircle size={32} className="fill-white/20" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-red rounded-full animate-ping" />
        )}
      </motion.button>
    </div>
  );
}
