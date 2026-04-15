import { Suspense, lazy } from 'react';
import CustomCursor from './components/CustomCursor';
import FloatingActions from './components/FloatingActions';
import ScrollProgressBar from './components/ScrollProgressBar';

const Navbar = lazy(() => import('./components/Navbar'));
const HeroSection = lazy(() => import('./components/HeroSection'));
const AboutSection = lazy(() => import('./components/AboutSection'));
const ServicesSection = lazy(() => import('./components/ServicesSection'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const StatsSection = lazy(() => import('./components/StatsSection'));
const ProcessTimelineSection = lazy(() => import('./components/ProcessTimelineSection'));
const PortfolioSection = lazy(() => import('./components/PortfolioSection'));
const TransformationsSection = lazy(() => import('./components/TransformationsSection'));
const BridalPackagesSection = lazy(() => import('./components/BridalPackagesSection'));
const MeetArtistSection = lazy(() => import('./components/MeetArtistSection'));
const ProductsSection = lazy(() => import('./components/ProductsSection'));
const AwardsSection = lazy(() => import('./components/AwardsSection'));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection'));
const BookingCTA = lazy(() => import('./components/BookingCTA'));
const InstagramSection = lazy(() => import('./components/InstagramSection'));
const FAQSection = lazy(() => import('./components/FAQSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const Footer = lazy(() => import('./components/Footer'));

function SectionSkeleton({ light = false, compact = false }) {
  return (
    <section className={`${light ? 'bg-[var(--cream)]' : 'bg-[var(--bg-main)]'} ${compact ? 'py-14' : 'py-20'}`}>
      <div className="section-shell space-y-3">
        <div className="skeleton h-8 w-48" />
        <div className="skeleton h-5 w-full max-w-xl" />
        <div className="skeleton h-5 w-full max-w-lg" />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="skeleton h-40" />
          <div className="skeleton h-40" />
          <div className="skeleton h-40" />
        </div>
      </div>
    </section>
  );
}

function SectionSlot({ children, light = false, compact = false }) {
  return <Suspense fallback={<SectionSkeleton light={light} compact={compact} />}>{children}</Suspense>;
}

function App() {
  return (
    <div className="relative overflow-x-hidden">
      <ScrollProgressBar />
      <CustomCursor />
      <SectionSlot compact>
        <Navbar />
      </SectionSlot>

      <main>
        <SectionSlot>
          <HeroSection />
        </SectionSlot>
        <SectionSlot light>
          <AboutSection />
        </SectionSlot>
        <SectionSlot>
          <ServicesSection />
        </SectionSlot>
        <SectionSlot>
          <WhyChooseUs />
        </SectionSlot>
        <SectionSlot>
          <StatsSection />
        </SectionSlot>
        <SectionSlot>
          <ProcessTimelineSection />
        </SectionSlot>
        <SectionSlot light>
          <PortfolioSection />
        </SectionSlot>
        <SectionSlot light>
          <TransformationsSection />
        </SectionSlot>
        <SectionSlot>
          <BridalPackagesSection />
        </SectionSlot>
        <SectionSlot light>
          <MeetArtistSection />
        </SectionSlot>
        <SectionSlot>
          <ProductsSection />
        </SectionSlot>
        <SectionSlot light>
          <AwardsSection />
        </SectionSlot>
        <SectionSlot>
          <TestimonialsSection />
        </SectionSlot>
        <SectionSlot>
          <BookingCTA />
        </SectionSlot>
        <SectionSlot light>
          <InstagramSection />
        </SectionSlot>
        <SectionSlot>
          <FAQSection />
        </SectionSlot>
        <SectionSlot>
          <ContactSection />
        </SectionSlot>
      </main>

      <SectionSlot compact>
        <Footer />
      </SectionSlot>
      <FloatingActions />
    </div>
  );
}

export default App;
