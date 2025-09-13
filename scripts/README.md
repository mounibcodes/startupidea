# Startup Seeding Scripts

This directory contains scripts to manually add sample startups to your Pitchify database.

## Prerequisites

1. **Environment Variables**: Make sure you have the following environment variables set in your `.env.local` file:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=your_dataset_name
   SANITY_API_TOKEN=your_api_token
   ```

2. **Sanity API Token**: You'll need to create a Sanity API token with write permissions:
   - Go to [sanity.io/manage](https://sanity.io/manage)
   - Select your project
   - Go to "API" tab
   - Create a new token with "Editor" permissions
   - Add it to your `.env.local` file

## Installation

Install the required dependencies:

```bash
npm install
```

## Usage

### Option 1: Using npm script (Recommended)

```bash
npm run seed
```

### Option 2: Direct execution

```bash
# TypeScript version
npx tsx scripts/seed-startups.ts

# JavaScript version
node scripts/seed-startups.js
```

## What the script does

1. **Checks for existing authors**: The script first checks if there are any authors in your database
2. **Creates a default author**: If no authors exist, it creates a "Demo Author" for the sample startups
3. **Creates sample startups**: Adds 5 sample startups with realistic pitch data:
   - EcoTrack - Carbon Footprint Tracker
   - HealthSync - AI Medical Assistant
   - EduFlow - Personalized Learning Platform
   - FoodWaste Zero - Smart Kitchen Assistant
   - FitAI - Personal Training Revolution

## Sample Data

Each startup includes:
- **Title**: Catchy startup name
- **Description**: Brief description
- **Category**: Industry category
- **Image**: High-quality stock photo from Unsplash
- **Pitch**: Detailed markdown pitch with:
  - Problem statement
  - Solution overview
  - Key features
  - Market opportunity
  - Traction metrics
  - Funding goals
- **Views**: Initialized to 0

## Customization

You can easily customize the sample data by editing the `sampleStartups` array in either:
- `scripts/seed-startups.ts` (TypeScript version)
- `scripts/seed-startups.js` (JavaScript version)

### Adding your own startups

```typescript
const sampleStartups = [
  {
    title: "Your Startup Name",
    description: "Your startup description",
    category: "Your Category",
    image: "https://your-image-url.com/image.jpg",
    pitch: `# Your Startup Pitch

## The Problem
Your problem statement...

## The Solution
Your solution...

## Key Features
- Feature 1
- Feature 2
- Feature 3

## Market Opportunity
Your market analysis...

## Traction
Your traction metrics...

## Funding
Your funding goals...`,
    views: 0
  },
  // ... add more startups
];
```

## Troubleshooting

### Common Issues

1. **"Token not found" error**: Make sure your `SANITY_API_TOKEN` is correctly set in `.env.local`

2. **"Project not found" error**: Verify your `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` are correct

3. **"Permission denied" error**: Make sure your API token has write permissions

4. **"Author not found" error**: The script will automatically create a default author if none exist

### Getting Help

If you encounter any issues:
1. Check the console output for detailed error messages
2. Verify your environment variables
3. Make sure your Sanity project is properly configured
4. Check that your API token has the correct permissions

## Safety

- The script is safe to run multiple times
- It won't create duplicate startups (each has a unique slug)
- It only creates a default author if none exist
- All operations are logged to the console
