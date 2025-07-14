import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import ProductSection from "./components/ProductSection";
import Collections from "./components/Collections";
import AssuranceSection from "./components/AssuranceSection";
import FinalCTA from "./components/FinalCTA";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black text-gray-800 dark:text-gray-100">
      <Navbar />
      <Hero />
      <Categories />
      <ProductSection />
      <Collections />
      <AssuranceSection />
      <FinalCTA />
      <AboutSection />
      <Footer />
    </main>
  );
}
