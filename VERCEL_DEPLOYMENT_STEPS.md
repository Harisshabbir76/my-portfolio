# Deploying Your Portfolio to Vercel

This guide provides detailed instructions for deploying this portfolio application to Vercel. Follow these steps to successfully publish your portfolio online.

## Prerequisites

- A [Vercel](https://vercel.com) account (you can sign up using GitHub, GitLab, or Bitbucket)
- Git repository containing your portfolio project (GitHub, GitLab, or Bitbucket)

## Step 1: Prepare Your Project

Ensure your project is properly configured for Vercel deployment:

✅ The `vercel.json` file is already configured in the project root
✅ API routes are set up in the `/api` directory
✅ Frontend build settings are configured correctly

## Step 2: Deploy to Vercel

### Option 1: Deploy via the Vercel Dashboard

1. Log in to your Vercel account and go to the dashboard
2. Click "Add New..." and select "Project"
3. Import your repository from GitHub, GitLab, or Bitbucket
4. Configure the project with these settings:
   - **Framework Preset**: Leave as "Other"
   - **Build Command**: `npm run build`
   - **Output Directory**: `client/dist`
   - **Install Command**: `npm install`
5. Under "Environment Variables", add any required environment variables
   (You don't need to add any environment variables for basic functionality)
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install the Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Log in to your Vercel account:
   ```bash
   vercel login
   ```

3. Navigate to your project directory and run:
   ```bash
   vercel
   ```

4. Follow the CLI prompts, using the same settings as mentioned in Option 1.

## Step 3: Verify the Deployment

After deployment:

1. Vercel will provide you with a deployment URL (e.g., `your-portfolio.vercel.app`)
2. Open the URL in your browser to verify that your portfolio loads correctly
3. Test all functionality, including:
   - Navigation
   - Animations
   - Contact form
   - Resume download

## Troubleshooting

If you encounter issues during deployment:

### API Routes Not Working

- Check that the API routes are properly configured in `vercel.json`
- Ensure API files in the `/api` directory export default functions
- Verify that environment variables needed for API functionality are set

### Static Assets Not Loading

- Ensure paths to assets use relative paths or are properly imported
- For problematic assets, check if they're included in the build output
- Add public assets to a `public` folder in your project

### Build Errors

- Review the build logs in your Vercel dashboard
- Common issues include:
  - Missing dependencies in package.json
  - Incorrect build commands
  - TypeScript errors that didn't appear locally

## Custom Domain Setup

To use a custom domain:

1. In your Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain and follow Vercel's instructions for DNS configuration

## Continuous Deployment

Your project is now set up for continuous deployment:

- Any changes pushed to the main branch will automatically trigger a new deployment
- You can disable automatic deployments in project settings if needed

---

For additional help, refer to [Vercel's documentation](https://vercel.com/docs) or contact Vercel support.