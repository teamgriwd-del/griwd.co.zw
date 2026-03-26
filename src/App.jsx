import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import { 
  About, 
  Graphics, 
  Repairs, 
  Networking, 
  WebDev, 
  Internet, 
  Contact 
} from "./pages/Pages";

export default function App() {
  return (
    <Router basename="/griwd.co.zw">
      <div className="bg-brand-light min-h-screen text-brand-deep flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/graphics" element={<Graphics />} />
            <Route path="/repairs" element={<Repairs />} />
            <Route path="/networking" element={<Networking />} />
            <Route path="/web-dev" element={<WebDev />} />
            <Route path="/internet" element={<Internet />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  );
}
