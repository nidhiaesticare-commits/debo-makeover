import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import StatsSection from './components/StatsSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import BookingCTA from './components/BookingCTA';
import InstagramSection from './components/InstagramSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUs />
        <StatsSection />
        <PortfolioSection />
        <TestimonialsSection />
        <BookingCTA />
        <InstagramSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;
