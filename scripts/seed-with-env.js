const { createClient } = require('@sanity/client');
const slugify = require('slugify');
const fs = require('fs');
const path = require('path');

// Load environment variables from .env.local
function loadEnvFile() {
  try {
    const envPath = path.join(process.cwd(), '.env.local');
    const envFile = fs.readFileSync(envPath, 'utf8');
    const envVars = {};
    
    envFile.split('\n').forEach(line => {
      const [key, ...valueParts] = line.split('=');
      if (key && valueParts.length > 0) {
        const value = valueParts.join('=').trim();
        envVars[key.trim()] = value;
      }
    });
    
    return envVars;
  } catch (error) {
    console.error('Error loading .env.local file:', error.message);
    return {};
  }
}

// Load environment variables
const env = loadEnvFile();

// Initialize Sanity client
const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  token: env.SANITY_WRITE_TOKEN,
  useCdn: false,
  apiVersion: '2024-10-01',
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
  },
  {
    title: "Flutterwave - African Payment Infrastructure",
    description: "Nigerian fintech company providing payment infrastructure for businesses across Africa, enabling seamless cross-border transactions and financial inclusion.",
    category: "Fintech",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    pitch: `# Flutterwave: Powering Africa's Digital Economy

## The Challenge
- 60% of Africans are unbanked or underbanked
- Cross-border payments are expensive and slow
- Limited payment options for online businesses
- Fragmented financial infrastructure across 54 countries

## Our Solution
Flutterwave provides unified payment infrastructure:
- **Single API** for all African payment methods
- **Cross-border transfers** in 150+ currencies
- **Multi-channel payments** - cards, mobile money, bank transfers
- **Developer-friendly tools** for easy integration

## Key Features
- 💳 150+ payment methods across Africa
- 🌍 Multi-currency support and conversion
- 🔒 PCI DSS compliant security
- 📱 Mobile-first payment solutions
- 🛠️ Simple APIs and SDKs

## Market Impact
- 1M+ businesses using our platform
- $20B+ in payment volume processed
- 500,000+ merchants across 40+ countries
- 99.9% uptime reliability

## Technology
- Cloud-native payment infrastructure
- Real-time fraud detection and prevention
- Machine learning for risk assessment
- Blockchain for cross-border settlements

## Traction
- $3B+ in total payment volume
- 2M+ transactions processed monthly
- 40+ African countries supported
- Partnerships with major banks and telcos

## Financial Inclusion
- Enabled 500,000+ small businesses to accept digital payments
- Reduced cross-border transfer costs by 80%
- Processed $1B+ in mobile money transactions
- Created 10,000+ jobs across Africa

## The Vision
Make it easy for businesses to accept payments anywhere in Africa.

## Funding
$250M Series D to expand globally and add more financial services.`,
    views: 0
  },
  {
    title: "Andela - Global Engineering Talent",
    description: "Nigerian company building the world's largest network of remote software engineers, connecting African talent with global companies.",
    category: "EdTech",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    pitch: `# Andela: Building the Future of Work

## The Opportunity
- 1.3M software developers in Africa, growing 20% annually
- Global shortage of 1M+ software engineers
- Remote work becoming the new standard
- African talent is highly skilled but underrepresented globally

## Our Mission
Andela connects the world's best engineering talent with global companies:
- **Rigorous training** in modern software development
- **Remote work opportunities** with top-tier companies
- **Career development** and mentorship programs
- **Global community** of 100,000+ engineers

## Key Features
- 🎓 6-month intensive training program
- 💼 Remote work with Fortune 500 companies
- 👥 1:1 mentorship and career coaching
- 🌍 Global community and networking
- 📈 Continuous learning and upskilling

## Market Impact
- 100,000+ engineers trained across Africa
- $200M+ in salaries paid to African developers
- 500+ global companies hiring through Andela
- 95% job placement rate for graduates

## Technology
- AI-powered talent matching
- Comprehensive learning management system
- Real-time collaboration tools
- Performance tracking and analytics

## Traction
- 10,000+ active engineers
- 500+ partner companies
- 40+ countries represented
- $100M+ in total funding raised

## Social Impact
- Created 10,000+ high-paying tech jobs in Africa
- Increased average developer salary by 300%
- Trained 50,000+ women in software engineering
- Built tech communities in 15+ African cities

## The Vision
Make remote work the default for the world's best engineering talent.

## Funding
$200M+ total raised to scale globally and expand training programs.`,
    views: 0
  },
  {
    title: "Jumia - E-commerce Marketplace",
    description: "Nigerian e-commerce platform operating across 11 African countries, providing online shopping, delivery, and payment solutions for consumers and businesses.",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    pitch: `# Jumia: Africa's Leading E-commerce Platform

## The Market Opportunity
- 1.2B people in Africa with growing internet penetration
- E-commerce represents only 1% of retail sales (vs 15% globally)
- Limited online shopping options and delivery infrastructure
- Huge potential for digital transformation

## Our Platform
Jumia provides comprehensive e-commerce solutions:
- **Online marketplace** for 100M+ products
- **Last-mile delivery** to 11 African countries
- **Payment solutions** including mobile money and cards
- **Logistics network** with 50+ warehouses

## Key Features
- 🛒 100M+ products across all categories
- 🚚 Same-day delivery in major cities
- 💳 Multiple payment options including mobile money
- 📱 Mobile-first shopping experience
- 🏪 JumiaPay for merchants and consumers

## Market Traction
- 8M+ active customers across Africa
- 100,000+ sellers on the platform
- 50+ warehouses and fulfillment centers
- $1B+ in GMV processed annually

## Technology
- AI-powered product recommendations
- Advanced logistics optimization
- Mobile-first platform design
- Real-time inventory management

## Impact
- Created 50,000+ jobs across Africa
- Enabled 100,000+ small businesses to sell online
- Processed $5B+ in transactions
- Improved access to quality products

## Geographic Presence
- **West Africa**: Nigeria, Ghana, Ivory Coast, Senegal
- **East Africa**: Kenya, Uganda, Tanzania
- **North Africa**: Egypt, Morocco, Tunisia
- **Central Africa**: Cameroon

## The Vision
Make online shopping accessible to every African consumer.

## Funding
$1B+ raised to expand across Africa and add new services.`,
    views: 0
  },
  {
    title: "mPharma - Healthcare Access Platform",
    description: "Ghanaian healthtech company improving access to affordable medicines across Africa through technology-enabled pharmacy networks and supply chain optimization.",
    category: "HealthTech",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
    pitch: `# mPharma: Democratizing Healthcare Access in Africa

## The Healthcare Crisis
- 50% of Africans lack access to essential medicines
- High medicine costs due to supply chain inefficiencies
- Limited pharmacy networks in rural areas
- Poor medication adherence leading to health complications

## Our Solution
mPharma creates a technology-enabled healthcare ecosystem:
- **Pharmacy network** with 1,000+ locations across Africa
- **Supply chain optimization** to reduce medicine costs
- **Patient management** with digital health records
- **Insurance partnerships** for affordable healthcare

## Key Features
- 💊 Affordable medicines through bulk purchasing
- 📱 Digital prescription management
- 🏥 Network of partner pharmacies and clinics
- 📊 Health data analytics and insights
- 💳 Flexible payment options including insurance

## Market Impact
- 1M+ patients served across Africa
- 40% reduction in medicine costs
- 1,000+ pharmacy partners
- 95% medication availability rate

## Technology
- AI-powered demand forecasting
- Blockchain for supply chain transparency
- Mobile health records platform
- Real-time inventory management

## Traction
- $50M+ in medicine sales
- 500,000+ prescriptions filled
- 10+ African countries served
- 99% customer satisfaction rate

## Health Outcomes
- Improved medication adherence by 60%
- Reduced healthcare costs by 30%
- Increased access to chronic disease medicines
- Enhanced patient health monitoring

## The Vision
Make quality healthcare accessible and affordable for every African.

## Funding
$50M+ raised to expand across Africa and add telemedicine services.`,
    views: 0
  },
  {
    title: "Kuda - Digital Bank for Africa",
    description: "Nigerian neobank providing mobile-first banking services, offering zero-fee transactions, savings accounts, and credit solutions for underserved populations.",
    category: "Fintech",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    pitch: `# Kuda: The Bank of the Free

## The Banking Problem
- 60% of Africans are unbanked or underbanked
- Traditional banks charge high fees for basic services
- Limited access to credit and financial products
- Poor customer experience and long wait times

## Our Innovation
Kuda is Africa's first mobile-only bank:
- **Zero fees** on transfers and transactions
- **Instant account opening** in under 5 minutes
- **AI-powered credit scoring** for underserved populations
- **Beautiful mobile app** with intuitive design

## Key Features
- 💳 Free debit cards with no maintenance fees
- 💰 High-yield savings accounts
- 📱 Instant money transfers and payments
- 🏦 AI-powered lending and credit
- 🔒 Bank-grade security and compliance

## Market Traction
- 1.5M+ customers across Nigeria and UK
- $500M+ in deposits
- 2M+ transactions processed monthly
- 4.8/5 app store rating

## Technology
- Cloud-native banking infrastructure
- AI/ML for credit scoring and fraud detection
- Real-time payment processing
- Open banking APIs for third-party integration

## Financial Inclusion
- Served 500,000+ previously unbanked customers
- Provided $100M+ in credit to small businesses
- Reduced banking costs by 90%
- Increased savings rates by 200%

## Impact
- Created 1,000+ jobs in fintech
- Enabled 100,000+ small businesses with credit
- Processed $2B+ in transactions
- Improved financial literacy through education

## The Vision
Make banking free, simple, and accessible for every African.

## Funding
$100M+ raised to expand across Africa and add more financial products.`,
    views: 0
  },
  {
    title: "Twiga Foods - Agricultural Supply Chain",
    description: "Kenyan agritech company connecting smallholder farmers with retailers through a mobile-based platform, reducing food waste and improving farmer incomes.",
    category: "AgriTech",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
    pitch: `# Twiga Foods: Revolutionizing Africa's Food Supply Chain

## The Agricultural Challenge
- 70% of Africa's population depends on agriculture
- 40% of food is lost due to poor supply chain
- Smallholder farmers earn only 20% of retail price
- Limited access to markets and fair pricing

## Our Solution
Twiga creates a direct connection between farmers and retailers:
- **Mobile platform** for ordering and delivery
- **Fair pricing** based on quality and demand
- **Logistics network** for efficient distribution
- **Data analytics** for better decision making

## Key Features
- 📱 Mobile app for farmers and retailers
- 🚚 Optimized logistics and delivery
- 💰 Fair pricing and payment guarantees
- 📊 Data-driven insights and analytics
- 🌱 Quality assurance and standards

## Market Impact
- 100,000+ farmers connected to markets
- 50% increase in farmer incomes
- 30% reduction in food waste
- 10,000+ retailers served daily

## Technology
- AI-powered demand forecasting
- Mobile money integration
- GPS tracking for logistics
- Quality assessment algorithms

## Traction
- $50M+ in food sales processed
- 1M+ orders fulfilled
- 15+ African countries served
- 95% customer satisfaction rate

## Social Impact
- Improved food security for 2M+ people
- Created 5,000+ jobs in logistics
- Reduced post-harvest losses by 40%
- Enhanced farmer financial inclusion

## The Vision
Transform Africa's food system to be more efficient, fair, and sustainable.

## Funding
$50M+ raised to expand across Africa and add farmer financing services.`,
    views: 0
  },
  {
    title: "SafeBoda - Mobility and Delivery Platform",
    description: "Ugandan mobility startup providing safe motorcycle transport and delivery services across East Africa, improving road safety and creating income opportunities.",
    category: "Mobility",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
    pitch: `# SafeBoda: Safe, Smart, and Sustainable Mobility

## The Mobility Challenge
- 80% of urban transport in Africa is informal
- High accident rates due to unsafe practices
- Limited income opportunities for drivers
- Poor service quality and reliability

## Our Innovation
SafeBoda transforms motorcycle transport:
- **Safety-first approach** with trained drivers
- **Technology-enabled** booking and tracking
- **Multiple services** - transport, delivery, payments
- **Driver empowerment** with better earnings

## Key Features
- 🛵 Safe motorcycle transport with trained drivers
- 📦 Package and food delivery services
- 💳 Mobile payments and financial services
- 📱 Real-time tracking and safety features
- 🎓 Driver training and development programs

## Market Traction
- 2M+ rides completed safely
- 10,000+ trained drivers across East Africa
- 500,000+ app downloads
- 4.9/5 customer rating

## Technology
- GPS tracking and route optimization
- AI-powered safety monitoring
- Mobile payment integration
- Real-time demand-supply matching

## Impact
- Reduced accident rates by 60%
- Increased driver incomes by 150%
- Created 10,000+ job opportunities
- Improved urban mobility for 1M+ people

## Safety Features
- Driver background checks and training
- Helmet provision and safety gear
- Emergency response system
- Insurance coverage for all rides

## The Vision
Make motorcycle transport safe, reliable, and profitable across Africa.

## Funding
$20M+ raised to expand across Africa and add more mobility services.`,
    views: 0
  }
];

async function seedStartups() {
  try {
    console.log('🌱 Starting to seed startups...');
    console.log('Project ID:', env.NEXT_PUBLIC_SANITY_PROJECT_ID);
    console.log('Dataset:', env.NEXT_PUBLIC_SANITY_DATASET);
    console.log('Token exists:', !!env.SANITY_WRITE_TOKEN);
    
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
