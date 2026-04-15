import image1 from './assets/images/image1.jpg';
import image2 from './assets/images/image2.jpg';
import image3 from './assets/images/image3.jpg';
import image6 from './assets/images/image6.jpg';
import image7 from './assets/images/image7.jpg';
import image8 from './assets/images/image8.jpg';
import image9 from './assets/images/image9.jpg';
import image10 from './assets/images/image10.jpg';
import image11 from './assets/images/image11.jpg';
import image12 from './assets/images/image12.jpg';
import image13 from './assets/images/image13.jpg';
import image14 from './assets/images/image14.jpg';
import image15 from './assets/images/image15.jpg';
import image16 from './assets/images/image16.jpg';
import image17 from './assets/images/image17.jpg';

export const imageFallback = image1;

export const salonImages = [
  image16,
  image10,
  image11,
  image12,
  image8,
  image9,
  image7,
  image13,
  image14,
  image2,
  image3,
  image6,
  image15,
  image17,
  image1,
];

export const heroMedia = {
  background: image16,
  fallback: image1,
  cards: [
    {
      image: image10,
      label: 'Bridal Close-Up',
      alt: 'Luxury bridal close-up portrait',
      fit: 'cover',
    },
    {
      image: image7,
      label: 'Makeup Artistry',
      alt: 'Makeup artist working with premium tools',
      fit: 'cover',
    },
    {
      image: image13,
      label: 'Jewelry Detail',
      alt: 'Bridal jewelry and styling detail shot',
      fit: 'cover',
    },
    {
      image: image11,
      label: 'Happy Client',
      alt: 'Happy client bridal transformation moment',
      fit: 'cover',
    },
  ],
};

export const aboutCollage = [
  {
    image: image7,
    alt: 'Makeup artist applying bridal makeup',
    label: 'Artist At Work',
    fit: 'cover',
  },
  {
    image: image3,
    alt: 'Luxury beauty products and skincare essentials',
    label: 'Beauty Products',
    fit: 'cover',
  },
  {
    image: image11,
    alt: 'Client transformation portrait',
    label: 'Client Transformation',
    fit: 'cover',
  },
  {
    image: image9,
    alt: 'Beauty studio ambience with elegant decor',
    label: 'Studio Ambience',
    fit: 'cover',
  },
  {
    image: image12,
    alt: 'Luxury interior and treatment environment',
    label: 'Luxury Interior',
    fit: 'cover',
  },
];

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
    image: image9,
  },
  {
    title: 'Certified Makeup Artist',
    description: 'Professional training across bridal, editorial glam, and HD makeup techniques.',
    image: image7,
  },
  {
    title: 'Premium Products Only',
    description: 'High-performance products curated for Indian skin tones and long event durations.',
    image: image3,
  },
  {
    title: 'Personalized Consultation',
    description: 'Looks are tailored to your face shape, outfit palette, and event lighting.',
    image: image10,
  },
  {
    title: 'Hygienic & Safe Setup',
    description: 'Sanitized tools, fresh disposables, and skin-safe prep routine in every appointment.',
    image: image13,
  },
  {
    title: 'On-Time Service',
    description: 'Disciplined timeline management so your event schedule stays stress-free.',
    image: image11,
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
    image: image16,
    before: image10,
    after: image16,
    imageFit: 'cover',
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
    image: image2,
    before: image3,
    after: image2,
    imageFit: 'cover',
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
    image: image9,
    before: image3,
    after: image9,
    imageFit: 'cover',
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
    image: image11,
    before: image10,
    after: image11,
    imageFit: 'cover',
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
    image: image8,
    before: image6,
    after: image8,
    imageFit: 'cover',
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
    image: image13,
    before: image14,
    after: image13,
    imageFit: 'contain',
  },
  {
    title: 'Mehendi Art',
    badge: 'Trending',
    chips: ['Wedding Ritual'],
    price: 'INR 2,000 - 10,000',
    duration: '1.5 to 4 hours',
    recommendedFor: 'Bridal mehendi and festive ceremonies',
    description: 'Detailed bridal and contemporary mehendi compositions with clean line precision.',
    details: 'Includes custom motifs, palm-to-arm patterns, and stain-care guidance.',
    related: ['Bridal Mehendi', 'Arabic Style', 'Contemporary Motifs'],
    image: image12,
    before: image14,
    after: image12,
    imageFit: 'contain',
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
    image: image6,
    before: image7,
    after: image6,
    imageFit: 'cover',
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
    image: image3,
    before: image10,
    after: image3,
    imageFit: 'cover',
  },
  {
    title: 'Luxury Salon Interior',
    badge: 'Studio Tour',
    chips: ['Premium Ambience'],
    price: 'By Appointment',
    duration: '30 mins consultation',
    recommendedFor: 'Brides seeking private luxury setup',
    description: 'Experience a curated luxury studio environment for calm, camera-ready preparation.',
    details: 'Includes personalized setup walkthrough, treatment flow planning, and event-day logistics.',
    related: ['Private Suite', 'Bridal Lounge', 'Premium Lighting Setup'],
    image: image7,
    before: image15,
    after: image7,
    imageFit: 'cover',
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
    image: image1,
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
    image: image10,
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
    image: image16,
  },
];

export const transformations = [
  {
    title: 'Bridal Glow Transformation',
    before: image10,
    after: image16,
    category: 'Bridal',
    imageFit: 'cover',
  },
  {
    title: 'Engagement Signature Look',
    before: image9,
    after: image11,
    category: 'Engagement',
    imageFit: 'cover',
  },
  {
    title: 'Party Glam Upgrade',
    before: image3,
    after: image9,
    category: 'Party',
    imageFit: 'cover',
  },
];

export const portfolio = [
  {
    title: 'Royal Bridal Portrait',
    category: 'Bridal',
    description: 'Velvet skin and regal eye styling for timeless wedding portraits.',
    tags: ['Bridal', 'HD Finish', 'Premium Look'],
    image: image16,
    before: image10,
    after: image16,
    videoPreview: true,
    tall: true,
    imageFit: 'cover',
  },
  {
    title: 'Editorial Bridal Close-Up',
    category: 'Glam',
    description: 'Flawless texture and premium jewelry framing for close camera work.',
    tags: ['Glam', 'HD Finish'],
    image: image2,
    before: image3,
    after: image2,
    imageFit: 'cover',
  },
  {
    title: 'Party Glam Muse',
    category: 'Party',
    description: 'Defined eyes with luminous skin finish.',
    tags: ['Party Glam', 'Trending'],
    image: image9,
    before: image3,
    after: image9,
    imageFit: 'cover',
  },
  {
    title: 'Ring Ceremony Edit',
    category: 'Bridal',
    description: 'Elegant contour and naturally enhanced features.',
    tags: ['Engagement', 'Photo Ready'],
    image: image11,
    before: image10,
    after: image11,
    tall: true,
    imageFit: 'cover',
  },
  {
    title: 'Bridal Hairstyle Story',
    category: 'Hairstyling',
    description: 'Dimensional curls and floral placement.',
    tags: ['Bridal Hairstyle', 'Luxury'],
    image: image8,
    before: image6,
    after: image8,
    imageFit: 'cover',
  },
  {
    title: 'Luxury Facial Ritual',
    category: 'Skincare',
    description: 'Hydration-rich prep for makeup longevity.',
    tags: ['Luxury Facial', 'Glow'],
    image: image3,
    before: image10,
    after: image3,
    imageFit: 'cover',
  },
  {
    title: 'Premium Nail Art Detail',
    category: 'Nail Art',
    description: 'Close craftsmanship details with premium finish and elegant color story.',
    tags: ['Nail Art', 'Premium Look'],
    image: image13,
    before: image14,
    after: image13,
    imageFit: 'contain',
  },
  {
    title: 'Bridal Mehendi Art',
    category: 'Mehendi',
    description: 'Intricate bridal mehendi patterns with sharp detailing and deep stain finish.',
    tags: ['Mehendi Art', 'Wedding Ritual'],
    image: image12,
    before: image14,
    after: image12,
    imageFit: 'contain',
  },
  {
    title: 'Luxury Salon Ambience',
    category: 'Salon',
    description: 'Premium studio environment designed for calm and camera-ready transformations.',
    tags: ['Salon', 'Luxury Interior'],
    image: image7,
    before: image15,
    after: image7,
    imageFit: 'cover',
  },
  {
    title: 'Jewelry & Bridal Detail',
    category: 'Bridal',
    description: 'Jewelry close-up framing and polished skin details for premium bridal stories.',
    tags: ['Bridal', 'Premium Look'],
    image: image10,
    before: image13,
    after: image10,
    tall: true,
    imageFit: 'cover',
  },
  {
    title: 'Party Reception Glam',
    category: 'Party',
    description: 'Modern glam styling tuned for indoor and low-light event captures.',
    tags: ['Party Glam', 'Night Event'],
    image: image9,
    before: image3,
    after: image9,
    imageFit: 'cover',
  },
  {
    title: 'Soft Glam Close-Up',
    category: 'Glam',
    description: 'Soft-light glam finish with skin-first blending for close camera work.',
    tags: ['Glam', 'HD Finish'],
    image: image2,
    before: image3,
    after: image2,
    imageFit: 'cover',
  },
  {
    title: 'Bridal Texture Story',
    category: 'Bridal',
    description: 'Classic bridal styling with modern balance and premium complexion finish.',
    tags: ['Bridal', 'Classic'],
    image: image1,
    before: image10,
    after: image1,
    imageFit: 'cover',
  },
  {
    title: 'Support Detail Shot',
    category: 'Salon',
    description: 'Supporting visual from the studio story collection.',
    tags: ['Salon', 'Backdrop'],
    image: image17,
    before: image15,
    after: image17,
    imageFit: 'contain',
  },
  {
    title: 'Nail Accent Detail',
    category: 'Nail Art',
    description: 'Secondary nail detail with subtle luxury color treatment.',
    tags: ['Nail Art', 'Detail'],
    image: image14,
    before: image13,
    after: image14,
    imageFit: 'contain',
  },
];

export const portfolioStats = [
  { value: '240+', label: 'Bridal Looks' },
  { value: '130+', label: 'Party Looks' },
  { value: '80+', label: 'Luxury Sessions' },
];

export const testimonials = [
  {
    name: 'Neha Kapoor',
    type: 'Bridal Client',
    rating: 5,
    image: image16,
    before: image10,
    after: image16,
    quote:
      'I felt calm, confident, and stunning through every ceremony. The finish looked premium in person and on camera.',
  },
  {
    name: 'Ria Fernandes',
    type: 'Engagement Look',
    rating: 5,
    image: image11,
    before: image9,
    after: image11,
    quote:
      'The makeup was soft glam exactly as discussed and lasted till midnight without looking heavy.',
  },
  {
    name: 'Sanya Mehta',
    type: 'Party Glam',
    rating: 5,
    image: image9,
    before: image3,
    after: image9,
    quote:
      'Debo understood my face shape instantly and delivered the most flattering look I have ever had.',
  },
  {
    name: 'Ishita Das',
    type: 'Pre-Wedding Shoot',
    rating: 5,
    image: image10,
    before: image13,
    after: image10,
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

export const productShowcase = [
  {
    brand: 'Huda Beauty',
    image: image3,
    caption: 'Luxury base and glow finish essentials',
    badge: 'Product Flatlay',
    fit: 'cover',
  },
  {
    brand: 'NARS',
    image: image13,
    caption: 'Precision detailing tools and premium accents',
    badge: 'Makeup Tools',
    fit: 'contain',
  },
  {
    brand: 'MAC Cosmetics',
    image: image7,
    caption: 'Artist workstation in active transformation mode',
    badge: 'Artist Station',
    fit: 'cover',
  },
  {
    brand: 'Too Faced',
    image: image12,
    caption: 'Hydration and prep care ritual for skin glow',
    badge: 'Skincare Prep',
    fit: 'contain',
  },
  {
    brand: 'Anastasia Beverly Hills',
    image: image10,
    caption: 'Bridal close-up crafted with premium layering',
    badge: 'Bridal Finish',
    fit: 'cover',
  },
  {
    brand: 'Charlotte Tilbury',
    image: image9,
    caption: 'Event-ready glam styling with luxury softness',
    badge: 'Glam Story',
    fit: 'cover',
  },
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
  image: image16,
  gallery: [image7, image10, image11],
  quote: 'Beauty is not about hiding features, it is about revealing confidence with intention.',
  story:
    'With over 5 years of bridal and glam artistry, Debo has built a premium studio known for elegant finishes, discipline, and calm client experience. Every look starts with listening and ends with confidence.',
  specialties: ['Bridal HD Glam', 'Engagement Looks', 'Skin-First Makeup', 'Editorial Finishing'],
  certifications: ['Advanced Bridal Masterclass', 'HD Makeup Pro Certification', 'Skin Prep & Hygiene Training'],
};

export const instagramPosts = [
  { image: image16, likes: '2.8K', comments: '176' },
  { image: image11, likes: '2.1K', comments: '138' },
  { image: image10, likes: '2.5K', comments: '149' },
  { image: image9, likes: '2.2K', comments: '120' },
  { image: image12, likes: '1.9K', comments: '96' },
  { image: image13, likes: '1.7K', comments: '88' },
];

export const contactVisuals = {
  interior: image7,
  ambience: image12,
  accent: image13,
};

export const footerVisual = image10;

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
