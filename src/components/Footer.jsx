import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="pt-40 pb-16 px-6 bg-brand-light border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-20 mb-32">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-10 group">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center p-2 shadow-xl group-hover:scale-110 transition-transform duration-500 overflow-hidden">
                <img src={logo} alt="GRIWD Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-heading text-2xl tracking-tighter uppercase text-white">GRIWD</span>
            </Link>
            <p className="text-slate-400 max-w-sm text-xl leading-relaxed font-medium">
              We orchestrate an <span className="text-white font-bold">elite ecosystem</span> of technical and creative services, bridging the gap between your goals and reality.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-white mb-10 uppercase tracking-[0.3em] text-xs">Solutions</h4>
            <ul className="space-y-6 text-slate-400 font-bold text-lg">
              <li><Link to="/graphics" className="hover:text-brand-orange transition-colors">Graphics</Link></li>
              <li><Link to="/repairs" className="hover:text-brand-green transition-colors">Repairs</Link></li>
              <li><Link to="/internet" className="hover:text-brand-blue transition-colors">Internet</Link></li>
              <li><Link to="/web-dev" className="hover:text-brand-purple transition-colors">Web Innovation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-white mb-10 uppercase tracking-[0.3em] text-xs">Contact</h4>
            <ul className="space-y-6 text-slate-400 font-bold text-lg">
              <li className="hover:text-brand-red transition-colors cursor-pointer">teamgriwd@gmail.com</li>
              <li>+263 785 919 439</li>
              <li>+263 786 239 765</li>
              <li>Harare, Zimbabwe</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-slate-600 text-xs font-black tracking-widest gap-8">
          <p>© 2026 GRIWD TECHNOLOGY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
