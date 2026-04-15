import { Suspense } from 'react';
import CustomCursor from './components/CustomCursor';
import FloatingActions from './components/FloatingActions';
import ScrollProgressBar from './components/ScrollProgressBar';
import { lazyWithRetry } from './utils/lazyWithRetry';

const Navbar = lazyWithRetry(() => import('./components/Navbar'), 'Navbar');
const HeroSection = lazyWithRetry(() => import('./components/HeroSection'), 'HeroSection');
const AboutSection = lazyWithRetry(() => import('./components/AboutSection'), 'AboutSection');
const ServicesSection = lazyWithRetry(() => import('./components/ServicesSection'), 'ServicesSection');
const WhyChooseUs = lazyWithRetry(() => import('./components/WhyChooseUs'), 'WhyChooseUs');
const StatsSection = lazyWithRetry(() => import('./components/StatsSection'), 'StatsSection');
const ProcessTimelineSection = lazyWithRetry(
  () => import('./components/ProcessTimelineSection'),
  'ProcessTimelineSection'
);
const PortfolioSection = lazyWithRetry(() => import('./components/PortfolioSection'), 'PortfolioSection');
const TransformationsSection = lazyWithRetry(
  () => import('./components/TransformationsSection'),
  'TransformationsSection'
);
const BridalPackagesSection = lazyWithRetry(
  () => import('./components/BridalPackagesSection'),
  'BridalPackagesSection'
);
const MeetArtistSection = lazyWithRetry(() => import('./components/MeetArtistSection'), 'MeetArtistSection');
const ProductsSection = lazyWithRetry(() => import('./components/ProductsSection'), 'ProductsSection');
const AwardsSection = lazyWithRetry(() => import('./components/AwardsSection'), 'AwardsSection');
const TestimonialsSection = lazyWithRetry(() => import('./components/TestimonialsSection'), 'TestimonialsSection');
const BookingCTA = lazyWithRetry(() => import('./components/BookingCTA'), 'BookingCTA');
const InstagramSection = lazyWithRetry(() => import('./components/InstagramSection'), 'InstagramSection');
const FAQSection = lazyWithRetry(() => import('./components/FAQSection'), 'FAQSection');
const ContactSection = lazyWithRetry(() => import('./components/ContactSection'), 'ContactSection');
const Footer = lazyWithRetry(() => import('./components/Footer'), 'Footer');

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
