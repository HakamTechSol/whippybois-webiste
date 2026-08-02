// Central content/data module.
// Single source of truth for copy + images for the Sweet Scoops ice cream van business.

export const brand = {
  name: 'Sweet Scoops',
  tagline: 'Mobile Ice Cream Van',
  rating: 5.0,
  reviewCount: '240+ reviews',
  eventsServed: '500+',
}

// Build a content-accurate Unsplash image URL (direct images.unsplash.com links —
// the old source.unsplash.com service was shut down).
const unsplash = (id, w, h) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`

export const navLinks = [
  { label: 'Menu & Flavors', section: 'menu' },
  { label: 'How it Works', section: 'how-it-works' },
  { label: 'Gallery', section: 'gallery' },
  { label: 'Contact', to: '/contact' },
]

// ---- Hero ----

export const heroImages = [
  {
    src: unsplash('photo-1547055487-4679321a2d62', 520, 660),
    alt: 'Classic white ice cream van parked and ready to serve',
    tall: true,
  },
  {
    src: unsplash('photo-1497034825429-c343d7c6a68f', 420, 300),
    alt: 'Fresh scoop of ice cream being handed over in a cone',
  },
  {
    src: unsplash('photo-1563805042-7684c019e1cb', 420, 300),
    alt: 'Happy guest enjoying an ice cream cone at an event',
  },
]

export const ctaImage = {
  src: unsplash('photo-1530547178427-f2bdfbf3b64f', 1200, 520),
  alt: 'Guests lined up at the ice cream van at an outdoor event',
}

export const aboutImage = {
  src: unsplash('photo-1754824321161-764fb98adc71', 900, 700),
  alt: 'The ice cream van parked by the seaside, ready for the day',
}

// ---- Perfect for every event ----

export const eventTypes = [
  {
    id: 1,
    title: 'Weddings',
    blurb: 'A sweet station your guests will line up for.',
    image: unsplash('photo-1519741497674-611481863552', 400, 300),
    alt: 'Couple celebrating with sparklers at their wedding',
  },
  {
    id: 2,
    title: 'Birthday Parties',
    blurb: 'The highlight of every kids’ party.',
    image: unsplash('photo-1530103862676-de8c9debad1d', 400, 300),
    alt: 'Confetti falling during a birthday celebration',
  },
  {
    id: 3,
    title: 'Corporate Events',
    blurb: 'Office parties, summer fêtes & launches.',
    image: unsplash('photo-1511578314322-379afb476865', 400, 300),
    alt: 'Guests mingling at a styled corporate event',
  },
  {
    id: 4,
    title: 'Festivals & Fairs',
    blurb: 'High-traffic service that keeps queues smiling.',
    image: unsplash('photo-1470225620780-dba8ba36b745', 400, 300),
    alt: 'Live music and lights at an outdoor festival',
  },
  {
    id: 5,
    title: 'Private Parties',
    blurb: 'Backyard BBQs, reunions & everything between.',
    image: unsplash('photo-1511795409834-ef04bbd61622', 400, 300),
    alt: 'Guests raising a toast at a private party',
  },
]

// ---- Menu / Flavors ----

export const flavors = [
  {
    id: 1,
    name: 'Classic Vanilla',
    description: 'Real Madagascar vanilla, made fresh daily.',
    tag: 'Best seller',
    image: unsplash('photo-1497034825429-c343d7c6a68f', 400, 300),
    alt: 'Classic vanilla ice cream in a cone',
  },
  {
    id: 2,
    name: 'Chocolate Fudge',
    description: 'Rich Belgian chocolate with fudge swirls.',
    tag: null,
    image: unsplash('photo-1501443762994-82bd5dace89a', 400, 300),
    alt: 'Chocolate fudge ice cream dessert',
  },
  {
    id: 3,
    name: 'Strawberry Swirl',
    description: 'Sweet strawberries churned into a summer classic.',
    tag: null,
    image: unsplash('photo-1560008581-09826d1de69e', 400, 300),
    alt: 'Strawberry ice cream with fresh berries',
  },
  {
    id: 4,
    name: 'Mango Sorbet',
    description: 'Dairy-free, bursting with ripe mango.',
    tag: 'Dairy-free',
    image: unsplash('photo-1580915411954-282cb1b0d780', 400, 300),
    alt: 'Mango sorbet scoops in a bowl',
  },
  {
    id: 5,
    name: 'Cookies & Cream',
    description: 'Crunchy cookie crumble in creamy vanilla.',
    tag: null,
    image: unsplash('photo-1557142046-c704a3adf364', 400, 300),
    alt: 'Cookies and cream milkshake',
  },
  {
    id: 6,
    name: 'Salted Caramel',
    description: 'Golden caramel with a pinch of sea salt.',
    tag: 'Cup or cone',
    image: unsplash('photo-1570197788417-0e82375c9371', 400, 300),
    alt: 'Salted caramel ice cream sundae',
  },
]

export const toppings = [
  'Sprinkles',
  'Fudge Sauce',
  'Whipped Cream',
  'Oreo Crumbles',
  'Fresh Strawberries',
  'Mango Chunks',
  'Chocolate Shavings',
  'Waffle Pieces',
]

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
    title: 'We send you a tailored quote',
    description:
      'Get a clear, no-obligation quote within 24 hours, with a package sized to your event.',
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
    title: 'Fresh, real ice cream',
    description:
      'Premium flavors made with real cream and fruit — never artificial junk. Made fresh, served cold.',
  },
  {
    icon: 'shield',
    title: 'Fully insured & experienced',
    description:
      'Licensed, insured and trusted at 500+ weddings, parties and festivals of every size.',
  },
  {
    icon: 'wallet',
    title: 'Flexible packages',
    description:
      'From intimate gatherings to big festival crowds — simple packages to fit any budget.',
  },
]

// ---- Gallery ----

export const galleryImages = [
  {
    image: unsplash('photo-1754824321161-764fb98adc71', 600, 480),
    alt: 'The ice cream van parked and ready to serve',
    caption: 'The van, ready to serve',
  },
  {
    image: unsplash('photo-1530547178427-f2bdfbf3b64f', 600, 480),
    alt: 'Guests lining up at the ice cream van',
    caption: 'Guests lining up at an event',
  },
  {
    image: unsplash('photo-1611143669185-af224c5e3252', 600, 480),
    alt: 'Ice cream cones topped with colorful sprinkles',
    caption: 'Cones with all the toppings',
  },
  {
    image: unsplash('photo-1532987625322-5949307b5bc4', 600, 480),
    alt: 'Serving scoops from the van window',
    caption: 'Serving from the window',
  },
  {
    image: unsplash('photo-1709625088472-9d248f74f215', 600, 480),
    alt: 'Fresh ice cream scoop in a cone',
    caption: 'Summer scoops',
  },
  {
    image: unsplash('photo-1541783245831-57d6fb0926d3', 600, 480),
    alt: 'Guests enjoying ice cream cones together',
    caption: 'First bites, best moments',
  },
]

// ---- Testimonials ----

export const testimonials = [
  {
    quote:
      'The van was the highlight of our wedding — guests are still talking about the strawberry swirl!',
    name: 'Sarah & Tom',
    event: 'Wedding · June 2026',
  },
  {
    quote:
      'Booking was so easy: quote the next day, they arrived early, and the kids were over the moon.',
    name: 'Marcus',
    event: 'Birthday Party · May 2026',
  },
  {
    quote:
      'Perfect for our company summer party. Professional, fast service and everyone went back for seconds.',
    name: 'Elena',
    event: 'Corporate Event · Apr 2026',
  },
  {
    quote:
      'Our festival crowd queued all afternoon — best decision we made all weekend.',
    name: 'Diego',
    event: 'Festival · Jul 2026',
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
      'From memorable photo moments to crowd-pleasing dessert, here’s why couples love a scoop station.',
    image: unsplash('photo-1522673607200-164d1b6ce486', 800, 500),
    alt: 'Couple celebrating with sparklers at their wedding',
    sections: [
      {
        heading: '1. A dessert moment your guests will actually photograph',
        body: [
          'Wedding desserts are about memories as much as taste. A classic ice cream van gives you an instant photo spot — the bright van, the queue of laughing guests, and that first scoop moment in the evening light.',
          'Because it looks nothing like a standard dessert table, it stands out in every frame and keeps the energy playful long after the formal dinner is over.',
        ],
      },
      {
        heading: '2. Crowd-pleasing for every age',
        body: [
          'From three-year-olds to grandparents, everyone loves ice cream. With classic vanilla, chocolate fudge and dairy-free mango sorbet on the menu, there’s a scoop for every guest — no dietary guesswork required.',
          'A van also serves far faster than plated desserts, which means fewer bottlenecks and happier guests.',
        ],
      },
      {
        heading: '3. A flexible, budget-friendly add-on',
        body: [
          'Compared to a multi-course plated dessert or a large custom cake, a scoop station is remarkably affordable. Packages scale with your guest count, and we often build bespoke options around your venue and timeline.',
          'Many couples find the van replaces two or three smaller dessert expenses in one fun, memorable booking.',
        ],
      },
      {
        heading: '4. Keeps the party cool and the dancing going',
        body: [
          'Serve the scoops mid-evening, right when the dance floor is heating up. The short sugar rush keeps the energy up, and the queue becomes its own social moment — guests chat, pose and mingle while they wait.',
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
    image: unsplash('photo-1501443762994-82bd5dace89a', 800, 500),
    alt: 'Chocolate ice cream dessert with fudge',
    sections: [
      {
        heading: 'The short answer',
        body: [
          'Most ice cream van bookings fall into a simple hourly or package model. The final price depends mostly on how many guests you’re serving, how long you need us, and whether you add extras like toppings bars or custom flavors.',
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
          'Flavors & toppings — free toppings are standard; premium flavors may add a little',
          'Travel distance — local venues pay less than long drives',
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
          'Pick two or three crowd-pleasing flavors instead of a long menu — shorter menus serve faster and waste less. Book a slightly shorter window and let guests flow through in waves. And ask about off-peak dates, which can save you real money.',
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
    image: unsplash('photo-1709398499829-f95ebe6aad9a', 800, 500),
    alt: 'Ice cream van parked at the seaside',
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
          'Here’s how a typical evening flows when the van is on site:',
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
  email: 'hello@sweetscoops.com',
  phone: '+1 (555) 010-2026',
  address: 'Serving Philadelphia & surrounding areas',
}
