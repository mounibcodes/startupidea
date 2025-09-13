import { createClient } from '@sanity/client';
import slugify from 'slugify';

// Initialize Sanity client using the same env vars as your app
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  token: process.env.SANITY_WRITE_TOKEN!, // Using the same token as your app
  useCdn: false,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-10-01',
});

interface StartupData {
  title: string;
  description: string;
  category: string;
  image: string;
  pitch: string;
  authorId: string;
  views: number;
}

// Sample startup data
const sampleStartups: Omit<StartupData, 'authorId'>[] = [
  {
    title: "EcoTrack - Carbon Footprint Tracker",
    description: "An AI-powered mobile app that helps individuals and businesses track and reduce their carbon footprint through smart analytics and personalized recommendations.",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1569163139394-de446e5b0c0e?w=800&h=600&fit=crop",
    pitch: `# EcoTrack: Making Carbon Footprint Tracking Simple

## The Problem
- 70% of people want to reduce their carbon footprint but don't know where to start
- Current solutions are complex and don't provide actionable insights
- Businesses struggle to measure and reduce their environmental impact

## Our Solution
EcoTrack uses AI to automatically track your carbon footprint by analyzing:
- **Spending patterns** from connected bank accounts
- **Travel data** from GPS and calendar integration
- **Energy usage** from smart home devices
- **Shopping habits** through receipt scanning

## Key Features
- 📊 Real-time carbon footprint dashboard
- 🎯 Personalized reduction recommendations
- 🏢 Business team tracking and competitions
- 🌱 Carbon offset marketplace integration
- 📱 Gamification with achievements and leaderboards

## Market Opportunity
- $2.5B carbon management software market
- Growing corporate sustainability requirements
- Increasing consumer environmental consciousness

## Traction
- 10,000+ beta users
- 50+ enterprise clients
- $500K ARR in first 6 months

## Funding
Seeking $2M Series A to scale user acquisition and expand enterprise features.`,
    views: 0
  },
  {
    title: "HealthSync - AI Medical Assistant",
    description: "Revolutionary AI-powered platform that provides instant medical advice, symptom analysis, and connects patients with the right healthcare providers.",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
    pitch: `# HealthSync: Your Personal AI Medical Assistant

## The Challenge
- 40% of medical visits are unnecessary, costing $200B annually
- Patients struggle to find the right specialist
- Healthcare providers are overwhelmed with basic inquiries

## Our Innovation
HealthSync combines advanced AI with medical expertise to:
- **Analyze symptoms** using natural language processing
- **Provide instant triage** and care recommendations
- **Match patients** with appropriate specialists
- **Schedule appointments** automatically

## Technology Stack
- Advanced NLP for symptom analysis
- Machine learning for diagnosis accuracy
- Integration with major EMR systems
- HIPAA-compliant secure platform

## Market Impact
- Reduce unnecessary ER visits by 60%
- Save patients $2,000+ annually on healthcare costs
- Increase provider efficiency by 40%

## Business Model
- Freemium for basic symptom checking
- Premium subscriptions for advanced features
- B2B licensing to healthcare systems

## Traction & Metrics
- 100,000+ active users
- 95% accuracy in symptom analysis
- 200+ partnered healthcare providers
- $1.2M ARR with 300% YoY growth

## The Ask
$5M Series A to expand AI capabilities and scale nationwide.`,
    views: 0
  },
  {
    title: "EduFlow - Personalized Learning Platform",
    description: "AI-driven educational platform that adapts to each student's learning style, pace, and interests to maximize learning outcomes.",
    category: "Education",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
    pitch: `# EduFlow: The Future of Personalized Education

## The Problem
- One-size-fits-all education fails 60% of students
- Teachers can't personalize for 30+ students per class
- Students lose interest due to irrelevant content

## Our Solution
EduFlow uses AI to create personalized learning experiences:
- **Adaptive curriculum** that adjusts to each student's pace
- **Multi-modal learning** (visual, auditory, kinesthetic)
- **Real-time progress tracking** for teachers and parents
- **Gamified learning** with personalized challenges

## Key Features
- 🧠 AI-powered learning path optimization
- 📚 10,000+ interactive lessons across all subjects
- 👥 Collaborative learning tools
- 📊 Advanced analytics dashboard
- 🎮 Gamification with rewards and achievements

## Target Market
- K-12 schools (50M+ students in US)
- Homeschooling families (3M+ students)
- Corporate training programs

## Competitive Advantage
- Proprietary AI algorithm with 40% better learning outcomes
- Integration with existing school systems
- Comprehensive teacher training and support

## Traction
- 500+ schools using the platform
- 50,000+ students with 85% improved test scores
- $2.5M ARR with 400% growth

## Funding Goals
$8M Series A to expand content library and scale sales team.`,
    views: 0
  },
  {
    title: "FoodWaste Zero - Smart Kitchen Assistant",
    description: "IoT-powered kitchen system that tracks food inventory, suggests recipes, and prevents food waste through smart notifications and meal planning.",
    category: "Food & Beverage",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
    pitch: `# FoodWaste Zero: End Food Waste Forever

## The Crisis
- 40% of food produced is wasted globally
- Average family wastes $1,500 worth of food annually
- Food waste contributes to 8% of global greenhouse emissions

## Our Innovation
FoodWaste Zero combines IoT sensors, AI, and mobile app to:
- **Track food inventory** with smart fridge sensors
- **Predict expiration dates** using machine learning
- **Suggest recipes** based on available ingredients
- **Automate grocery lists** and meal planning

## Technology
- Smart sensors for temperature and weight monitoring
- Computer vision for food recognition
- AI recipe recommendation engine
- Integration with grocery delivery services

## Market Opportunity
- $1.3T global food waste market
- 130M households in target markets
- Growing sustainability awareness

## Business Model
- Hardware sales ($299 per system)
- Premium app subscriptions ($9.99/month)
- Grocery delivery partnerships

## Traction
- 10,000+ systems sold
- 60% reduction in food waste for users
- $3M ARR with 500% growth

## The Vision
Make food waste obsolete by 2030 through smart technology and behavioral change.

## Funding
$6M Series A to scale manufacturing and expand internationally.`,
    views: 0
  },
  {
    title: "FitAI - Personal Training Revolution",
    description: "AI-powered fitness platform that provides personalized workout plans, form correction, and nutrition guidance through computer vision and machine learning.",
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    pitch: `# FitAI: Your Personal Trainer in Your Pocket

## The Problem
- 80% of people quit fitness programs within 3 months
- Personal trainers cost $50-100/hour
- Most people don't know proper form, leading to injuries

## Our Solution
FitAI uses computer vision and AI to provide:
- **Real-time form correction** through phone camera
- **Personalized workout plans** based on goals and progress
- **Nutrition guidance** with meal planning
- **Progress tracking** with detailed analytics

## Key Features
- 📱 Camera-based form analysis
- 🏋️ 1000+ exercise library
- 🎯 Goal-based workout generation
- 📊 Comprehensive progress tracking
- 👥 Social features and challenges

## Technology
- Advanced computer vision for pose estimation
- Machine learning for personalized recommendations
- Integration with wearables and fitness apps
- Real-time feedback and corrections

## Market Size
- $96B global fitness market
- 200M+ fitness app users
- Growing demand for personalized fitness

## Traction
- 500,000+ downloads
- 4.8/5 app store rating
- $5M ARR with 300% growth
- 200+ fitness influencers as partners

## Competitive Edge
- Most accurate form analysis in the market
- 90% user retention rate (vs 20% industry average)
- Proprietary AI that learns from user feedback

## Funding Goals
$10M Series A to expand AI capabilities and scale marketing.`,
    views: 0
  }
];

async function seedStartups() {
  try {
    console.log('🌱 Starting to seed startups...');
    
    // First, let's check if we have any authors
    const authors = await client.fetch('*[_type == "author"]');
    console.log(`Found ${authors.length} authors in the database`);
    
    let authorId: string;
    
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
        _type: 'startup' as const,
        title: startupData.title,
        description: startupData.description,
        category: startupData.category,
        image: startupData.image,
        views: startupData.views,
        slug: {
          _type: 'slug' as const,
          current: slug,
        },
        author: {
          _type: 'reference' as const,
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
