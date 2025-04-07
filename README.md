# Haris Shabbir - Portfolio Website

A dynamic portfolio website showcasing developer skills, projects, and resume through an engaging, modern interface with animations and responsive design.

## Features

- Responsive design that works on all devices
- Interactive UI with smooth animations
- 3D elements and dynamic gradients
- Contact form
- Project showcases
- Skills visualization
- Downloadable resume
- Dark theme with accent colors

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Express.js, Serverless Functions
- **Database**: PostgreSQL/MySQL (configurable)
- **Deployment**: Vercel-ready

## Local Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open [http://localhost:5000](http://localhost:5000) to view it in the browser

## Deployment Instructions for Vercel

### Setup

1. Create a GitHub repository and push your code
2. Sign up at [https://vercel.com](https://vercel.com)
3. Connect your GitHub account to Vercel
4. Import your GitHub repository

### Configuration

1. In the Vercel project setup:
   - **Framework Preset**: Other
   - **Build Command**: `npm run build`
   - **Output Directory**: `client/dist`
   - **Install Command**: `npm install`

2. Deploy the project
   - The `vercel.json` file is already configured for deployment
   - API routes will be automatically deployed as serverless functions

### Verifying Deployment

After deployment:
1. Vercel will provide a deployment URL
2. Test all functionality:
   - Navigation
   - Animations
   - Contact form
   - Resume download

## Environment Configuration

No environment variables are required for basic functionality. The project is ready to deploy with default settings.

## Folder Structure

```
├── api/                  # Serverless API endpoints
├── client/               # Frontend React application
│   ├── public/           # Static assets
│   └── src/              # React components and logic
├── server/               # Express.js server (for local development)
└── shared/               # Shared code between client and server
```

## License

MIT
