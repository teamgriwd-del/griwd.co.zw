import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const links = [
  { name: "Home", path: "/", color: "hover:text-brand-blue" },
  { name: "About", path: "/about", color: "hover:text-white" },
  { name: "Graphics", path: "/graphics", color: "hover:text-brand-orange" },
  { name: "Repairs", path: "/repairs", color: "hover:text-brand-green" },
  { name: "Internet", path: "/internet", color: "hover:text-brand-blue" },
  { name: "Web Innovation", path: "/web-dev", color: "hover:text-brand-purple" },
  { name: "Contact", path: "/contact", color: "hover:text-brand-red" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? "py-4 bg-brand-light/90 backdrop-blur-2xl border-b border-white/5" : "py-8"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-4 group">
          <div className="relative">
            <div className="w-12 h-12 rounded-2xl overflow-hidden bg-white flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl shadow-brand-blue/20 p-2">
              <img src={logo} alt="GRIWD Logo" className="w-full h-full object-contain" />
            </div>
            <div className="absolute -inset-1 bg-white rounded-2xl blur opacity-10 group-hover:opacity-20 transition-opacity" />
          </div>
          <span className="font-heading text-2xl tracking-tighter text-white">GRIWD</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-2">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-5 py-2 rounded-full text-sm font-black tracking-wide transition-all duration-300 ${
                location.pathname === link.path 
                  ? "bg-white text-brand-light shadow-lg" 
                  : `text-white/60 ${link.color} hover:bg-white/5`
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="ml-4 px-8 py-3 rounded-2xl bg-brand-blue text-white font-heading text-sm uppercase tracking-widest hover:bg-white hover:text-brand-blue transition-all duration-500"
          >
            Hire Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-gray-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass border-b border-white/10 lg:hidden py-8 px-6 flex flex-col gap-4 text-lg font-medium"
          >
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={location.pathname === link.path ? "text-brand-blue" : "text-gray-400"}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
