const { createClient } = require('@sanity/client');
const slugify = require('slugify');

// Initialize Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-10-01',
});

// Sample startup data - Mix of global and African startups
const sampleStartups = [
  {
    title: "Chari - B2B E-commerce for Small Grocery Stores",
    description: "B2B e-commerce platform for small grocery stores in Morocco, providing FMCG distribution and fintech tools to digitize and streamline supply chains for informal retailers.",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    pitch: `# Chari: Digitizing Morocco's Informal Retail

## The Challenge
- 80% of grocery retail in Morocco is informal and underserved
- Small shops struggle with supply chain inefficiencies
- Limited access to financial services and digital tools
- High costs and waste in traditional distribution

## Our Solution
Chari provides a comprehensive B2B platform that:
- **Connects small retailers** with suppliers directly
- **Streamlines supply chains** with real-time inventory management
- **Offers fintech tools** for payments and credit
- **Reduces costs** through bulk purchasing and logistics optimization

## Key Features
- 🛒 Digital marketplace for FMCG products
- 💳 Integrated payment and credit solutions
- 📱 Mobile-first platform for easy adoption
- 🚚 Optimized logistics and delivery network
- 📊 Analytics and insights for retailers

## Market Impact
- Serves 50,000+ small retailers across Morocco
- 40% reduction in supply chain costs
- 60% improvement in inventory turnover
- $2M+ in credit extended to small businesses

## Technology
- Mobile app for retailers and suppliers
- AI-powered demand forecasting
- Integrated payment gateway
- Real-time inventory tracking

## Traction
- 15,000+ active retailers
- 500+ supplier partners
- $10M+ GMV processed monthly
- 95% customer retention rate

## The Vision
Transform Africa's informal retail sector through technology and financial inclusion.

## Funding
$5M Series A to expand across North Africa and add more fintech services.`,
    views: 0
  },
  {
    title: "MaxAB - Food & Grocery Supply Chain Platform",
    description: "Tech platform connecting traditional retailers with food and grocery suppliers in Egypt, fixing inefficiencies and reducing costs in the supply chain.",
    category: "Supply Chain",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    pitch: `# MaxAB: Revolutionizing Egypt's Food Supply Chain

## The Problem
- Traditional food distribution is highly fragmented in Egypt
- Small retailers face high costs and supply chain inefficiencies
- 30% of food is wasted due to poor logistics
- Limited access to quality products and fair pricing

## Our Innovation
MaxAB creates a direct connection between retailers and suppliers:
- **Eliminates middlemen** in the supply chain
- **Provides fair pricing** through transparent marketplace
- **Optimizes logistics** with data-driven delivery routes
- **Reduces waste** through better demand forecasting

## Key Features
- 🏪 Direct supplier-to-retailer marketplace
- 💰 Transparent pricing and fair trade
- 🚛 Optimized last-mile delivery
- 📱 Mobile app for easy ordering
- 📈 Data analytics for better decisions

## Market Opportunity
- $50B food retail market in Egypt
- 200,000+ traditional retailers underserved
- Growing demand for quality and convenience
- Huge potential for waste reduction

## Technology
- AI-powered demand forecasting
- Route optimization algorithms
- Mobile-first ordering platform
- Real-time inventory management

## Traction
- 25,000+ active retailers
- 300+ supplier partners
- 50% reduction in delivery costs
- $15M+ GMV processed monthly

## Impact
- Improved margins for retailers by 25%
- Reduced food waste by 40%
- Created 500+ direct jobs
- Enhanced food security in underserved areas

## Funding
$8M Series A to expand across MENA region and add fintech services.`,
    views: 0
  },
  {
    title: "InstaDeep - AI for Complex Optimization",
    description: "Tunisian AI company solving complex optimization problems across various sectors including biology, logistics, and supply chain using advanced machine learning.",
    category: "Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    pitch: `# InstaDeep: AI Innovation from North Africa

## The Mission
- Bring cutting-edge AI solutions to complex real-world problems
- Prove that deep tech innovation can emerge from North Africa
- Create global impact through local expertise and talent

## Our Expertise
InstaDeep specializes in solving optimization challenges across:
- **Biology & Drug Discovery** - Accelerating pharmaceutical research
- **Logistics & Supply Chain** - Optimizing complex distribution networks
- **Financial Services** - Risk management and algorithmic trading
- **Energy & Utilities** - Smart grid optimization and renewable energy

## Key Technologies
- 🧠 Deep reinforcement learning
- 🔬 Computational biology and drug design
- 📊 Advanced optimization algorithms
- ☁️ Scalable cloud-based AI platforms
- 🔍 Computer vision and NLP

## Global Recognition
- Featured in TIME's 100 Most Influential Companies
- Partnerships with major pharmaceutical companies
- Research published in top-tier AI journals
- Team of 200+ AI researchers and engineers

## Market Impact
- Accelerated drug discovery timelines by 40%
- Optimized logistics networks saving $100M+ annually
- Created 200+ high-tech jobs in Tunisia
- Trained 1000+ AI professionals across Africa

## Innovation
- Proprietary deep learning frameworks
- Novel approaches to combinatorial optimization
- Breakthrough research in computational biology
- Open-source contributions to AI community

## The Vision
Establish North Africa as a global hub for AI innovation and talent.

## Funding
$20M Series B to expand research capabilities and scale globally.`,
    views: 0
  },
  {
    title: "Yassir - Super-App for North Africa",
    description: "Algerian super-app offering rides, delivery, e-commerce, and financial services, consolidating multiple services into one platform for users across North Africa.",
    category: "Super App",
    image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop",
    pitch: `# Yassir: The Super-App Revolutionizing North Africa

## The Opportunity
- 100M+ people in North Africa underserved by digital services
- Fragmented market with multiple apps for different needs
- Huge potential for financial inclusion and digital transformation
- Growing smartphone penetration and mobile-first population

## Our Platform
Yassir consolidates essential services into one app:
- **Transportation** - Safe and reliable ride-hailing
- **Delivery** - Food, groceries, and package delivery
- **E-commerce** - Marketplace for local and international products
- **Financial Services** - Digital payments and money transfers
- **Other Services** - Healthcare, education, and more

## Key Features
- 🚗 Multi-modal transportation options
- 🛒 Integrated marketplace and delivery
- 💳 Digital wallet and payment solutions
- 📱 Single app for all daily needs
- 🌍 Localized for North African markets

## Market Traction
- 5M+ active users across North Africa
- 50,000+ driver partners
- 10,000+ merchant partners
- $50M+ GMV processed monthly
- 4.8/5 app store rating

## Technology
- Advanced matching algorithms
- Real-time tracking and optimization
- Secure payment processing
- Multi-language support
- Offline-capable features

## Impact
- Created 50,000+ income opportunities
- Improved access to essential services
- Enhanced financial inclusion
- Reduced urban congestion through shared mobility

## The Vision
Become the leading super-app platform across Africa and the Middle East.

## Funding
$30M Series B to expand across Africa and add more verticals.`,
    views: 0
  },
  {
    title: "Paymob - Digital Payments for Small Businesses",
    description: "Egyptian fintech platform enabling digital payments and financial services for small businesses, improving financial inclusion across the region.",
    category: "Fintech",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    pitch: `# Paymob: Democratizing Digital Payments in Egypt

## The Challenge
- 70% of small businesses in Egypt lack access to digital payments
- High barriers to entry for traditional payment systems
- Limited financial inclusion for underserved merchants
- Cash-dependent economy limiting growth potential

## Our Solution
Paymob provides accessible digital payment infrastructure:
- **Easy onboarding** for small businesses and merchants
- **Multiple payment methods** - cards, mobile wallets, bank transfers
- **Affordable pricing** with transparent fee structure
- **Local support** in Arabic with regional expertise

## Key Features
- 💳 Accept all major payment methods
- 📱 Mobile-first merchant dashboard
- 🔒 Bank-grade security and compliance
- 📊 Real-time analytics and reporting
- 🌍 Multi-currency support

## Market Impact
- 100,000+ merchants enabled with digital payments
- $2B+ in payment volume processed
- 60% increase in sales for small merchants
- Created 1,000+ jobs in fintech sector

## Technology
- PCI DSS compliant payment infrastructure
- Real-time fraud detection
- API-first architecture for easy integration
- Mobile SDKs for seamless implementation

## Traction
- 150,000+ active merchants
- 50+ bank partnerships
- 99.9% uptime reliability
- 4.9/5 customer satisfaction rating

## Financial Inclusion
- Reduced payment processing costs by 70%
- Enabled 50,000+ previously unbanked merchants
- Increased digital payment adoption by 300%
- Supported 1M+ transactions monthly

## The Vision
Make digital payments accessible to every business in the Middle East and Africa.

## Funding
$15M Series A to expand across MENA and add lending services.`,
    views: 0
  },
  {
    title: "Revadex - Circular Economy Waste Marketplace",
    description: "Algerian platform connecting waste producers with recyclers through a digital marketplace, deploying collection boxes and building recycling infrastructure.",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&h=600&fit=crop",
    pitch: `# Revadex: Building Algeria's Circular Economy

## The Environmental Crisis
- Algeria generates 13M tons of waste annually
- Only 5% of waste is properly recycled
- Limited recycling infrastructure and awareness
- Environmental pollution and resource waste

## Our Innovation
Revadex creates a circular economy ecosystem:
- **Digital marketplace** connecting waste producers with recyclers
- **Smart collection boxes** for easy waste separation
- **Educational programs** to increase recycling awareness
- **Data analytics** to optimize collection routes and processes

## Key Features
- ♻️ Waste-to-resource marketplace
- 📦 Smart collection infrastructure
- 📱 Mobile app for waste tracking
- 🎓 Community education programs
- 📊 Environmental impact reporting

## Market Opportunity
- $2B waste management market in Algeria
- Growing environmental consciousness
- Government support for circular economy
- Huge potential for job creation

## Technology
- IoT-enabled smart collection boxes
- AI-powered waste sorting and routing
- Blockchain for transparent waste tracking
- Mobile app with gamification features

## Environmental Impact
- Diverted 1,000+ tons from landfills
- Created 200+ recycling jobs
- Educated 50,000+ people about recycling
- Reduced carbon emissions by 500+ tons

## Traction
- 10,000+ active users
- 100+ recycling partners
- 500+ collection boxes deployed
- 80% waste diversion rate

## The Vision
Transform Algeria into a zero-waste society through technology and community engagement.

## Funding
$3M Series A to scale across Algeria and expand to other North African countries.`,
    views: 0
  },
  {
    title: "Shems Wa Tabrid - Solar-Powered Refrigeration",
    description: "Algerian company providing solar-powered refrigeration solutions for remote and off-grid areas, helping reduce food spoilage and improve cold chain access.",
    category: "Clean Energy",
    image: "https://images.unsplash.com/photo-1509391366360-2e959b9e7236?w=800&h=600&fit=crop",
    pitch: `# Shems Wa Tabrid: Solar Cold Chain for Off-Grid Communities

## The Challenge
- 30% of food spoils in Algeria due to lack of refrigeration
- Remote areas have unreliable or no electricity access
- Traditional refrigeration is expensive and energy-intensive
- Critical need for cold chain in agriculture and healthcare

## Our Solution
Solar-powered refrigeration systems that work off-grid:
- **Direct DC solar power** - No inverter needed, more efficient
- **Battery storage** for 24/7 operation
- **Modular design** for easy installation and maintenance
- **Affordable pricing** for rural communities

## Key Features
- ☀️ 100% solar-powered operation
- 🔋 48-hour backup battery storage
- 🌡️ Precise temperature control
- 📱 Remote monitoring via mobile app
- 🛠️ Easy installation and maintenance

## Market Impact
- 500+ refrigeration units deployed
- 40% reduction in food spoilage
- 200+ jobs created in rural areas
- $2M+ in agricultural value preserved

## Technology
- High-efficiency DC compressors
- Advanced battery management systems
- IoT sensors for remote monitoring
- Weather-resistant design for harsh climates

## Applications
- **Agriculture** - Post-harvest storage and processing
- **Healthcare** - Vaccine and medicine storage
- **Food Service** - Restaurants and catering
- **Residential** - Household refrigeration

## Traction
- 1,000+ units sold across Algeria
- 95% customer satisfaction rate
- 50+ dealer partnerships
- 3-year warranty and support

## The Vision
Bring reliable cold storage to every off-grid community in Africa.

## Funding
$5M Series A to scale manufacturing and expand across North Africa.`,
    views: 0
  }
];

async function seedStartups() {
  try {
    console.log('🌱 Starting to seed startups...');
    
    // First, let's check if we have any authors
    const authors = await client.fetch('*[_type == "author"]');
    console.log(`Found ${authors.length} authors in the database`);
    
    let authorId;
    
    if (authors.length === 0) {
      console.log('⚠️  No authors found. Creating a default author...');
      
      const defaultAuthor = await client.create({
        _type: 'author',
        name: 'Demo Author',
        username: 'demo-author',
        email: 'demo@example.com',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
        bio: 'Demo author for sample startups'
      });
      
      authorId = defaultAuthor._id;
      console.log(`✅ Created default author: ${authorId}`);
    } else {
      // Use the first available author
      authorId = authors[0]._id;
      console.log(`✅ Using existing author: ${authors[0].name}`);
    }
    
    // Create startups
    const createdStartups = [];
    
    for (const startupData of sampleStartups) {
      const slug = slugify(startupData.title, { lower: true, strict: true });
      
      const startup = {
        _type: 'startup',
        title: startupData.title,
        description: startupData.description,
        category: startupData.category,
        image: startupData.image,
        views: startupData.views,
        slug: {
          _type: 'slug',
          current: slug,
        },
        author: {
          _type: 'reference',
          _ref: authorId,
        },
        pitch: startupData.pitch,
      };
      
      const result = await client.create(startup);
      createdStartups.push(result);
      console.log(`✅ Created startup: ${startupData.title} (${result._id})`);
    }
    
    console.log(`🎉 Successfully seeded ${createdStartups.length} startups!`);
    console.log('Startup IDs:');
    createdStartups.forEach(startup => {
      console.log(`- ${startup.title}: ${startup._id}`);
    });
    
  } catch (error) {
    console.error('❌ Error seeding startups:', error);
  }
}

// Run the seeding function
seedStartups();
