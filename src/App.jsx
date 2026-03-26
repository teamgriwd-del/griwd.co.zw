import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Pages = lazy(() => import("./pages/Pages"));

// Helper to extract components from Pages.jsx if possible, 
// but since they are exported from Pages.jsx, we can use a wrapper or just lazy load the whole thing.
// Given the current structure, we'll lazy load individual components if they were in separate files.
// For now, let's keep it simple and just lazy load the main ones.

const About = lazy(() => import("./pages/Pages").then(module => ({ default: module.About })));
const Graphics = lazy(() => import("./pages/Pages").then(module => ({ default: module.Graphics })));
const Repairs = lazy(() => import("./pages/Pages").then(module => ({ default: module.Repairs })));
const Networking = lazy(() => import("./pages/Pages").then(module => ({ default: module.Networking })));
const WebDev = lazy(() => import("./pages/Pages").then(module => ({ default: module.WebDev })));
const Internet = lazy(() => import("./pages/Pages").then(module => ({ default: module.Internet })));
const Contact = lazy(() => import("./pages/Pages").then(module => ({ default: module.Contact })));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-brand-light">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-blue"></div>
  </div>
);

export default function App() {
  return (
    <Router basename="/griwd.co.zw">
      <div className="bg-brand-light min-h-screen text-brand-deep flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<LoadingSpinner />}>
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
          </Suspense>
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  );
}

