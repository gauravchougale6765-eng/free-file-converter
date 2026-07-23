import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Converter from "./components/Converter/Converter";
import SupportedFormats from "./components/SupportedFormats/SupportedFormats";
import Features from "./components/Features/Features";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <Converter />

        <SupportedFormats />

        <Features />

        <HowItWorks />

        <FAQ />

        <Contact />

      </main>

      <Footer />
    </>
  );
}

export default App;