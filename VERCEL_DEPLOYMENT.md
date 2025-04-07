# Deploying Your Portfolio on Vercel

This guide will walk you through the process of deploying your portfolio website on Vercel.

## Step 1: Prepare Your Repository

1. Make sure all your changes are committed
2. Create a new repository on GitHub (if you haven't already)
3. Push your code to the repository

## Step 2: Sign Up for Vercel

1. Go to [Vercel](https://vercel.com)
2. Sign up for an account (you can use your GitHub account for easy integration)

## Step 3: Import Your Project

1. From your Vercel dashboard, click "Add New..."
2. Select "Project"
3. Connect your GitHub account if you haven't already
4. Select your portfolio repository from the list
5. Configure your project settings:

   - **Framework Preset**: Vite
   - **Build Command**: `vite build`
   - **Output Directory**: `dist`
   - **Environment Variables**: Add any necessary environment variables

6. Click "Deploy"

## Step 4: Check Your Deployment

1. Wait for the deployment to complete
2. Click on the generated URL to view your live portfolio
3. Verify that everything is working correctly

## Step 5: Configure Your Custom Domain (Optional)

1. In your project settings, click on "Domains"
2. Add your custom domain
3. Follow the instructions to configure DNS settings

## Notes About Your Portfolio

- The static assets (like your resume PDF) should work automatically
- The `vercel.json` file in your project ensures proper routing
- Front-end only features should work without any issues
- Backend features that require a database will need additional configuration

## Troubleshooting

If you encounter any issues during deployment:

1. Check the deployment logs on Vercel
2. Ensure all your dependencies are correctly listed in package.json
3. Make sure your build process completes successfully

For more help, refer to [Vercel's documentation](https://vercel.com/docs).
