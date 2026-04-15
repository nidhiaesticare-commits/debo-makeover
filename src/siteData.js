import img1 from '../image1.jpg';
import img2 from '../image2.jpg';
import img3 from '../image3.jpg';
import img4 from '../image4.jpg';
import img5 from '../image5.jpg';
import img6 from '../image6.jpg';

export const salonImages = [img1, img2, img3, img4, img5, img6];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Packages', href: '#packages' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Booking', href: '#booking' },
  { label: 'Contact', href: '#contact' },
];

export const heroHighlights = [
  { value: '500+', label: 'Happy Clients' },
  { value: '5+', label: 'Years Experience' },
  { value: '100%', label: 'Satisfaction' },
];

export const heroTrustCards = [
  'Bridal Specialist',
  'Premium Products',
  'Home Service Available',
];

export const whyChoosePoints = [
  {
    title: 'Luxury Experience',
    description: 'Every service includes skin analysis, look planning, and touch-up guidance for all-day confidence.',
  },
  {
    title: 'Certified Makeup Artist',
    description: 'Professional training across bridal, editorial glam, and HD makeup techniques.',
  },
  {
    title: 'Premium Products Only',
    description: 'High-performance products curated for Indian skin tones and long event durations.',
  },
  {
    title: 'Personalized Consultation',
    description: 'Looks are tailored to your face shape, outfit palette, and event lighting.',
  },
  {
    title: 'Hygienic & Safe Setup',
    description: 'Sanitized tools, fresh disposables, and skin-safe prep routine in every appointment.',
  },
  {
    title: 'On-Time Service',
    description: 'Disciplined timeline management so your event schedule stays stress-free.',
  },
];

export const services = [
  {
    title: 'Bridal Makeup',
    badge: 'Most Popular',
    chips: ['Best for Brides', 'Top Rated'],
    price: 'INR 18,000 - 55,000',
    duration: '3.5 to 5 hours',
    recommendedFor: 'Wedding ceremonies and reception glam',
    description:
      'Signature bridal skin prep, high-definition base layering, sculpted eyes, saree draping, and camera-ready finishing.',
    details:
      'Includes pre-bridal skin prep guidance, lashes, body blending, long-wear sealing, and emergency touch-up kit support.',
    related: ['Hairstyling', 'Saree Draping', 'Bridal Trial Session'],
    image: img1,
    before: img2,
    after: img1,
  },
  {
    title: 'HD Makeup',
    badge: 'Premium',
    chips: ['Trending'],
    price: 'INR 7,500 - 14,000',
    duration: '1.5 to 2.5 hours',
    recommendedFor: 'Photo shoots and engagement events',
    description: 'Photo-ready complexion with lightweight, seamless finish ideal for high-resolution cameras.',
    details: 'Balanced coverage and skin-like texture with humidity-safe setting techniques.',
    related: ['Soft Curls', 'Lens-Friendly Eye Makeup', 'Outfit Coordination'],
    image: img2,
    before: img3,
    after: img2,
  },
  {
    title: 'Party Makeup',
    badge: 'Top Pick',
    chips: ['Fast Glam'],
    price: 'INR 4,000 - 9,500',
    duration: '1.25 to 2 hours',
    recommendedFor: 'Cocktail nights and festive functions',
    description: 'Bold yet balanced glam looks tailored to your outfit, venue lighting, and event vibe.',
    details: 'Custom eye options, contour styles, and transfer-resistant lip layering for long wear.',
    related: ['Hair Waves', 'Nail Styling', 'Gown Drape'],
    image: img3,
    before: img4,
    after: img3,
  },
  {
    title: 'Engagement Makeup',
    badge: 'Signature',
    chips: ['Camera Ready'],
    price: 'INR 9,000 - 19,000',
    duration: '2 to 3 hours',
    recommendedFor: 'Ring ceremony and couple portraits',
    description: 'Elegant glam balance with radiant skin, statement eyes, and timeless finish for portraits.',
    details: 'Includes look consultation, accessories sync, and event-time touch-up recommendations.',
    related: ['Hair Bun Styling', 'Saree Draping', 'Family Glam Add-ons'],
    image: img4,
    before: img5,
    after: img4,
  },
  {
    title: 'Hairstyling',
    badge: 'Trending',
    chips: ['Top Rated'],
    price: 'INR 2,500 - 8,500',
    duration: '45 to 90 mins',
    recommendedFor: 'Bridal, reception, and party events',
    description: 'Structured buns, soft curls, floral pinning, and long-lasting hold for all event formats.',
    details: 'Hairstyles are selected by face shape, weather conditions, and outfit neckline.',
    related: ['Hair Extensions', 'Fresh Flower Setup', 'Veil Fixing'],
    image: img5,
    before: img6,
    after: img5,
  },
  {
    title: 'Saree Draping',
    badge: 'Essential',
    chips: ['Wedding Ready'],
    price: 'INR 1,500 - 4,500',
    duration: '30 to 60 mins',
    recommendedFor: 'Bridesmaids and family ceremonies',
    description: 'Crisp pleats, secure pinning, and silhouette-friendly draping for effortless confidence.',
    details: 'Supports Gujarati, Marathi, and modern bridal drape variants.',
    related: ['Pre-pleated Drape', 'Belt Styling', 'Bridal Dupatta Layering'],
    image: img6,
    before: img2,
    after: img6,
  },
  {
    title: 'Skincare & Facials',
    badge: 'Glow Therapy',
    chips: ['Skin Prep'],
    price: 'INR 2,000 - 7,500',
    duration: '45 to 75 mins',
    recommendedFor: 'Pre-event glow and bridal prep routines',
    description: 'Glow-focused facial rituals and hydration layering to improve makeup payoff.',
    details: 'Includes skin consultation and product recommendations for pre-bridal care timeline.',
    related: ['Detan Ritual', 'Hydration Boost', 'Glow Polish'],
    image: img3,
    before: img5,
    after: img3,
  },
  {
    title: 'Nail Art',
    badge: 'Add-On',
    chips: ['Bridal Hands'],
    price: 'INR 1,500 - 6,000',
    duration: '45 to 120 mins',
    recommendedFor: 'Engagement, mehendi, and bridal shoots',
    description: 'Detailed nail styling from elegant nudes to embellished festive sets.',
    details: 'Long-stay finish with shape consultation and outfit-matching color stories.',
    related: ['French Tips', 'Chrome Finish', 'Stone Embellishments'],
    image: img4,
    before: img1,
    after: img4,
  },
];

export const stats = [
  { label: 'Happy Clients', value: 500, suffix: '+' },
  { label: 'Years Experience', value: 5, suffix: '+' },
  { label: 'Bridal Looks', value: 200, suffix: '+' },
  { label: 'Satisfaction Rate', value: 100, suffix: '%' },
];

export const processTimeline = [
  {
    title: 'Consultation',
    body: 'Understand event details, skin profile, and preferred finish.',
  },
  {
    title: 'Skin Prep',
    body: 'Targeted hydration and texture prep for smooth makeup layering.',
  },
  {
    title: 'Makeup Trial',
    body: 'Preview shades, eye styles, and final look adjustments.',
  },
  {
    title: 'Final Makeup',
    body: 'Precision application with long-wear setting for events.',
  },
  {
    title: 'Hairstyling',
    body: 'Face-framing style with secure hold and ornament support.',
  },
  {
    title: 'Final Touch-Up',
    body: 'Photo check, blend correction, and confidence-ready finish.',
  },
];

export const bridalPackages = [
  {
    name: 'Classic Bridal Package',
    duration: '3.5 Hours',
    style: 'Soft Glam Bridal',
    includes: ['Bridal Makeup', 'Basic Hairstyling', 'Saree Draping', 'Lashes'],
    trial: 'Not Included',
    homeService: 'Available at extra charge',
    price: 'INR 21,000 - 28,000',
    recommended: false,
  },
  {
    name: 'Premium Bridal Package',
    duration: '4.5 Hours',
    style: 'HD / Signature Bridal',
    includes: ['HD Bridal Makeup', 'Advanced Hairstyling', 'Saree + Dupatta Draping', 'Touch-up Kit'],
    trial: 'Included',
    homeService: 'Included in city limits',
    price: 'INR 32,000 - 45,000',
    recommended: true,
  },
  {
    name: 'Luxury Bridal Package',
    duration: '5.5 Hours',
    style: 'Luxury Editorial Bridal',
    includes: ['Luxury Makeup', 'Hair Extensions Styling', 'Premium Draping', 'Assistant + Touch-up'],
    trial: 'Priority Trial Included',
    homeService: 'Priority Home Service',
    price: 'INR 48,000 - 68,000',
    recommended: false,
  },
];

export const transformations = [
  {
    title: 'Bridal Glow Transformation',
    before: img2,
    after: img1,
    category: 'Bridal',
  },
  {
    title: 'Engagement Signature Look',
    before: img5,
    after: img4,
    category: 'Engagement',
  },
  {
    title: 'Party Glam Upgrade',
    before: img6,
    after: img3,
    category: 'Party',
  },
];

export const portfolio = [
  {
    title: 'Royal Bridal',
    category: 'Bridal',
    description: 'Velvet skin and regal eye styling for wedding portraits.',
    tags: ['Bridal', 'HD Finish', 'Top Rated'],
    image: img1,
    before: img2,
    after: img1,
    videoPreview: true,
    tall: true,
  },
  {
    title: 'Sunset Reception Glam',
    category: 'Glam',
    description: 'Soft shimmer finish for golden-hour events.',
    tags: ['Glam', 'Reception'],
    image: img2,
    before: img5,
    after: img2,
  },
  {
    title: 'Cocktail Party Muse',
    category: 'Party',
    description: 'Defined eyes with luminous skin finish.',
    tags: ['Party', 'Trending'],
    image: img3,
    before: img6,
    after: img3,
  },
  {
    title: 'Ring Ceremony Edit',
    category: 'Bridal',
    description: 'Elegant contour and naturally enhanced features.',
    tags: ['Engagement', 'Photo Ready'],
    image: img4,
    before: img5,
    after: img4,
    tall: true,
  },
  {
    title: 'Textured Hair Story',
    category: 'Hairstyling',
    description: 'Dimensional curls and floral placement.',
    tags: ['Hair', 'Luxury'],
    image: img5,
    before: img2,
    after: img5,
  },
  {
    title: 'Glass Skin Ritual',
    category: 'Skincare',
    description: 'Hydration-rich prep for makeup longevity.',
    tags: ['Skincare', 'Glow'],
    image: img6,
    before: img3,
    after: img6,
  },
  {
    title: 'Bridal Red Saree Look',
    category: 'Bridal',
    description: 'Classic bridal red with modern sculpt.',
    tags: ['Bridal', 'Classic'],
    image: img1,
    before: img4,
    after: img1,
  },
  {
    title: 'Party Smokey Glam',
    category: 'Party',
    description: 'Smokey eyes balanced with glossy nude lips.',
    tags: ['Party', 'Night Event'],
    image: img3,
    before: img6,
    after: img3,
  },
  {
    title: 'Editorial Bride Shoot',
    category: 'Glam',
    description: 'Statement highlighting and modern brow structure.',
    tags: ['Editorial', 'Luxury'],
    image: img4,
    before: img2,
    after: img4,
    tall: true,
  },
  {
    title: 'Soft Waves Reception',
    category: 'Hairstyling',
    description: 'Polished movement with humidity-safe hold.',
    tags: ['Hair', 'Reception'],
    image: img5,
    before: img1,
    after: img5,
  },
  {
    title: 'Hydra Facial Finish',
    category: 'Skincare',
    description: 'Balanced texture for flawless foundation.',
    tags: ['Skin Prep', 'Glow Boost'],
    image: img6,
    before: img3,
    after: img6,
  },
  {
    title: 'Festive Family Glam',
    category: 'Party',
    description: 'Fast-luxury glam for festive celebrations.',
    tags: ['Festive', 'Top Rated'],
    image: img2,
    before: img5,
    after: img2,
  },
];

export const portfolioStats = [
  { value: '200+', label: 'Bridal Looks' },
  { value: '100+', label: 'Party Looks' },
  { value: '50+', label: 'Editorial Shoots' },
];

export const testimonials = [
  {
    name: 'Neha Kapoor',
    type: 'Bridal Client',
    rating: 5,
    image: img1,
    quote:
      'I felt calm, confident, and stunning through every ceremony. The finish looked premium in person and on camera.',
  },
  {
    name: 'Ria Fernandes',
    type: 'Engagement Look',
    rating: 5,
    image: img2,
    quote:
      'The makeup was soft glam exactly as discussed and lasted till midnight without looking heavy.',
  },
  {
    name: 'Sanya Mehta',
    type: 'Party Glam',
    rating: 5,
    image: img3,
    quote:
      'Debo understood my face shape instantly and delivered the most flattering look I have ever had.',
  },
  {
    name: 'Ishita Das',
    type: 'Pre-Wedding Shoot',
    rating: 5,
    image: img4,
    quote:
      'Very professional setup, hygienic brushes, and beautiful skin texture throughout the shoot.',
  },
];

export const googleReviews = [
  {
    name: 'Pooja Nair',
    rating: 5,
    source: 'Google',
    comment: 'Extremely professional and punctual. The look lasted through all functions beautifully.',
  },
  {
    name: 'Kritika Shah',
    rating: 5,
    source: 'Google',
    comment: 'The consultation process was detailed and reassuring. Highly recommended for brides.',
  },
  {
    name: 'Anita Dsouza',
    rating: 5,
    source: 'Google',
    comment: 'Clean setup, quality products, and truly premium finishing. Worth every rupee.',
  },
];

export const featuredIn = ['Wedding Circle', 'Bridal Story India', 'Style Vows', 'Vasai Beauty Guild'];

export const productsUsed = [
  'Huda Beauty',
  'NARS',
  'MAC Cosmetics',
  'Too Faced',
  'Anastasia Beverly Hills',
  'Charlotte Tilbury',
];

export const awards = [
  {
    title: 'Top Bridal Artist - Vasai Region',
    year: '2025',
    body: 'Recognized for premium bridal transformations and client satisfaction.',
  },
  {
    title: 'Certified Advanced HD Makeup',
    year: '2024',
    body: 'Completed advanced certification focused on long-wear high-definition techniques.',
  },
  {
    title: 'Hygiene Excellence Certification',
    year: '2024',
    body: 'Awarded for hygiene protocols and safe professional beauty practices.',
  },
];

export const artistProfile = {
  name: 'Debo - Founder & Lead Artist',
  image: img1,
  quote: 'Beauty is not about hiding features, it is about revealing confidence with intention.',
  story:
    'With over 5 years of bridal and glam artistry, Debo has built a premium studio known for elegant finishes, discipline, and calm client experience. Every look starts with listening and ends with confidence.',
  specialties: ['Bridal HD Glam', 'Engagement Looks', 'Skin-First Makeup', 'Editorial Finishing'],
  certifications: ['Advanced Bridal Masterclass', 'HD Makeup Pro Certification', 'Skin Prep & Hygiene Training'],
};

export const instagramPosts = [
  { image: img1, likes: '2.1K', comments: '124' },
  { image: img2, likes: '1.8K', comments: '99' },
  { image: img3, likes: '2.4K', comments: '143' },
  { image: img4, likes: '1.9K', comments: '87' },
  { image: img5, likes: '1.5K', comments: '62' },
  { image: img6, likes: '2.0K', comments: '105' },
];

export const bookingOptions = {
  services: ['Bridal Makeup', 'Engagement Makeup', 'Party Makeup', 'HD Makeup', 'Hairstyling'],
  slots: ['08:00 AM', '10:00 AM', '12:30 PM', '03:00 PM', '06:00 PM'],
  fastFillingDates: ['12 May', '18 May', '25 May'],
};

export const faqs = [
  {
    q: 'How early should I book bridal makeup?',
    a: 'We recommend booking 6 to 12 weeks in advance for prime wedding dates and trial availability.',
  },
  {
    q: 'Do you provide home service?',
    a: 'Yes, home and venue services are available across Nalasopara, Virar, Vasai, and nearby regions.',
  },
  {
    q: 'Which products do you use?',
    a: 'We use premium professional brands selected according to skin type, finish, and event duration.',
  },
  {
    q: 'Do you offer trial makeup?',
    a: 'Yes, bridal and engagement clients can book a paid trial session before final confirmation.',
  },
  {
    q: 'What areas do you cover?',
    a: 'Our team serves Mumbai suburbs including Nalasopara, Virar, Vasai, and nearby wedding venues.',
  },
  {
    q: 'Can I book makeup for family members as well?',
    a: 'Yes, we offer family and bridesmaid glam packages with coordinated styling.',
  },
  {
    q: 'Do you provide hairstyling and saree draping?',
    a: 'Yes, both services are available as standalone or package add-ons.',
  },
];
