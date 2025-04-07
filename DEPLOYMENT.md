# Deployment Guide

This document provides instructions for deploying your portfolio website on both Vercel and Replit.

## Deploying on Vercel (Recommended)

Vercel is an excellent platform for deploying static websites and React applications.

### Prerequisites
- A GitHub account
- A Vercel account (sign up at https://vercel.com)

### Steps

1. **Push your code to GitHub**
   - Create a new repository on GitHub
   - Push your code to the repository

2. **Deploy to Vercel**
   - Go to https://vercel.com
   - Sign in with your GitHub account
   - Click "Add New..." and select "Project"
   - Import your GitHub repository
   - Configure your project:
     - Framework Preset: Vite
     - Build Command: `vite build`
     - Output Directory: `dist`
   - Click "Deploy"

3. **Environment Variables (if needed)**
   - After deployment, go to your project settings in Vercel
   - Add any environment variables under the "Environment Variables" section

### Important Notes for Vercel Deployment

- The `vercel.json` file in this project is already configured for proper deployment
- For database functionality, consider using:
  - Vercel Postgres (https://vercel.com/docs/storage/vercel-postgres)
  - Supabase (https://supabase.com/)
  - PlanetScale for MySQL (https://planetscale.com/)

## Deploying on Replit

You're already running this project on Replit, but you can also make it accessible to others.

### Steps

1. **Make your Repl public**
   - Go to your Repl's settings
   - Under "Privacy", set it to "Public" or "Unlisted"

2. **Deploy with Replit**
   - Click on the "Deploy" button at the top of your Replit workspace
   - Follow the on-screen instructions to deploy your application

3. **Environment Variables**
   - Add any necessary environment variables in the "Secrets" tab in your Repl

### Important Notes for Replit Deployment

- You already have a workflow set up to run the application
- Replit provides a URL for your deployed application
- You can set up a custom domain in the Replit settings

## Tips for Both Platforms

- Test your website thoroughly before deployment
- Ensure all links work correctly
- Check that your resume PDF is downloadable
- Verify that all sections of your portfolio display correctly
- Make sure the website is responsive on different devices

## Database Considerations

If you're using database functionality:

1. **For Vercel:**
   - You'll need to set up a database service like Vercel Postgres, Supabase, or PlanetScale
   - Configure the database connection string in your environment variables

2. **For Replit:**
   - You're already using the built-in PostgreSQL database
   - Make sure your connection details are properly set up in the Secrets tab

## Need Help?

If you encounter any issues during deployment, refer to:
- [Vercel Documentation](https://vercel.com/docs)
- [Replit Documentation](https://docs.replit.com)