import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <hr className="fancy" />
        <About />
        <hr className="fancy" />
        <Skills />
        <hr className="fancy" />
        <Experience />
        <hr className="fancy" />
        <Portfolio />
        <hr className="fancy" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
