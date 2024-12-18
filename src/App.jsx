import React from "react";
import { HashRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import ServicesSection from "./components/Services";
import Skills from "./components/Skills";
import Contact from "./components/contact";
import Footer from "./components/Footer";
import './assets/style.css';
import 'font-awesome/css/font-awesome.min.css';
import useDarkMode from './hooks/useDarkmode';

function App() {
  const location = useLocation();
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  const showSidebar = location.pathname !== '/contact' && location.pathname !== '/TermsAndConditions';

  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
      {showSidebar && <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />}

      <main>
        <Routes>
          <Route path="/" element={
            <>
              <MainSection />
              <ServicesSection />
              <Skills />
            </>
          } />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}