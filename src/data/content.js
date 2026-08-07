// Central content/data module.
// Single source of truth for copy + images for WHIPPY BOIS — ice cream van hire, Slough UK.

export const brand = {
  name: 'WHIPPY BOIS',
  tagline: 'Ice Cream Van Hire · Slough, UK',
  rating: 5.0,
  reviewCount: '240+ reviews',
  eventsServed: '500+',
  since: '2018',
}

// Exact list of towns/areas we cover (used on hero, about + footer).
export const serviceAreas = [
  'Slough',
  'Windsor',
  'Maidenhead',
  'Reading',
  'Bracknell',
  'Ascot',
  'Wokingham',
  'Beaconsfield',
  'High Wycombe',
  'Marlow',
  'Henley-on-Thames',
  'Uxbridge',
  'Langley',
  'Burnham',
  'Gerrards Cross',
  'Eton',
  'London',
  'Surrey',
  'South Bucks',
  'Throughout Berkshire & Oxfordshire',
]

// Local client-provided photos (public/images).
const local = (name) => `/images/${name}`

export const navLinks = [
  { label: 'Menu & Flavors', section: 'menu' },
  { label: 'How it Works', section: 'how-it-works' },
  { label: 'Gallery', section: 'gallery' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

// ---- Hero ----

export const heroImages = [
  {
    src: local('img-1.jpg'),
    alt: 'The WHIPPY BOIS ice cream van, ready to serve',
    tall: true,
  },
  {
    src: local('img-2.jpg'),
    alt: 'Classic soft-serve ice cream being served',
  },
  {
    src: local('img-7.jpg'),
    alt: 'Fresh whippy cones ready to serve',
  },
]

export const ctaImage = {
  src: local('img-4.jpg'),
  alt: 'The WHIPPY BOIS van serving guests at an event',
}

export const aboutImage = {
  src: local('img-5.jpg'),
  alt: 'The WHIPPY BOIS van parked and ready for the day',
}

// ---- Perfect for every event ----

export const eventTypes = [
  {
    id: 1,
    title: 'Weddings',
    blurb: 'A classic 99 station your guests will line up for.',
    image: local('img-1.jpg'),
    alt: 'Ice cream van serving at a celebration',
  },
  {
    id: 2,
    title: 'Birthday Parties',
    blurb: 'The highlight of every kids’ party.',
    image: local('img-3.jpg'),
    alt: 'Soft-serve cones for a birthday party',
  },
  {
    id: 3,
    title: 'School Fetes & Sports Days',
    blurb: 'A guaranteed queue of happy faces.',
    image: local('img-2.jpg'),
    alt: 'Serving whippy cones at a school fete',
  },
  {
    id: 4,
    title: 'Corporate Events',
    blurb: 'Office parties, launches & summer fêtes.',
    image: local('img-6.jpg'),
    alt: 'Ice cream treats at a corporate event',
  },
  {
    id: 5,
    title: 'Festivals & Fun Days',
    blurb: 'High-traffic service that keeps queues smiling.',
    image: local('img-8.jpg'),
    alt: 'Ice cream van at a community festival',
  },
]

// ---- Menu (soft serve, not scooped) ----

export const menu = {
  classic99: {
    title: 'The Classic 99',
    description:
      'Our signature traditional British soft whippy swirl, served in a cone with a chocolate flake. The classic Mr Whippy style — made fresh from the machine, every single time.',
    image: local('img-6.jpg'),
    alt: 'Classic 99 — soft serve cone with a chocolate flake',
  },
  coneTypes: [
    {
      name: 'Single Cone',
      description: 'One generous soft whippy swirl, fresh from the machine.',
    },
    {
      name: 'Double Cone',
      description: 'Two big swirls for extra scoops of happiness.',
    },
    {
      name: 'Waffle Cone',
      description: 'Our classic whippy served in a crisp waffle cone.',
    },
  ],
  flavours: [
    { name: 'Strawberry', description: 'A classic fruity favourite.', color: 'bg-pink-500' },
    { name: 'Chocolate', description: 'Rich, smooth and loved by all.', color: 'bg-[#6b3f1d]' },
    { name: 'Bubblegum', description: 'Fun, bubblegum-blue and full of flavour.', color: 'bg-[#4FC3F7]' },
    { name: 'Lemon', description: 'Zesty, fresh and refreshing.', color: 'bg-yellow-400' },
  ],
  lollies: {
    title: 'Vegan Ice Lollies',
    description:
      'A dairy-free range of frozen lollies — the perfect plant-based treat for every guest.',
    image: local('img-7.jpg'),
    alt: 'Vegan ice lollies from the van',
  },
}

// ---- How it works ----

export const steps = [
  {
    icon: 'calendar',
    step: '01',
    title: 'Tell us about your event',
    description:
      'Share your date, location and guest count in our quick two-minute form — no phone tag needed.',
  },
  {
    icon: 'clipboard',
    step: '02',
    title: 'We send you a free quote',
    description:
      'Get a clear, no-obligation quote within 24 hours, sized to your event and budget.',
  },
  {
    icon: 'sparkles',
    step: '03',
    title: 'Confirm & we serve!',
    description:
      'Lock in your date with a small deposit. We arrive early, set up, and serve smiles all day.',
  },
]

// ---- Why choose us ----

export const whyChooseUs = [
  {
    icon: 'icecream',
    title: 'Traditional soft-serve 99s',
    description:
      'Classic whippy swirls, 99s and vegan lollies — served fresh from the van, never from a tub.',
  },
  {
    icon: 'shield',
    title: 'Trusted & fully insured',
    description:
      '5-star food hygiene rating, public liability insurance and DBS-checked drivers on every event.',
  },
  {
    icon: 'wallet',
    title: 'Flexible packages',
    description:
      'From intimate garden parties to big public festivals — simple packages to fit any budget.',
  },
]

// ---- Gallery ----

export const galleryImages = [
  {
    image: local('img-1.jpg'),
    alt: 'The WHIPPY BOIS van parked and ready to serve',
    caption: 'The van, ready to serve',
  },
  {
    image: local('img-2.jpg'),
    alt: 'Soft-serve cones being served at an event',
    caption: 'Fresh from the machine',
  },
  {
    image: local('img-6.jpg'),
    alt: 'Classic 99 cone with chocolate flake',
    caption: 'The classic 99',
  },
  {
    image: local('img-3.jpg'),
    alt: 'Whippy cone being handed to a happy guest',
    caption: 'Serving smiles all day',
  },
  {
    image: local('img-7.jpg'),
    alt: 'Vegan ice lollies on offer',
    caption: 'Vegan lollies too',
  },
  {
    image: local('img-8.jpg'),
    alt: 'The van at a community event',
    caption: 'At your event next?',
  },
]

// ---- Testimonials ----

export const testimonials = [
  {
    quote:
      'The van was the highlight of our wedding — guests are still talking about the 99s!',
    name: 'Sarah & Tom',
    event: 'Wedding · Windsor, June 2026',
  },
  {
    quote:
      'Booking was so easy: quote the next day, they arrived early, and the kids were over the moon.',
    name: 'Marcus',
    event: 'Birthday Party · Slough, May 2026',
  },
  {
    quote:
      'Perfect for our company summer party. Professional, fast service and everyone went back for seconds.',
    name: 'Elena',
    event: 'Corporate Event · Reading, Apr 2026',
  },
  {
    quote:
      'Our school fete queue was huge all afternoon — best decision we made all weekend.',
    name: 'Mrs. Patel',
    event: 'School Fete · Maidenhead, Jul 2026',
  },
]

// ---- Blog ----

export const blogPosts = [
  {
    id: 1,
    slug: 'ice-cream-van-wedding',
    date: 'Jul 28, 2026',
    readTime: '6 min read',
    title: '5 Reasons to Add an Ice Cream Van to Your Wedding',
    excerpt:
      'From memorable photo moments to crowd-pleasing dessert, here’s why couples love a classic 99 station.',
    image: local('img-3.jpg'),
    alt: 'Soft-serve cone being served at a wedding',
    sections: [
      {
        heading: '1. A dessert moment your guests will actually photograph',
        body: [
          'Wedding desserts are about memories as much as taste. Our classic soft-serve van gives you an instant photo spot — the bright van, the queue of laughing guests, and that first 99 in the evening light.',
          'Because it looks nothing like a standard dessert table, it stands out in every frame and keeps the energy playful long after the formal dinner is over.',
        ],
      },
      {
        heading: '2. Crowd-pleasing for every age',
        body: [
          'From three-year-olds to grandparents, everyone loves a whippy 99. With classic flavours plus vegan ice lollies on the menu, there’s a treat for every guest — no dietary guesswork required.',
          'Soft serve is also faster to serve than plated desserts, which means fewer bottlenecks and happier guests.',
        ],
      },
      {
        heading: '3. A flexible, budget-friendly add-on',
        body: [
          'Compared to a plated dessert or a large custom cake, a soft-serve station is remarkably affordable. Packages scale with your guest count, and we often build bespoke options around your venue and timeline.',
          'Many couples find the van replaces two or three smaller dessert expenses in one fun, memorable booking.',
        ],
      },
      {
        heading: '4. Keeps the party cool and the dancing going',
        body: [
          'Serve the 99s mid-evening, right when the dance floor is heating up. The sugar rush keeps the energy up, and the queue becomes its own social moment — guests chat, pose and mingle while they wait.',
        ],
      },
      {
        heading: '5. No plates, no cutlery, no waste',
        body: [
          'Cones and compostable cups mean zero washing up and very little waste. Your planner, your venue team and the planet all say thank you.',
        ],
      },
    ],
  },
  {
    id: 2,
    slug: 'ice-cream-van-cost',
    date: 'Jul 15, 2026',
    readTime: '4 min read',
    title: 'How Much Does an Ice Cream Van Cost for a Party?',
    excerpt:
      'A simple breakdown of packages, guest counts and what’s really included in the price.',
    image: local('img-6.jpg'),
    alt: 'Classic 99 soft serve cone',
    sections: [
      {
        heading: 'The short answer',
        body: [
          'Most ice cream van bookings fall into a simple hourly or package model. The final price depends mostly on how many guests you’re serving, how long you need us, and whether you add extras like vegan lollies or extra flavours.',
        ],
      },
      {
        heading: 'What shapes the price',
        body: [
          'Here are the big levers that move your quote up or down:',
        ],
        list: [
          'Guest count — most packages price per person, with bulk discounts at higher counts',
          'Duration — a 2-hour window covers most events; longer service costs more',
          'Cone & flavour choices — single, double and waffle cones; classic flavours are all included',
          'Travel distance — local venues across Berkshire pay less than long drives',
          'Time of year — summer weekends book fast and sometimes carry a premium',
        ],
      },
      {
        heading: 'Typical package ranges',
        body: [
          'As a general guide, intimate gatherings under 50 guests fit neatly into a compact package, mid-size parties land in the standard range, and large festivals and weddings get the best per-guest rate of all.',
          'The exact numbers depend on your date and details — that’s why we always confirm a clear, itemised quote before you pay a deposit.',
        ],
      },
      {
        heading: 'Hidden costs to ask about',
        body: [
          'A good quote includes everything: arrival and setup time, power or generator, permits where required, and staff. We quote all-in, so there are no surprise fees on the day — and we recommend you ask any vendor the same.',
        ],
      },
      {
        heading: 'Make the most of your budget',
        body: [
          'Pick classic whippy flavours and let guests add their own toppings — shorter menus serve faster and waste less. Book a slightly shorter window and let guests flow through in waves. And ask about off-peak dates, which can save you real money.',
        ],
      },
    ],
  },
  {
    id: 3,
    slug: 'dessert-station-timeline',
    date: 'Jun 30, 2026',
    readTime: '5 min read',
    title: 'Planning Your Event Timeline with a Dessert Station',
    excerpt:
      'When to serve, how to set up and how to keep the line moving — a planner’s cheat sheet.',
    image: local('img-1.jpg'),
    alt: 'The WHIPPY BOIS van at an event',
    sections: [
      {
        heading: 'When to serve dessert',
        body: [
          'The sweet spot is usually 30–60 minutes after the main meal, when the dance floor is about to open or just after your first dance. Serving at that natural lull keeps guests on site and gives everyone a reason to linger.',
          'For longer events, a second, shorter service window later in the night keeps the energy going without blocking other activities.',
        ],
      },
      {
        heading: 'A sample timeline',
        body: [
          'Here’s how a typical afternoon or evening flows when the van is on site:',
        ],
        list: [
          'Arrival & setup — we arrive 60–90 minutes before serving for positioning and prep',
          'Serve window — 1.5–2 hours of continuous service at peak energy',
          'Close-down — we’re packed up quietly while your event continues',
        ],
      },
      {
        heading: 'Setup tips that keep the line moving',
        body: [
          'Give us a clear, level spot with good lighting and easy access. A shaded or covered position keeps the queue comfortable, and an efficient two-server setup means most guests are served in a minute or two.',
        ],
      },
      {
        heading: 'Plan for the weather',
        body: [
          'We always bring backup plans for heat and rain — shade, canopies and, on scorching days, extra stock. Tell us your venue’s indoor option and we’ll make sure your dessert moment happens whatever the sky does.',
        ],
      },
    ],
  },
]

// ---- Footer ----

export const footerLinks = {
  Explore: [
    { label: 'Home', to: '/' },
    { label: 'Menu & Flavors', to: '/#menu' },
    { label: 'Gallery', to: '/#gallery' },
    { label: 'How it Works', to: '/#how-it-works' },
  ],
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Contact', to: '/contact' },
    { label: 'Blog & Tips', to: '/#blog' },
    { label: 'Privacy Policy', to: '/privacy-policy' },
  ],
}

export const contactInfo = {
  email: 'whippybois@gmail.com',
  phone: '07748 878588',
  address: 'Based in Slough, UK · Serving Berkshire, Oxfordshire & beyond',
}
